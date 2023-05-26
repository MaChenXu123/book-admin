<template>
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
                </el-button
                >
            </template>
        </el-table-column>
    </el-table>

  <!--    分页插件-->
    <el-pagination
            style="float: right"
            background layout="prev, pager, next"
            :total="1000"
            :page-size="3"
            @current-change="getBookList"
            
    />
<!--右边弹窗抽屉-->
    <n-drawer v-model:show="active" :width="502" :placement="placement">
        <n-drawer-content title="修改书籍信息">
            <BookListDrawer :dataTable="data.tableData[updateIndex]"/>
            {{data.tableData[updateIndex].book_id}}
        </n-drawer-content>
    </n-drawer>
</template>

<script  setup>
import {computed, reactive, ref} from 'vue'
import BookListDrawer from "@/components/BookList/BookListDrawer.vue";
import {getBookInfo} from "@/api/BookInfo/BookInfo";
import index from "vuex";
// update索引值
let updateIndex;
// 抽屉代码
const active = ref(false)
const placement = ref('right')
const activate = (place) => {
    active.value = true
    placement.value = place
}

let data=reactive({
    tableData:[]
});
const getBookList=(index)=>{
    console.log(index)
    // 临时对象
    let dataTemp={}
    const ListTemp= JSON.parse(localStorage.getItem("BookList"));
    console.log(ListTemp)
    data.tableData=[]
    let i=index*10-10
    for (i;i<=index*10;i++){
        dataTemp=ListTemp[i]
        console.log(dataTemp)
        data.tableData.push(dataTemp)
        console.log(dataTemp)
    }
    console.log(data.tableData)
}
getBookList()

const search = ref('')
const filterTableData = computed(() =>
    data.tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index, row) => {
    activate('right')
    updateIndex=index
    console.log(index, row)
}
const handleDelete = (index, row) => {
    console.log(index, row)
}

//
// let getList=(index)=>{
//     data.tableData=[]
//     let dataTemp={};
//     let i=index*10-10
//     for (i;i<=index*10;i++){
//         dataTemp={}
//         dataTemp.book_id=i
//         dataTemp.name=i+"a";
//         dataTemp.date=i
//         dataTemp.address="aaa"
//         dataTemp.class_id="自然科学"
//         console.log(dataTemp)
//         data.tableData.push(dataTemp)
//     }
//     console.log(data.tableData)
// }
// for (let i=0;i<=10;i++){
//     let dataTemp={}
//     dataTemp.book_id=i
//     dataTemp.name=i+"a";
//     dataTemp.date=i
//     dataTemp.address="aaa"
//     dataTemp.class_id="自然科学"
//     console.log(dataTemp)
//     data.tableData.push(dataTemp)
// }
// const tableData = [
//     {
//         book_id:'1111111',
//         date: '2016-05-03',
//         name: 'Tom',
//         address: 'No. 189, Grove St, Los Angeles',
//     },
//     {
//         date: '2016-05-02',
//         name: 'John',
//         address: 'No. 189, Grove St, Los Angeles',
//     },
//     {
//         date: '2016-05-04',
//         name: 'Morgan',
//         address: 'No. 189, Grove St, Los Angeles',
//     },
//     {
//         date: '2016-05-01',
//         name: 'Jessy',
//         address: 'No. 189, Grove St, Los Angeles',
//     }, {
//         date: '2016-05-03',
//         name: 'Tom',
//         address: 'No. 189, Grove St, Los Angeles',
//     },
//     {
//         date: '2016-05-02',
//         name: 'John',
//         address: 'No. 189, Grove St, Los Angeles',
//     },
//     {
//         date: '2016-05-04',
//         name: 'Morgan',
//         address: 'No. 189, Grove St, Los Angeles',
//     },
//     {
//         date: '2016-05-04',
//         name: 'Morgan',
//         address: 'No. 189, Grove St, Los Angeles',
//     },
//     {
//         date: '2016-05-01',
//         name: 'Jessy',
//         address: 'No. 189, Grove St, Los Angeles',
//     },
// ]
</script>