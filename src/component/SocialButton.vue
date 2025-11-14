<script lang="ts" setup>
defineProps<{
    icon: string;
    link: string;
    tooltip?: string;
    isCustomIcon?: boolean;
}>()
</script>

<template>
    <a class="social-button" :href="link">
        <i v-if="!isCustomIcon" :class="icon"></i>
        <div class="customIcon" v-else v-html="icon"></div>
        <span v-if="tooltip" class="tooltip">{{ tooltip }}</span>
    </a>
</template>

<style lang="scss">
@use "@/styles/rule" as *;

.social-button {
    width: 48px;
    height: 48px;

    border-radius: 50%;
    outline: 0;
    box-sizing: border-box;
    position: relative;

    color: $global-font-color;

    backdrop-filter: blur(32px);
    background-color: rgba(#000, 0.2);
    transition: all 0.3s;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    text-decoration: none;

    &:focus,
    &:hover {
        background-color: rgba(255, 255, 255, 0.25);

        .tooltip {
            opacity: 1;
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid rgba(255, 255, 255, 0.4);
        opacity: 0;
        z-index: -1;
        animation: pulse 1.5s infinite;
    }

    &:not(:last-child) {
        margin-right: 24px;
    }

    .tooltip {
        position: absolute;
        top: 120%;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba($color: #000000, $alpha: 0.8);
        padding: 4px 8px;
        border-radius: 4px;
        white-space: nowrap;
        font-size: 14px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s;
    }
}

.customIcon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes pulse {
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
    }

    15% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.6;
    }

    100% {
        transform: translate(-50%, -50%) scale(1.4);
        opacity: 0;
    }
}
</style>
