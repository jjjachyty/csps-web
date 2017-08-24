// import { withParams } from 'vuelidate/lib/validators'

// export const isPhone = withParams({ type: 'isPhone' }, function(value) {
//     console.log(value)
//     if ("" == value && !(/^1(3|4|5|7|8)\d{9}$/.test(value))) {
//         return false;
//     }
// })

export const isPhone = function(value) {
    if (value.length === 11 && (/^1(3|4|5|7|8)\d{9}$/.test(value))) {
        return true;
    }
    return false
}

export const checkPassWord = function(value) {
    var patt1 = new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$");

    var result = patt1.test(value)
    return result
}