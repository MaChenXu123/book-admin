<script setup>
import {defineProps} from 'vue'
import {TjBookInfoAxios, updateBookInfo} from "@/api/BookInfo/BookInfo";
import {MsSuccess} from "@/api/Message";

let data=defineProps(['dataTable'])
console.log("asdsad")
console.log(data.dataTable)

const Tj=async ()=>{
    if (data.dataTable.tj===0){
        data.dataTable.tj=1
        const res=await TjBookInfoAxios(data.dataTable)
        if (res.data.code===1){
            MsSuccess("推荐成功")
        }
    }else {
        data.dataTable.tj=0
        const res=await TjBookInfoAxios(data.dataTable)
        if (res.data.code===1){
            MsSuccess("取消推荐")
        }
    }

}

</script>

<template>
    <div>
        <span class="inBlock">书名</span>
        <div>
            <el-input
                    class="w-50 m-2"
                    size="large"
                    placeholder="Please Input"
                    v-model="dataTable.name"></el-input>
        </div>
    </div>
    <div>
        <span class="inBlock">作者</span>
        <div>
            <el-input
                    class="w-50 m-2"
                    size="large"
                    placeholder="Please Input"
                    v-model="dataTable.author"></el-input>
        </div>
    </div>
    <div>
        <span class="inBlock">封面地址</span>
        <div>
            <el-input
                    class="w-50 m-2"
                    size="large"
                    placeholder="Please Input"
                    v-model="dataTable.adder"></el-input>
        </div>
    </div>
    <div>
        <span class="inBlock">出版社</span>
        <div>
            <el-input
                    class="w-50 m-2"
                    size="large"
                    placeholder="Please Input"
                    v-model="dataTable.publish"></el-input>
        </div>
    </div>
    <div v-if="dataTable.tj===0" style="float: left;margin-top: 30px">
        <el-button @click="Tj"  type="primary">推荐</el-button>
    </div>
    <div v-else style="float: left;margin-top: 30px">
        <el-button @click="Tj" type="danger">取消推荐</el-button>
    </div>
    <div style="float: right;margin-top: 30px">
        <el-button type="primary" @click="updateBookInfo(dataTable)">修改</el-button>
    </div>
</template>

<style scoped lang="scss">
.inBlock {
  margin-top: 10px;
  display: inline-block;
}
</style>