import axios from 'axios'

export default {
    get(url, params, cb, errcb) {
        axios.get(url, params).then((response) => {
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
    }
}