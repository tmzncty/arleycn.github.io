module.exports = {
  title: 'Arley',
  description: '不做也行的事情就不做，非做不可的事情一切从简。',
  locales: { '/': { lang: 'zh' } },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    huawei: false,
    // 自动形成侧边导航
    sidebar: 'auto',
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeLine/', icon: 'reco-date' },
      { text: 'GitHub', link: 'https://github.com/arleycn', icon: 'reco-github' },
    ],
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认 “标签”
      },
    },
    sidebarDepth: 3,
    // 文档更新时间
    lastUpdated: false,
    authorAvatar: '/avatar.png',
    author: 'Arley',
    startYear: '2021',
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 评论
    valineConfig: {
      appId: 'djccxqIYE2J9DYtSFY7fg1c1-MdYXbMMI',
      appKey: 'GskHdEqrq48tYUSFSeoJd4Fy',
      placeholder: '有你的未来，我会跑着去。',
      avatar: 'wavatar',
      notify: true,
    },
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    'ribbon', // 彩带背景
    'cursor-effects',
  ],
};
