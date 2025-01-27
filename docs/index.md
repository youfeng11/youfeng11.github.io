---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 由风的个人网站
titleTemplate: 一名业余Android开发者

hero:
  name: "由风的个人网站"
  text: "一名业余Android开发者"
  image:
      src: /logo.png
      alt: YouFeng11
  actions:
    - theme: brand
      text: 关于我
      link: /about-me
    - theme: alt
      text: 我的作品
      link: /projects

features:
  - title: Android开发
    details: 使用Kotlin编程语言，目前正致力于基于 Jetpack Compose 的APP开发
  - title: Web开发
    details: 目前正致力于基于 VitePress 的静态网页制作
  - title: 游戏翻译
    details: 目前正致力于航天模拟器汉化制作与维护
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #EBBE00 30%, #F83030);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #00B6FF 40%, #00FF4D 60%);
  --vp-home-hero-image-filter: blur(68px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
