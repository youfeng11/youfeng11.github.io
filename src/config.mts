export default {
    title: '由风的个人主页',
    avatar: 'https://avatars.githubusercontent.com/u/86872506?v=4',
    author: '由风',
    // 此处填入 #HitokotoEnable# 会启用一言 API，否则会直接显示你定义的内容，一言 API 的 Get 参数请自行去 main.js 中修改（默认调用文学与哲学一言）
    hitokoto: '#HitokotoEnable#',
    // name 无实际意义，仅用于标识此行用于表示什么
    // 按钮图标通过 icon 与 customIcon 共同决定
    // customIcon 为 false 则使用 fontawesome 图标库，此时 icon 处需要填入 fontawesome 图标库的类名
    // 若 customIcon 为 true 你可以在 icon 处填入任意的 HTML 标签，当然此时的样式需要你自己去处理
    socialLinks: [
        { name: 'bilibili', icon: 'fa-brands fa-bilibili', link: 'https://space.bilibili.com/1268335627', customIcon: false },
        { name: 'QQ', icon: 'fa-brands fa-qq', link: 'https://qm.qq.com/q/VXVMTN34EE', customIcon: false },
        { name: 'Email', icon: 'fa-solid fa-envelope', link: 'mailto:youfeng11@outlook.com', customIcon: false },
        { name: 'GitHub', icon: 'fa-brands fa-github', link: 'https://github.com/youfeng11', customIcon: false },
        { name: 'Gitee', icon: '<i class="iconify" data-icon="simple-icons:gitee"></i>', link: 'https://gitee.com/YouFeng11', customIcon: true }
    ],
    navItems: [
        { name: 'SFS汉化安装器', link: 'https://github.com/youfeng11/SFS-CustomTranslations-Installer' },
        { name: 'SFS简体中文语言包', link: 'https://gitee.com/YouFeng11/SFS-zh-CN-Translation' },
        { name: '我的个人主页', link: 'https://github.com/youfeng11/youfeng11.github.io' }
    ]
}