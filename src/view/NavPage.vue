<script setup lang="ts">
import NavItem from '@/component/NavItem.vue'
import { ref } from 'vue';
import type { INavSection } from '@/model/IConfig';
import NavSection from '@/component/NavSection.vue';
import { config } from '@/config';
</script>

<template>
    <div class="nav-content-box">
        <NavSection v-for="section in config.navSections" :key="section.name" :name="section.name"
            :navItems="section.navItems" />
    </div>
</template>

<style scoped lang="scss">
.nav-content-box {
    box-sizing: border-box;
    flex-direction: column;
    width: min(800px, 100vw - 32px);
    margin: 0 auto;
    height: 100vh;
    padding: 16px 16px 128px;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
