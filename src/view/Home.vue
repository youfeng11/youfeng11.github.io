<script setup lang="ts">
import SocialButton from '@/component/SocialButton.vue';
import { config } from '@/config';
import { fetchHitokoto } from '@/utils/function';
import { ref } from 'vue';

const hitokotoText = ref('Loading...')

async function loadHitokoto() {
    hitokotoText.value = await fetchHitokoto()
}

loadHitokoto()

</script>

<template>
    <div class="home-root-div" :style="{ '--avatar-url': `url(${config.avatar})` }">
        <div class="avatar-wrap">
            <div class="avatar"></div>
        </div>
        <div class="name-text">
            {{ config.author }}
        </div>
        <Transition name="hitokoto-transition" mode="out-in">
            <div class="hitokoto-text" @click="loadHitokoto" :key="hitokotoText">
                {{ hitokotoText }}
            </div>
        </Transition>
        <div class="social-buttons-div">
            <SocialButton v-for="item in config.socialLinks" :icon="item.icon" :link="item.link"
                :is-custom-icon="item.customIcon" :key="item.name" :tooltip="item.name" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "@/styles/rule" as *;

.home-root-div {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    user-select: none;
}

.avatar {
    width: $avatar-div-width;
    height: $avatar-div-width;
    border-radius: 50%;
    background-size: cover;
    background-image: var(--avatar-url);
    border: 1px solid $global-font-color;
}

.avatar-wrap {
    position: relative;
    transition: all .3s;

    &::before {
        border-radius: 50%;
        position: absolute;
        z-index: -1;
        background-image: var(--avatar-url);
        filter: blur(16px);
        content: '';
        width: 100%;
        height: 100%;
        transition: all .3s;
    }

    &:hover {
        transform: translateY(-5px);
    }

    &:hover::before,
    &:focus-within::before {
        transform: scale(1.1);
        filter: blur(32px);
    }
}

.name-text {
    font-size: 20px;
    margin-top: 24px;
}

.divider {
    background-color: #7a7a7abf;
    width: 200px;
    height: 1px;
    margin: 12px 0;
}

.hitokoto-text {
    color: rgba(#fff, .7);

    padding: 6px;
    margin-top: 12px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &::before {
        content: '';
        border-radius: 5px;
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        transition: all .3s;
    }

    &:hover::before {
        background-color: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(8px);
    }
}

.social-buttons-div {
    margin-top: 16px;
    max-width: min(100%, calc(100vw - 64px));
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
</style>