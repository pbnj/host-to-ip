'use strict';

const dns = require('dns');
const url = require('url');

module.exports = (host, opts = {}) => {
  return new Promise((resolve, reject) => {
    // if no host is received
    if (host === '') reject(new Error('Must provide a host or a URL.'));
    if (host.indexOf('http') === -1) {
      // if host does not begin with http/s
      dns.lookup(host, opts, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    } else {
      // if host begins with http/s
      dns.lookup(url.parse(host).hostname, opts, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    }
  });
};
