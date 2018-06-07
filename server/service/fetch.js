/**
 * Created by lei_sun on 2018/5/22.
 */
import fetch from 'node-fetch'; // https://github.com/bitinn/node-fetch
const https = require('https'); // https://www.ddhigh.com/2016/12/14/node-fetch-ignore-certificate.html
const http = require('http');

var obj = {};

obj.showJSON = function(res, content){
    res.writeHead(200, {
        'Content-Type': 'json'
    });
    res.end(JSON.stringify(content));
}

// flag: true => 不调用 showJSON 方法, false, undefined => 反之
obj.post = function(url, body, req, res, flag){
    var prefix = "";

    if(body == undefined){
        body = {};
    }

    body = {...req.body};

    return new Promise((resolve, reject)=> {
        var cookie = req.headers.cookie;
        //console.log('req.headers.cookie', cookie);
        //console.log('req.body', body);

        fetch(prefix + url, {
            agent: new http.Agent({rejectUnauthorized: false}),
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(body),
            headers: {
                contentType: 'application/json',
                cookie: cookie
            }
        }).then(res => res.json())
            .then(json => {
                if(!flag){
                    this.showJSON(res, json);
                }
                return resolve && resolve(json);
            })
            .catch(err => {
                if(!flag){
                    this.showJSON(res, err);
                }
                return reject && reject(err);
            });
    });
};

export default obj;
