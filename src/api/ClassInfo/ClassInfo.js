import request from "../Axios";
// 书籍列表获取
export const getClassList = () => {
    return request({
        url: '/classInfo/getClassList',
        method: 'GET',
    })
}
export const setClassInfo=()=>{
    alert("asd")
}