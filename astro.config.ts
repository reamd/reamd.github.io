import starlight from "@astrojs/starlight";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.djfos.fun",

  integrations: [
    starlight({
      logo: {
        src: "./src/assets/logo.jpg",
        alt: "Blog's logo",
      },
      expressiveCode: {
        plugins: [pluginCollapsibleSections()]
      },
      title: "DJ的前端荒野",
      description: "前端开发DJ，分享技术，成长等。让我们一起探索人生，争做数字游民，点亮自己的荒野。",
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN', // lang is required for root locales
        },
      },
      social: {
        github: "https://github.com/reamd/",
        'x.com': 'https://x.com/DJ_wilderness',
      },
      customCss: ["./src/styles/custom.css"],
      // editLink: {
      //   baseUrl: "https://github.com/reamd/reamd.github.io/edit/main/",
      // },
      lastUpdated: true,
      components: {
        SiteTitle: "./src/components/starlight/SiteTitle.astro",
        TableOfContents: "./src/components/starlight/TableOfContents.astro",
        PageTitle: "./src/components/starlight/PageTitle.astro",
      },
      sidebar: [
        { label: '首页', link: '/' },
        {
          label: "原创文章",
          autogenerate: { directory: 'article' },
          // collapsed: true,
          // items: [
          //   { label: "Why Volar?", link: "/article/why-volar" },
          // ],
        },
        {
          label: "技术译文",
          autogenerate: { directory: 'translations' },
        },
        {
          label: "早期博文-博客园",
          link: 'https://www.cnblogs.com/reamd',
          attrs: { target: '_blank' }
        },
        // { label: '文章教程', link: '/example' },
      ],
    }),
  ],
});
