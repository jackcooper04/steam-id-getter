const fs = require('fs-extra');
const axios = require('axios');
console.log('Getting Games from Steam')
function getGames(){
  var config = {
    method: 'get',
    url: 'http://api.steampowered.com/ISteamApps/GetAppList/v0002/',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
  //  var data = JSON.stringify(response.data);
  if (response.data.applist.apps.length == 0){
    console.log('Error: Retrying');
    getGames();
    return;
  }
    var parse = response.data.applist.apps;
    for (gameIdx in response.data.applist.apps){
      response.data.applist.apps[gameIdx].name =  response.data.applist.apps[gameIdx].name.replace(/,/g,' ');
    }
    var data = JSON.stringify(response.data);
    fs.writeFile('./games.json', data, 'utf8');
    console.log('Games Written to File')
  })
  .catch(function (error) {
    console.log(error);
  });
}
getGames();