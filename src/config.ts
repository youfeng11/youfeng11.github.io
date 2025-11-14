import type { IConfig } from './model/IConfig'

export const config: IConfig = {
    // 建议同时在 index.html 中的 <title> 标签中定义站点标题
    siteTitle: '重铬酸钠是 Zako~',
    avatar: 'https://avatars.githubusercontent.com/u/86872506?v=4',
    // 此处填入 #HitokotoEnable# 会启用一言 API，否则会直接显示你定义的内容
    // 一言 API 的 Get 参数请去 /src/utils/function.ts 中修改（默认调用文学与哲学一言）
    // 截至 2025/9/2 一言 API 貌似不太稳定
    hitokoto: '#HitokotoEnable#',
    author: '由风',
    // 若想增添新的 TabButton 需要自行新增一个 Vue 视图组件并在 /src/App.vue 中引入
    // 图标调用 Fontawesome，需传入 Fontawesome 的图标类名，详细请去 https://fontawesome.com/icons 查找
    // 暂不支持自定义图标
    tabButtons: [
        { title: 'Home', icon: 'fa-solid fa-house' },
        { title: 'Navigation', icon: 'fa-solid fa-compass' }
    ],
    // name 作为 Tooltip 显示
    // 图标调用 Fontawesome，需传入 Fontawesome 的图标类名，详细请去 https://fontawesome.com/icons 查找
    // customIcon 为 true 则表示使用自定义图标，此时 icon 可以传入一个 HTML 标签
    socialLinks: [
        { name: 'GitHub', icon: 'fa-brands fa-github', link: 'https://github.com/youfeng11', customIcon: false },
        { name: 'Gitee', icon: '<i class="iconify" data-icon="simple-icons:gitee"></i>', link: 'https://gitee.com/YouFeng11', customIcon: true },
        { name: 'Email', icon: 'fa-solid fa-envelope', link: 'mailto:youfeng11@outlook.com', customIcon: false },
        { name: 'QQ', icon: 'fa-brands fa-qq', link: 'https://qm.qq.com/q/VXVMTN34EE', customIcon: false },
        { name: 'Bilibili', icon: 'fa-brands fa-bilibili', link: 'https://space.bilibili.com/1268335627', customIcon: false }
    ],
    // 单个 NavItem 中，有 name、link、description 三个属性以及一个可选的 iconLink 属性
    // 当 iconLink 存在时会显示你自定义的图标，否则会取 name 的第一个字符作为图标
    // iconLink 仅支持传入一个图片链接
    navSections: [
        {
            name: '个人站点',
            navItems: [
                { name: '主页', link: 'https://youfeng11.github.io/', description: '本站点' }
            ]
        },
        {
            name: '个人项目',
            navItems: [
                { name: 'SFS汉化安装器', link: 'https://github.com/youfeng11/SFS-CustomTranslations-Installer', description: '为航天模拟器提供自定义翻译的便捷安装工具' },
                { name: 'SFS简体中文语言包', link: 'https://gitee.com/YouFeng11/SFS-zh-CN-Translation', description: '航天模拟器的简体中文汉化包' },
                { name: '航天模拟器破解版', link: 'https://gitee.com/YouFeng11/SFS-Mod', description: '大概已停止维护' }
            ]
        }
    ]
}