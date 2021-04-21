const express = require('express');
const router = express.Router();
const request = require('request');
const convert = require('xml-js');
const config = require('../config/key');
const axios = require('axios');

const baseUrl = 'http://openapi.data.go.kr/openapi/service/rest/Covid19';

const cityUrl = `${baseUrl}/getCovid19SidoInfStateJson`;
const totalUrl = `${baseUrl}/getCovid19InfStateJson`;
const worldUrl = `${baseUrl}/getCovid19NatInfStateJson`;
const vaccine = 'https://nip.kdca.go.kr/irgd/cov19stats.do?list=all';

const now = new Date();
let hour = now.getHours();
const year = now.getFullYear();
const month = now.getMonth() + 1;
let day = now.getDate();

let count = true;

// 10시가 되면 날짜 업데이트

if (count) {
  if (hour === 0) {
    day = day - 1;
    count = false;
  } else if (hour === 10) {
    count = true;
  } else {
    count = false;
  }
} else if (hour === 10) {
  count = true;
} else {
  count = false;
}

const toDay = `${year}${month < 10 ? `0${month}` : `${month}`}${day < 10 ? `0${day}` : `${day}`}`;

let BaseQueryParams = '?' + encodeURIComponent('ServiceKey') + `=${config.key}`; /* Service Key*/
BaseQueryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
BaseQueryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
BaseQueryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent(`${toDay}`);

router.get('/cityCoronaList', (req, res) => {
  request(
    {
      url: cityUrl + BaseQueryParams + '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent(`${toDay}`),
      method: 'GET',
    },
    function (error, response, body) {
      if (error) {
        return res.json({ success: false, err: error });
      }
      // xml => json
      let result = body;
      let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });

      const arr = [];
      const list = JSON.parse(xmlToJson).response.body.items.item;

      // 합계 제거
      list.map((item) => {
        if (item.gubun._text !== '합계') {
          arr.push(item);
        }
      });

      // 전일 대비 확진자 수 기준 내림차순으로 정렬
      arr.sort((a, b) => {
        return b.incDec._text - a.incDec._text;
      });

      return res.json({ success: true, body: arr });
    },
  );
});
router.get('/totalCoronaInfo', (req, res) => {
  request(
    {
      url:
        totalUrl + BaseQueryParams + '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent(`${toDay}`),
      method: 'GET',
    },
    function (error, response, body) {
      if (error) {
        return res.json({ success: false, err: error });
      }
      // xml => json
      let result = body;
      let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });

      const list = JSON.parse(xmlToJson).response.body.items.item;

      const totalCoronaInfo = {
        decideCnt: list.decideCnt._text,
        deathCnt: list.deathCnt._text,
        clearCnt: list.clearCnt._text,
        examCnt: list.examCnt._text,
      };

      return res.json({ success: true, body: totalCoronaInfo });
    },
  );
});

router.get('/worldCoronaList', (req, res) => {
  request(
    {
      url:
        worldUrl + BaseQueryParams + '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent(`${toDay}`),
      method: 'GET',
    },
    function (error, response, body) {
      if (error) {
        return res.json({ success: false, err: error });
      }
      // xml => json
      let result = body;
      let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });

      const arr = [];
      const list = JSON.parse(xmlToJson).response.body.items.item;

      // 기타 제거
      list.map((item) => {
        if (item.areaNm._text !== '기타') {
          arr.push(item);
        }
      });
      // 확진자 수 기준 내림차순으로 정렬
      arr.sort((a, b) => {
        return b.natDefCnt._text - a.natDefCnt._text;
      });

      return res.json({ success: true, body: arr });
    },
  );
});

router.get('/totalVaccinationInfo', (req, res) => {
  axios
    .get(vaccine)
    .then((response) => {
      let result = response.data;
      let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });

      const list = JSON.parse(xmlToJson).response.body.items.item;

      const totalVaccineInfo = {
        toDayFirst: list[0].firstCnt._text,
        toDaySecond: list[0].secondCnt._text,
        totalFirst: list[2].firstCnt._text,
        totalSecond: list[2].secondCnt._text,
      };
      return res.json({ success: true, body: totalVaccineInfo });
    })
    .catch((err) => console.log(err));
});

router.get('/WeekAgoCoronaInfo', (req, res) => {
  request(
    {
      url:
        cityUrl +
        BaseQueryParams +
        '&' +
        encodeURIComponent('startCreateDt') +
        '=' +
        encodeURIComponent(`${toDay - 7}`),
      method: 'GET',
    },
    function (error, response, body) {
      if (error) {
        return res.json({ success: false, err: error });
      }
      // xml => json
      let result = body;
      let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });

      const arr = [];
      const list = JSON.parse(xmlToJson).response.body.items.item;

      list.map((item) => {
        if (item.gubun._text === '합계') {
          const aweekCorona = {
            incDec: item.incDec._text,
            stdDay: item.stdDay._text.slice(7, 13),
          };
          arr.push(aweekCorona);
        }
      });

      return res.json({ success: true, body: arr });
    },
  );
});

router.get('/koreaIncDecCoronaInfo', (req, res) => {
  request(
    {
      url:
        totalUrl +
        BaseQueryParams +
        '&' +
        encodeURIComponent('startCreateDt') +
        '=' +
        encodeURIComponent(`${toDay - 1}`),
      method: 'GET',
    },
    function (error, response, body) {
      if (error) {
        return res.json({ success: false, err: error });
      }
      // xml => json
      let result = body;
      let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });

      const list = JSON.parse(xmlToJson).response.body.items.item;

      // 전일 대비 증감 수
      const incDecCoronaInfo = {
        decide_cnt: Math.abs(list[0].decideCnt._text - list[1].decideCnt._text),
        death_cnt: Math.abs(list[0].deathCnt._text - list[1].deathCnt._text),
        clear_cnt: Math.abs(list[0].clearCnt._text - list[1].clearCnt._text),
        exam_cnt: Math.abs(list[0].examCnt._text - list[1].examCnt._text),
      };

      return res.json({ success: true, body: incDecCoronaInfo });
    },
  );
});

router.get('/totalWorldCoronaInfo', (req, res) => {
  request(
    {
      url: 'https://api.covid19api.com/summary',
      method: 'GET',
    },
    function (error, response, body) {
      if (error) {
        return res.json({ success: false, err: error });
      }

      const list = JSON.parse(body).Global;

      const totalWorldCoronaInfo = {
        totalConfirmed: list.TotalConfirmed,
        totalDeaths: list.TotalDeaths,
        totalRecovered: list.TotalRecovered,
        newConfirmed: list.NewConfirmed,
        newDeaths: list.NewDeaths,
        newRecovered: list.NewRecovered,
      };

      return res.json({ success: true, body: totalWorldCoronaInfo });
    },
  );
});

module.exports = router;
