# DJ的前端荒野
## 本地开发
1. `git clone https://github.com/reamd/reamd.github.io`

2. `pnpm install`

3. `pnpm run dev`

4. <http://localhost:4321>

- 在`src/content`增加文档。

## 配置说明
- 一级导航 `src/components/starlight/SiteTitle.astro`，默认路由也在这里修改
- 博客导航 `astro.config.ts` -> `sidebar`
- [文章内容配置](https://starlight.astro.build/reference/frontmatter/#sidebar)
    - 是否被autogenerate收录
    - 是否_blank
- [starlight自带的组件](https://starlight.astro.build/reference/overrides/)
