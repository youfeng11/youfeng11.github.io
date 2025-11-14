<script setup lang="ts">
defineEmits<{
    clickEvent: void;
}>()
defineProps<{
    icon: string;
    title: string;
}>()
</script>
<template>
    <div tabindex="0" class="tab-button" @click="$emit('clickEvent')" @keyup.enter="$emit('clickEvent')"><i
            :class="icon"></i>{{ title }}</div>
</template>

<style scoped lang="scss">
.tab-button {
    cursor: pointer;
    margin: 2px;
    font-size: 14px !important;
    transition: all .2s;
    padding: 8px 10px;
    border-radius: 114514px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;

    i.fa-solid {
        margin-right: 4px;
    }

    &:hover,
    &:focus,
    &.active {
        background-color: rgba($color: #ffffff, $alpha: 0.2);
    }


    &:not(:last-child) {
        margin-right: 8px;
    }
}
</style>
