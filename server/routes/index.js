const express = require('express');
const router = express.Router();
const request = require('request');
const convert = require('xml-js');
const config = require('../config/key');
// const axios = require('axios');

const baseUrl = 'http://openapi.data.go.kr/openapi/service/rest/Covid19';

const cityUrl = `${baseUrl}/getCovid19SidoInfStateJson`;
const totalUrl = `${baseUrl}/getCovid19InfStateJson`;
const worldUrl = `${baseUrl}/getCovid19NatInfStateJson`;

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
    counte = true;
  } else {
    counte = false;
  }
} else if (hour === 10) {
  counte = true;
} else {
  counte = false;
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
      let result = body;
      let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });
      return res.json({ success: true, body: xmlToJson });
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
      let result = body;
      let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });
      return res.json({ success: true, body: xmlToJson });
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
      let result = body;
      let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });
      return res.json({ success: true, body: xmlToJson });
    },
  );
});

router.get('/vaccinationInfo', (req, res) => {
  // 서비스 복구 html 코드 들어옴
  // request(
  //   {
  //     url: 'https://nip.kdca.go.kr/irgd/cov19stats.do?list=all',
  //     method: 'GET',
  //   },
  //   function (error, response, body) {
  //     if (error) {
  //       return res.json({ success: false, err: error });
  //     }
  //     console.log(body);
  //     return res.json({ success: true, body });
  //   },
  // );
  // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  // 데이터 잘 들어오는데 클라한테 넘기면 오류남
  // axios
  //   .get('https://nip.kdca.go.kr/irgd/cov19stats.do?list=all')
  //   .then((response) => {
  //     console.log(response);
  //     console.log('true');
  //     return res.json({ success: true, response });
  //   })
  //   .catch((err) => {
  //     console.log('false');
  //     return res.json({ success: false, err });
  //   });
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
      let result = body;
      let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });
      return res.json({ success: true, body: xmlToJson });
    },
  );
});

router.get('/incDecCoronaInfo', (req, res) => {
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
      let result = body;
      let xmlToJson = convert.xml2json(result, { compact: true, spaces: 2 });
      return res.json({ success: true, body: xmlToJson });
    },
  );
});

module.exports = router;
