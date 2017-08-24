import api from "../api"
import { cspsApiRoot } from "../config"


export const checkPhone = ({ dispatch, commit }, user) => {
    var url = cspsApiRoot + "/user/judgeValidateCode"
    api.post(url, user, (data) => {
        return data.status
    }, (data) => {
        return data.status
    })
}