import request from "../Axios";
// 书籍列表获取
export const Postenroll = (data) => {
    return request({
        url: 'enroll',
        method: 'POST',
        data:data
    })
}