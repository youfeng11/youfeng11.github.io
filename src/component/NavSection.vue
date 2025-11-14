<script setup lang="ts">
import NavItem from '@/component/NavItem.vue'
import type { INavItem } from '@/model/IConfig';
defineProps<{
    name: string;
    navItems: INavItem[];
}>();
</script>

<template>
    <div class="nav-section-box">
        <p class="section-name">{{ name }}</p>
        <div class="nav-items-box">
            <NavItem v-for="item in navItems" :key="item.name" :name="item.name" :link="item.link"
                :icon-link="item.iconLink" :description="item.description" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "@/styles/rule" as *;

.nav-items-box {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);

    @media screen and #{$mobile-rule} {
        grid-template-columns: 1fr !important;
    }
}

.section-name {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 16px 0;
    color: $global-font-color;
}
</style>
