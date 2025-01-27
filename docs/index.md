---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 由风的个人网站
titleTemplate: 一名业余Android开发者

hero:
  name: "由风的个人网站"
  text: "一名业余Android开发者"
  tagline: "不要试图去做一个成功的人，要努力成为一个有价值的人。    ——阿尔伯特·爱因斯坦"
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
  - title: QQ群
    details: 加入我们的QQ群：539945982
  - title: 电子邮箱
    details: 通过电子邮箱联系我：youfeng11@outlook.com
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #FFDE13 30%, #F83030);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #00B6FF 50%, #00FF4D 50%);
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
