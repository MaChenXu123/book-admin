<template>
    <div class="Login">

    <div style="width: 400px;float: right;margin-top: 150px;margin-right: 100px">
        <n-card>
            <n-tabs
                class="card-tabs"
                size="large"
                animated
                style="margin: 0 -4px"
                pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
            >
                <n-tab-pane name="signin" tab="登录">
                        <n-form-item-row label="用户名">
                            <input class="M_input" id="adminid">
                        </n-form-item-row>
                        <n-form-item-row label="密码">
                            <input class="M_input" id="password">
                        </n-form-item-row>
                    <n-button type="primary" block secondary strong @click="Login">
                        登录
                    </n-button>
                </n-tab-pane>
                <n-tab-pane name="signup" tab="注册">
                    <n-form>
                        <n-form-item-row label="用户名">
                            <n-input />
                        </n-form-item-row>
                        <n-form-item-row label="密码">
                            <n-input />
                        </n-form-item-row>
                        <n-form-item-row label="重复密码">
                            <n-input />
                        </n-form-item-row>
                    </n-form>
                    <n-button type="primary" block secondary strong >
                        注册
                    </n-button>
                </n-tab-pane>
            </n-tabs>
        </n-card>
    </div>
    </div>
</template>

<style scoped>
.M_input{
    width: 100%;
    height: 100%;
}
.card-tabs .n-tabs-nav--bar-type {
    padding-left: 4px;
}
.Login{
    width: 100vw;
    height: 100vh;
    background-color: aqua;
    background-image: url("图书馆.jpg");
}
</style>
<script setup >
import {M_login} from "@/api/Login";
import {MsSuccess} from "@/api/Message";
import router from "@/router";



const Login=async ()=>{
    let adminid= document.getElementById("adminid").value;
    let password = document.getElementById("password").value;
    let data={
        adminid,
        password
    }
    console.log(data)
    let axiosResponse = await M_login(data);
    if (axiosResponse.data.code===1){
        localStorage.setItem("token",axiosResponse.data.data)
        MsSuccess("登陆成功")

        await router.push("/")
    }

}
</script>