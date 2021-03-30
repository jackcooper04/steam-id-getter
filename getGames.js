const fs = require('fs-extra');
const axios = require('axios');
console.log('Getting Games from Steam')
var config = {
    method: 'get',
    url: 'http://api.steampowered.com/ISteamApps/GetAppList/v0002/',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    var data = JSON.stringify(response.data);
    fs.writeFile('./games.json', data, 'utf8');
    console.log('Games Written to File')
  })
  .catch(function (error) {
    console.log(error);
  });