<script>
import { h, defineComponent } from "vue";
import { NIcon } from "naive-ui";
import {
    PersonCircleOutline as UserIcon,
    Pencil as EditIcon,
    LogOutOutline as LogoutIcon
} from "@vicons/ionicons5";

const renderIcon = (icon) => {
    return () => {
        return h(NIcon, null, {
            default: () => h(icon)
        });
    };
};

export default defineComponent({
    setup() {
        return {
            options: [
                {
                    label: "用户资料",
                    key: "profile",
                    icon: renderIcon(UserIcon)
                },
                {
                    label: "编辑用户资料",
                    key: "editProfile",
                    icon: renderIcon(EditIcon)
                },
                {
                    label: "退出登录",
                    key: "logout",
                    icon: renderIcon(LogoutIcon)
                }
            ]
        };
    }
});
</script>

<template>
    <n-dropdown :options="options">
        <n-avatar :style="{
      color: 'yellow',
      backgroundColor: 'red'
    }">M</n-avatar>
    </n-dropdown>

</template>

<style scoped lang="scss">

</style>