import * as types from './mutation-types'


export const state = {
    message: {
        status: false,
        code: "",
        text: ""
    }
}


export const mutations = {
    [types.UPDATE_MESSAGE](state, message) {
        console.log("message", message)
        state.message = message
    },
}