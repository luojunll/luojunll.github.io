import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "": [
    { text: "读书笔记", icon: "fa-brands fa-readme", link: "https://luojunll.github.io/reading/" },
    // 指定显示页面
    {
      text: "🧰 应用手册",
      icon: "",
      prefix: "/apps/",
      link: "",
      collapsible: true,
      children: [
        "Applist.md",
        "toolbox.md",
      ],
    },
    {
      text: "🔡 代码编程",
      icon: "",
      prefix: "/code/",
      collapsible: true,
      children: [
        {
          text: "📝 Markdown",
          icon: "",
          prefix: "/code/markdown/",
          collapsible: true,
          children: [
            'markdown语法示例.md',
          ],
        },
        {
          text: "🤖 算法",
          icon: "",
          prefix: "/code/算法/",
          collapsible: true,
          children: [
            '希尔排序.md',
            '归并排序.md',
            '选择排序、冒泡排序、插入排序.md'
          ],
        },
        {
          text: "🔒 信息安全",
          icon: "",
          prefix: "/code/信息安全/",
          collapsible: true,
          children: [
            'xss.md',
            'sql_injection.md',
          ],
        },
      ]
    },
    {
      text: "博客文章",
      icon: "fa-solid fa-feather-pointed",
      prefix: "/_posts/",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ],
});
