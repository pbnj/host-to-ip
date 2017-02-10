# get-ip
A flexible way to look up IP addresses for host names (e.g. `github.com`) and URLs (e.g. `https://api.github.com`).

## Install
`npm install --save get-ip`

## Usage
```
const getIp = require('get-ip');

const hostname = 'github.com'
const fqdn = 'https://api.github.com'

getIp(hostname).then(ip => console.log(ip)).catch(err => console.error(err))
//=> '192.30.253.112'

getIp(fqdn, {all: true, family: 4}).then(ip => console.log(ip)).catch(err => console.error(err))
//=> [{"address": "192.30.253.116", "family": 4}, {"address": "192.30.253.117", "family": 4}]
```

## License
MIT &copy; [Peter Benjamin](https://github.com/pmbenjamin)
