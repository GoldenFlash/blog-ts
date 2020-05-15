const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/blog/api/', { target: 'http://101.132.173.11:3000' }));
    app.use(proxy('/2019nCov/', { target: 'http://101.132.173.11:3000' }));
};