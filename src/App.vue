<template>

  <router-view/>
</template>

<script setup>
// el-table报错解决方法 https://blog.csdn.net/qq_33733799/article/details/129873731
const debounce = (fn, delay) => {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    }
}

const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver{
    constructor(callback) {
        callback = debounce(callback, 16);
        super(callback);
    }
}

</script>


<style lang="scss">

</style>

<style>
* { box-sizing: border-box; }

</style>