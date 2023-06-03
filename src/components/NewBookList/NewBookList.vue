<script setup>
import {onBeforeMount, reactive, ref} from "vue";
import {getClassList} from "@/api/ClassInfo/ClassInfo"
import {insertBookInfoAxios} from "@/api/BookInfo/BookInfo";
import {MsSuccess} from "@/api/Message";

let value = ref()

let ClassList = reactive({
    arr: []
})


const getClassListVue = async () => {
    const res = await getClassList()
    ClassList.arr = res.data.data
    console.log(ClassList)
}
getClassListVue()
onBeforeMount(() => {
})
let fromData = reactive({
    data: {
        name: '',
        author: '',
        introduction: '',
        language: '中文',
        classId:value
    }
})
const sublime = async () => {
    fromData.data.classId=value.value
    let res = await insertBookInfoAxios(fromData.data);
    console.log(res)
    if (res.data.code===1){
        MsSuccess("插入成功")
        fromData.data=[]
    }
}
</script>

<template>

    <div style="display: flex;width: 400px;height: 30px">
        <div style="flex: 1;line-height: 30px">
            书名
        </div>
        <div style="flex: 10">
            <el-input v-model="fromData.data.name" placeholder="请输入书名"/>
        </div>
    </div>
    <div style="display: flex;width: 400px;height: 30px;margin-top: 15px">
        <div style="flex: 1;line-height: 30px">
            作者
        </div>
        <div style="flex: 10">
            <el-input v-model="fromData.data.author" placeholder="请输入作者"/>
        </div>
    </div>
    <div style="display: flex;width: 400px;margin-top: 15px">
        <div style="flex: 1;line-height: 30px">
            简介
        </div>
        <div style="flex: 10">
            <el-input v-model="fromData.data.introduction" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
                      placeholder="书籍简介"/>
        </div>
    </div>
    <div style="display: flex;width: 170px;margin-top: 10px">
        <div style="flex: 1">
            语言
        </div>
        <div>
            <el-radio-group v-model="fromData.data.language" size="large">
                <el-radio-button label="中文"/>
                <el-radio-button label="英文"/>
            </el-radio-group>
        </div>
    </div>
    <div style="display: flex;width: 170px;margin-top: 10px">
        <div style="flex: 2">
            分类
        </div>
        <div style="flex: 8">
            <el-select v-model="value" class="m-2" placeholder="Select" size="large">
                <el-option
                        v-for="item in ClassList.arr"
                        :key="item.classId"
                        :label="item.className"
                        :value="item.classId"
                />
            </el-select>
        </div>
    </div>

    <div>
        <el-button @click="sublime()">提交</el-button>
    </div>
</template>

<style scoped lang="scss">

</style>