// 统一请求路径
import axios from 'axios'
axios.defaults.headers.common['token'] = localStorage.getItem("token");
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头
const request= axios.create({
    baseURL:"http://127.0.0.1:8080/bookadmin"
})

export default request;