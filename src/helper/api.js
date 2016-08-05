/**
 * Created by dev on 16/7/2.
 */
import fetch from 'isomorphic-fetch';
import DIX from '../helper/const'
import UTIL from '../helper/util'

function fetchPost(url ,data) {
    let host = DIX.HOST + url;
    let token = UTIL.getToken();
    let dataUrl = '';
    if (data)
    {
        for (let item in data)
        {
            if (data.hasOwnProperty(item))
            {
                dataUrl += ('&' + item + '=' + data[item]);
            }
        }
    }

    let body = 'client=1&version=3&token=' + token + dataUrl;

    return fetch (host, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: body
    }).then(function(res) {
        if (res.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + res.status);
            return;
        }

        // 处理响应中的文本信息
        return res.json();
    }).catch(function(err) {
        console.log('Fetch Error : %S', err);
    })
}

export  default fetchPost
