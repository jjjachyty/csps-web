import * as types from '../mutation-types'
import api from '../../api'
import config from '../../../config'

const state = {
    userNameStatus: false,
    verCodeStatus: false
}

// getters
const getters = {
    checkOutUserNameStatus: state => state.userNameStatus
}


const actions = {

    checkUserName({ dispatch, commit, state }, userName) {
        var url = "/user/validateUserName"
        return api.post(url, userName)
    },
    checkVerCode({ dispatch, commit, state }, verCode) {
        var url = " /user/judgeValidateCode"
        return api.post(url, verCode)
    },

    register({ dispatch, commit }, user) {
        var url = "/user/register"
        console.log("user", user)
        return api.post(url, user)
    }
}

// mutations
const mutations = {
    [types.USERNAME_CAN_USE](state, { data }) {
        state.userNameStatus = true
    },
    [types.USERNAME_CAN_NOT_USE](state, { data }) {
        state.userNameStatus = false

    },
    [types.USER_REGISTER_SUCCESS](state, { data }) {
        console.log("成功")
    },
    [types.USER_REGISTER_FAILED](state, { data }) {
        console.log("失败")
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}