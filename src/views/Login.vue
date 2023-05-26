<template>
    <div style="width: 400px;margin:auto">
        <n-card>
            <n-tabs
                class="card-tabs"
                default-value="signin"
                size="large"
                animated
                style="margin: 0 -4px"
                pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
            >
                <n-tab-pane name="signin" tab="登录">
                    <n-form>
                        <n-form-item-row label="用户名">
                            <n-input />
                        </n-form-item-row>
                        <n-form-item-row label="密码">
                            <n-input />
                        </n-form-item-row>
                    </n-form>
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
</template>

<style scoped>
.card-tabs .n-tabs-nav--bar-type {
    padding-left: 4px;
}
</style>
<script setup >

const Login=()=>{
    alert("asd")
}
</script>