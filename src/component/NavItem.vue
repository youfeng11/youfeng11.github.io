<script setup lang="ts">
defineProps<{
    name: string;
    link: string;
    iconLink?: string;
    description?: string;
}>();
</script>

<template>
    <a class="nav-item-button" :href="link">
        <div class="icon-box">
            <img v-if="iconLink" :src="iconLink" alt="icon" class="text-icon" />
            <div class="text-icon" v-else>{{ name.split("")[0] }}</div>
        </div>
        <div class="link-text-content-box">
            <div class="name-content-box">{{ name }}</div>
            <div class="description-content-box">{{ description }}</div>
        </div>
    </a>
</template>

<style scoped lang="scss">
@use "@/styles/rule" as *;

.nav-item-button {
    min-width: calc(50% - 20px);
    box-sizing: border-box;
    border: 1px solid rgba(#fff, .2);
    backdrop-filter: blur(16px);
    padding: 16px;
    color: $global-font-color;
    text-decoration: none;
    transition: all .3s;
    border-radius: 15px;
    display: flex;
    outline: none;

    &:hover,
    &:focus {
        background-color: rgba(#fff, 0.25);
        transform: translateY(-5px);
    }
}

.icon-box {
    flex: 0 0 auto;
    margin-right: 16px;
}

.text-icon {
    width: 50px;
    height: 50px;
    background-color: rgba(#0de0b3, 1.0);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 24px;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
    user-select: none;
}

.link-text-content-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.name-content-box {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
}

.description-content-box {
    color: rgba(#fff, .7);
    font-size: 14px;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 4px;
}
</style>
