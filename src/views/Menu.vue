<template>
    <div style="display: flex;" class="borderColor">
        <div class="borderColor">
            <div style="display: flex;" class="borderColor">
                <img src="../assets/logo.jpg" alt="" style="width: 70px;height: 50px">
                <div id="topLog" style="line-height: 50px;font-weight: 700;font-size: 20px">
                    版院图书管理
                </div>
            </div>
            <n-space vertical>
                <n-layout has-sider>
                    <n-layout-sider
                            bordered
                            collapse-mode="width"
                            :collapsed-width="70"
                            :width="220"
                            :collapsed="collapsed"
                    >
                        <n-menu
                                v-model:value="activeKey"
                                :collapsed="collapsed"
                                :collapsed-width="70"
                                :collapsed-icon-size="22"
                                :options="menuOptions"
                                @update:value="handleUpdateValue"
                        />
                    </n-layout-sider>
                </n-layout>
            </n-space>
        </div>

        <n-layout style="flex: auto">
            <div style="width: 100%;height: 50px;line-height: 50px;display: flex" class="borderColor">
                <!--                        <n-switch v-model:value="collapsed"/>-->
                <div style="margin-left: 20px" @click="add">
                    展开
                </div>
                <div style="flex: auto">

                </div>
                <div style="margin-right: 20px">
                    <Avatar></Avatar>
                </div>

            </div>
            <div style="height: 100%;width:100%;">
                <RouterView>

                </RouterView>
            </div>

        </n-layout>
    </div>
</template>

<script>
import {defineComponent, h, ref} from "vue";
import {NIcon,} from "naive-ui";
import router from "@/router";
import {
    BookOutline as BookIcon,
    PersonOutline as PersonIcon,
    WineOutline as WineIcon
} from "@vicons/ionicons5";
import Avatar from "@/components/Avatar.vue";


function renderIcon(icon) {
    return () => h(NIcon, null, {default: () => h(icon)});
}

const menuOptions = [
    {
        label: "首页",
        key: "HomePage",
        icon: renderIcon(BookIcon)
    },
    {
        label: "图书管理",
        key: "BookList",
        icon: renderIcon(BookIcon),
        children: [
            {
                label: "书籍列表",
                key: "BookList"
            }, {
                label: "新书入库",
                key: "NewBookList"
            }, {
                label: "推荐好书",
                key:""
            }
        ]
    },
    {
        label: "1973年的弹珠玩具",
        key: "pinball-1973",
        icon: renderIcon(BookIcon),
        disabled: true,
        children: [
            {
                label: "鼠",
                key: "rat"
            }
        ]
    },
    {
        label: "个人信息",
        key: "PersonDetails",
        icon: renderIcon(BookIcon)
    },
];

export default defineComponent({
    components: {Avatar},
    setup() {
        return {
            activeKey: ref(null),
            collapsed: ref(false),
            menuOptions,
            add() {
                this.collapsed = this.collapsed !== true;
                let elementById = document.getElementById("topLog");
                if (this.collapsed === false) {
                    elementById.style.display = "block"
                } else {
                    elementById.style.display = "none"
                }
            },
            handleUpdateValue(key, item) {
                router.push("/" + key)
            }
        };
    }
});
</script>

<style lang="scss">
.borderColor {
  border: 1px solid rgb(239, 239, 245);
  margin: -1px -1px -1px 0px;
}

</style>