<template>
    <form action="/wav/enroll" enctype="multipart/form-data" method="post">
        <label for="spk_id">ID：</label>
        <input type="number" id="spk_id" name="accessToken" value="123456"> <br>
        <label for="groupId">Group ID：</label>
        <input type="number" name="groupId" value="888888"> <br>
        <p>please uploade more than three files</p>
        <input type="file" name="myfiles" multiple=""><br>
        <input type="submit" @click="sub()" value="提交注册"><br>
    </form>
</template>

<script setup>
import {Postenroll} from "@/api/BookInfo/MS";

const sub=()=>{

}


</script>
