const express = require('express');
const request = require('request');
const convert = require('xml-js');
const config = require('./config/key');
const app = express();
const port = 5000;

const cityUrl = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson';
const totalUrl = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson';

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
  }
} else if (hour === 10) {
  counte = true;
}

const toDay = `${year}${month < 10 ? `0${month}` : `${month}`}${day < 10 ? `0${day}` : `${day}`}`;

let queryParams = '?' + encodeURIComponent('ServiceKey') + `=${config.key}`; /* Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
queryParams += '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent(`${toDay}`); /* */
queryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent(`${toDay}`); /* */

app.get('/api/cityCorona', (req, res) => {
  request(
    {
      url: cityUrl + queryParams,
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
app.get('/api/totalCorona', (req, res) => {
  request(
    {
      url: totalUrl + queryParams,
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
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
