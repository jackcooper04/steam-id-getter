const fs = require('fs-extra');
const axios = require('axios');
const games = require('./games.json').applist.apps;
/* fs.readFile('./games.json', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    
    console.log(content);
});
 */

module.exports = {
    getId:function(game){
        for (gameIdx in games){
            if (games[gameIdx].name == game){
                return games[gameIdx]
               
            }
        }
        //console.log(games)
    },
    getName:function(id){
      
            for (gameIdx in games){
                if (games[gameIdx].appid == id){
                    return games[gameIdx]
                   
                }
            }
            //console.log(games)
        
    }
}