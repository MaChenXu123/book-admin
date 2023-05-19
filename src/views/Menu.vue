<template>
    <div style="display: flex;">
        <div>
            <div style="display: flex;">
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
                            :collapsed-width="64"
                            :width="240"
                            :collapsed="collapsed"
                    >
                        <n-menu
                                v-model:value="activeKey"
                                :collapsed="collapsed"
                                :collapsed-width="64"
                                :collapsed-icon-size="22"
                                :options="menuOptions"
                                @update:value="handleUpdateValue"
                        />
                    </n-layout-sider>
                </n-layout>
            </n-space>
        </div>

        <n-layout style="flex: auto">
            <div style="width: 100%;height: 50px;background-color: bisque;line-height: 50px;display: flex">
                <!--                        <n-switch v-model:value="collapsed"/>-->
                <div @click="add">
                    展开
                </div>
                <div style="flex: auto">

                </div>
                <div >
                    头像
                </div>

            </div>
            <div style="height: 100%;width:100%;background-color: #42b983">
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
        icon: renderIcon(BookIcon)
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
        label: "寻羊冒险记",
        key: "a-wild-sheep-chase",
        disabled: true,
        icon: renderIcon(BookIcon)
    },
    {
        label: "舞，舞，舞",
        key: "dance-dance-dance",
        icon: renderIcon(BookIcon),
        children: [
            {
                type: "group",
                label: "人物",
                key: "people",
                children: [
                    {
                        label: "叙事者",
                        key: "BookList",
                        icon: renderIcon(PersonIcon)
                    },
                    {
                        label: "羊男",
                        key: "sheep-man",
                        icon: renderIcon(PersonIcon)
                    }
                ]
            },
            {
                label: "饮品",
                key: "beverage",
                icon: renderIcon(WineIcon),
                children: [
                    {
                        label: "威士忌",
                        key: "whisky"
                    }
                ]
            },
            {
                label: "食物",
                key: "food",
                children: [
                    {
                        label: "三明治",
                        key: "sandwich"
                    }
                ]
            },
            {
                label: "过去增多，未来减少",
                key: "the-past-increases-the-future-recedes"
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