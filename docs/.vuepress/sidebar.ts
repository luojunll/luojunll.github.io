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
        {
          text: "其他",
          icon: "fa-solid fa-code-compare",
          collapsible: true,
          children: ["design.md"],
        },
      ],
    },
    {
      text: "🔡 代码编程",
      icon: "",
      prefix: "/code/",
      collapsible: true,
      children: [
        "README.md",
        {
          text: "Basic",
          icon: "fa-solid fa-cube",
          collapsible: true,
          children: ["Markdown.md", "Electron.md", "AutoHotkey.md", "Regex.md"],
        },
        {
          text: "FrondEnd",
          icon: "fa-solid fa-object-group",
          collapsible: true,
          children: ["Vue.md", "HTML.md", "Javascript.md", "Python.md"],
        },
      ],
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
