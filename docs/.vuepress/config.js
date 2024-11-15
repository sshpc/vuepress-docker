import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    title: 'VuePress',
    lang: 'zh-CN',
    description: '基于VuePress',
    head: [
      ['link', { rel: 'icon', href: 'https://v2.vuepress.vuejs.org/images/hero.png' }]
    ],
    plugins: [
      copyCodePlugin({
        // 插件选项
      }),
      searchPlugin({
        // 配置项
        maxSuggestions:60
      }),
    ],
    logo: 'https://v2.vuepress.vuejs.org/images/hero.png',
    theme: defaultTheme({
      navbar: [
        {
          text: '首页',
          link: '/',
        },
        {
          text: 'html',
          link: '/html',
        },
        {
          text: 'VuePress官网',
          link: 'https://v2.vuepress.vuejs.org/zh/',
        }, 
      ],
    }),
  })