const express = require('express');
const router = express.Router();
const request = require('request');
const convert = require('xml-js');
const configKey = require('../config/key');
const configUrl = require('../config/url');
const axios = require('axios');
const moment = require('moment');

const now = new Date();
let hour = now.getHours();
const year = now.getFullYear();
const month = now.getMonth() + 1;
let day = now.getDate();

// 10시가 되면 날짜 업데이트

if (hour < 10) {
  day = day - 1;
}

const toDay = `${year}${month < 10 ? `0${month}` : `${month}`}${day < 10 ? `0${day}` : `${day}`}`;

const timeFunc = (day) => {
  return moment(toDay).subtract(day, 'days').format('YYYYMMDD');
};

let BaseQueryParams = '?' + encodeURIComponent('ServiceKey') + `=${configKey.key}`; /* Service Key*/
BaseQueryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
BaseQueryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
BaseQueryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent(`${toDay}`);

router.get('/cityCoronaList', (req, res) => {
  request(
    {
      url:
        `${configUrl.cityUrl}` +
        BaseQueryParams +
        '&' +
        encodeURIComponent('startCreateDt') +
        '=' +
        encodeURIComponent(`${timeFunc(1)}`),
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
      const toDay = [];
      const yesterDay = [];

      const list = JSON.parse(xmlToJson).response.body.items.item;

      // 어제, 오늘 데이터 나누기

      for (let i = 0; i < list.length; i++) {
        if (i <= 18) {
          toDay.push(list[i]);
        } else {
          yesterDay.push(list[i]);
        }
      }

      for (let i = 0; i < toDay.length; i++) {
        if (toDay[i].gubun._text !== '합계' && yesterDay[i].gubun._text !== '합계') {
          const cityCoronaInfo = {
            gubun: toDay[i].gubun._text,
            gubun_en: toDay[i].gubunEn._text,
            defCnt: toDay[i].defCnt._text,
            incDec: toDay[i].incDec._text,
            incDeath: Math.abs(toDay[i].deathCnt._text - yesterDay[i].deathCnt._text),
            incIsolClear: Math.abs(toDay[i].isolClearCnt._text - yesterDay[i].isolClearCnt._text),
            deathCnt: toDay[i].deathCnt._text,
            isolClearCnt: toDay[i].isolClearCnt._text,
            qurRate: toDay[i].qurRate._text,
          };
          arr.push(cityCoronaInfo);
        }
      }

      // 전일 대비 확진자 수 기준 내림차순으로 정렬
      arr.sort((a, b) => {
        return b.incDec - a.incDec;
      });

      return res.json({ success: true, body: arr });
    },
  );
});
router.get('/totalCoronaInfo', (req, res) => {
  request(
    {
      url:
        `${configUrl.totalUrl}` +
        BaseQueryParams +
        '&' +
        encodeURIComponent('startCreateDt') +
        '=' +
        encodeURIComponent(`${toDay}`),
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
        `${configUrl.worldUrl}` +
        BaseQueryParams +
        '&' +
        encodeURIComponent('startCreateDt') +
        '=' +
        encodeURIComponent(`${toDay}`),
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
        if (item.areaNm._text !== '기타') {
          const worldCoronaInfo = {
            nationNm: item.nationNm._text,
            natDefCnt: item.natDefCnt._text,
            natDeathCnt: item.natDeathCnt._text,
            natDeathRate: item.natDeathRate._text.slice(0, 4),
          };
          arr.push(worldCoronaInfo);
        }
      });

      // 확진자 수 기준 내림차순으로 정렬
      arr.sort((a, b) => {
        return b.natDefCnt - a.natDefCnt;
      });

      return res.json({ success: true, body: arr });
    },
  );
});

router.get('/totalVaccinationInfo', (req, res) => {
  axios
    .get(`${configUrl.vaccineUrl}`)
    .then((response) => {
      let result = response.data;
      let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });

      const list = JSON.parse(xmlToJson).response.body.items.item;

      const totalVaccineInfo = {
        firstVaccine: list[0].firstCnt._text,
        secondVaccine: list[0].secondCnt._text,
        totalFirstVaccine: list[1].firstCnt._text,
        totalSecondVaccine: list[1].secondCnt._text,
      };
      return res.json({ success: true, body: totalVaccineInfo });
    })
    .catch((err) => console.log(err));
});

router.get('/WeekAgoCoronaInfo', (req, res) => {
  request(
    {
      url:
        `${configUrl.cityUrl}` +
        BaseQueryParams +
        '&' +
        encodeURIComponent('startCreateDt') +
        '=' +
        encodeURIComponent(`${timeFunc(7)}`),
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
          const aweekCoronaInfo = {
            incDec: item.incDec._text,
            stdDay: item.stdDay._text.slice(7, 13),
          };
          arr.push(aweekCoronaInfo);
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
        `${configUrl.totalUrl}` +
        BaseQueryParams +
        '&' +
        encodeURIComponent('startCreateDt') +
        '=' +
        encodeURIComponent(`${timeFunc(1)}`),
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
      url: `${configUrl.totalWorldUrl}`,
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

router.get('/disasterCharactersList', (req, res) => {
  request(
    {
      url:
        `${configUrl.disasterCharactersUrl}` +
        BaseQueryParams +
        '&' +
        encodeURIComponent('startCreateDt') +
        '=' +
        encodeURIComponent(`${toDay}`) +
        BaseQueryParams +
        '&' +
        encodeURIComponent('type') +
        '=' +
        encodeURIComponent('xml'),
      method: 'GET',
    },
    function (error, response, body) {
      if (error) {
        return res.json({ success: false, error });
      }
      const arr = [];

      let result = body;
      let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });

      const list = JSON.parse(xmlToJson).DisasterMsg.row;

      list.map((item) => {
        const disasterCharactersList = {
          create_date: item.create_date._text,
          location_name: item.location_name._text,
          msg: item.msg._text,
        };

        arr.push(disasterCharactersList);
      });

      return res.json({ success: true, body: arr });
    },
  );
});

module.exports = router;
