import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "由风的个人网站",
  description: "Android业余开发者由风的个人网站",
  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我', link: '/about-me' },
      { text: '作品', items: [
          {
            text: "SFS简体中文语言包",
            link: 'https://gitee.com/YouFeng11/SFS-zh-CN-Translation'
          }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/youfeng11/youfeng11.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a> 许可发布。',
      copyright: `Copyright © 2024-现在 由风。`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    socialLinks: [
      { icon: 'bilibili', link: 'https://b23.tv/HMTezn9' },
      { icon: 'qq', link: 'https://qm.qq.com/q/VXVMTN34EE' },
      { icon: 'gmail', link: 'mailto:youfeng11@outlook.com' },
      { icon: 'github', link: 'https://github.com/youfeng11' },
      { icon: 'gitee', link: 'https://gitee.com/YouFeng11' }
    ]
  }
})
