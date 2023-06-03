<template>
    <div style="width: 300px;display: inline-block">
        <el-input
                v-model="input"
                class="w-50 m-2"
                placeholder="Please Input"
                :suffix-icon="Search"
                @input="searchAll(input)"
        />
    </div>
    <el-button type="primary" :icon="Search" @click="searchAll(input)">全文搜索</el-button>
    <el-table :data="filterTableData" style="width: 100%">
        <el-table-column label="bookId" prop="bookId"/>
        <el-table-column label="name" prop="name"/>
        <el-table-column label="author"
                         prop="author"/>
        <el-table-column label="classId" prop="classId"/>
        <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="Type to search"/>
            </template>
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                >修改
                </el-button
                >

                <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                >删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>

  <!--    分页插件-->
    <el-pagination
            style="float: right"
            background layout="prev, pager, next"
            :total="100"
            :page-size="3"
            @current-change="getBookList"

    />
  <!--右边弹窗抽屉-->
    <n-drawer v-model:show="active" :width="502" :placement="placement">
        <n-drawer-content title="修改书籍信息">
            <BookListDrawer :dataTable="Drawer"/>
        </n-drawer-content>
    </n-drawer>


</template>

<script setup >
import {computed, h, onBeforeMount, onBeforeUpdate, reactive, ref} from 'vue'
import BookListDrawer from "@/components/BookList/BookListDrawer.vue";
import { delBookInfoAxios, getBookInfo} from "@/api/BookInfo/BookInfo";
import {Search} from "@vicons/ionicons5";
import {ElMessage, ElMessageBox} from 'element-plus'

const input = ref('')

// let updateIndex;
let Drawer = {};
// 抽屉代码
const active = ref(false)
const placement = ref('right')
const activate = (place) => {
    active.value = true
    placement.value = place
}

let data = reactive({
    tableData: []
});
let ListTemp=[]

const getBookList = ((index)=>{
        console.log("debug")
        console.log(data.tableData)
        // getBookInfo()
        if (index == null) index = 1
        // 临时对象
        let dataTemp = {}
        // const ListTemp = store.state.bookList
        // const ListTemp = JSON.parse(localStorage.getItem("BookList"));
        data.tableData = []
        console.log("getBookList")
        console.log(window.TList)
        let i = index * 10 - 10
        for (i; i <= index * 10; i++) {
            dataTemp = window.TList[i]
            data.tableData.push(dataTemp)
        }
        console.log(data.tableData)
    }
)
onBeforeMount(async ()=>{
    await getBookInfo()
    await getBookList()
})

const search = ref('')
const filterTableData = computed(() =>
    data.tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index, row) => {
    Drawer = row
    activate('right')
    // updateIndex=index
    console.log(index, row)
}
// 删除函数
const handleDelete =(index, row) => {
    // 删除前询问是否确定
    ElMessageBox.confirm('你确定要删除吗')
        // 确定的情况下
        .then(async() => {
            // 请求接口
            let res=await delBookInfoAxios(row);
            console.log("res")
            console.log(res.data.code)
            // 如果删除成功就提示消息，刷新页面
            if (res.data.code===1){
                setTimeout(()=>{
                    location.reload();
                },1000)
                // getBookInfo()
                // getBookList()
                ElMessage({
                    message: h('p', null, [
                        h('span', null, '删除成功 '),
                    ]),
                    type:"success"
                })
                // location.reload();
            }

        })
        .catch(() => {
            // catch error
        })
    // delBookInfo(row);
}
// 全文检索函数
const searchAll = (name) => {
    if (input.value === '') {
        getBookList(1)
        return
    }
    data.tableData = []
    // const ListTemp = store.state.bookList
    console.log("1")
    console.log(ListTemp)
    // const ListTemp = JSON.parse(localStorage.getItem("BookList"))
    let searchAfterList = window.TList.filter((data) => {
        return data.name.indexOf(name) > -1
    });
    data.tableData.push(...searchAfterList)
}

</script>