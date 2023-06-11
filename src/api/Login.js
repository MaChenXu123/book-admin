import request from "./Axios";
// 书籍列表获取
export const M_login= (data) => {
    return request({
        url: '/admin/Login',
        method: 'POST',
        data:data
    })
}