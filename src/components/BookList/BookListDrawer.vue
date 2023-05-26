<script setup >
import { defineProps } from 'vue'
let data=defineProps(['dataTable'])
console.log("组件里面")
console.log(data.dataTable)
console.log(data.dataTable.name)
</script>

<template>
  {{dataTable.name}}
</template>

<style scoped lang="scss">

</style>