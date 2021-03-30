# Steam Id Getter

Basic Package that converts steam game names to steam id's

## Install
``` 
npm install steam-id-getter --save
```

## Get ID

```js 
const steamId = require('steam-id-getter');

console.log(steamId.getId('Subnautica'));
```
### This should return
```json
{ appid: 264710, name: 'Subnautica' }
```