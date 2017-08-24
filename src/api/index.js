import axios from 'axios'
import jsonp from 'jsonp'
import {
    cspsApiRoot
} from '../config'
import Qs from 'qs'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true

export default {
    get(url, params, cb, errcb) {
        axios.get(cspsApiRoot + url, params).then((response) => {
            if (response.data.status) {
                setTimeout(() => {
                    cb(response.data)
                }, 16)
            } else {
                setTimeout(() => {
                    errcb(response.data)
                }, 16)
            }
        })
    },
    post(url, params, cb, errorcb) {
        console.log(Qs.stringify(params))
        return axios.post(cspsApiRoot + url, Qs.stringify(params))
    }

}