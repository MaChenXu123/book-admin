import request from "../Axios";
import {ElMessage} from "element-plus";
// 书籍列表获取
export const getBookInfoAxios = () => {
    return request({
        url: '/bookInfo/getBookInfo',
        method: 'GET',
    })
}
// 书籍列表获取
export const getBookInfo=async ()=>{
    let res = await getBookInfoAxios();
    window.TList=res.data.data
    console.log("asdas")
    console.log(window.TList)
}

const updateBookInfoAxios = (body) => {
    return request({
        url: '/bookInfo/updateBookInfo',
        method: 'POST',
        data:body
    })
}
// 更新
export const updateBookInfo=async (body)=>{
    let res = await updateBookInfoAxios(body);
    if (res.data.code===1){
        ElMessage({
            message: '修改成功  ',
            type: 'success',
        })
        await getBookInfo()
    }
    return res
}
export const delBookInfoAxios = (body) => {
    return request({
        url: '/bookInfo/delBookInfo',
        method: 'POST',
        data:body
    })
}

export const insertBookInfoAxios=(data)=>{
    return request({
        url: '/bookInfo/insertBookInfo',
        method: 'POST',
        data:data
    })
}

export const TjBookInfoAxios=(data)=>{
    return request({
        url: '/bookInfo/TjBookInfo',
        method: 'POST',
        data:data
    })
}
