import * as types from '../mutation-types'
import api from '../../api'
import config from '../../../config'

const state = {
    currentUser: null
}

// getters
const getters = {
    getCurrentUser: state => state.currentUser
}


const actions = {
    userLogin({ dispatch, commit }, loginUser) {
        var url = "/user/login"
        console.log(loginUser)
        api.post(url, loginUser).then((respons) => {
            if (respons.data.status) {
                commit(types.USER_LOGIN_SUCCESS, respons.data.data)
            }
        }).catch((respons) => {
            commit(types.USER_LOGIN_FAILED, respons.data.data)

        })
    }
}

// mutations
const mutations = {
    //登录成功
    [types.USER_LOGIN_SUCCESS](state, { data }) {
        state.currentUser = data
    },
    [types.USER_LOGIN_FAILED](state, { data }) {
        state.currentUser = ""
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}