import request from "../Axios";
const getBookInfoAxios = () => {
    return request({
        url: '/bookInfo/getBookInfo',
        method: 'GET',
    })
}

export const getBookInfo=async ()=>{
    let res = await getBookInfoAxios();
    localStorage.setItem("BookList",JSON.stringify(res.data.data))
    console.log(res.data.data)
    return res.data.data
}

