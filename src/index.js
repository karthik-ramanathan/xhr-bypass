const request = require("request");

const XHRBypass = {
    GET(config, callback){
        request({
            url: config.url, 
            strictSSL: false,
            method: "GET",
            json: true,
            }, function(error, response, body){
            typeof callback === "function" && callback(error, body);
        });
    },
    POST(config, callback){
        request({
            url: config.url, 
            strictSSL: false,
            method: "POST",
            json: true,
            body: config.body
            }, function(error, response, body){
            typeof callback === "function" && callback(error, body);
        });
    }
};

export default XHRBypass;
