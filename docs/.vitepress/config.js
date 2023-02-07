export default {
  title: "VitePress",
  description: "Just playing around.",
  markdown: {
    config: (md) => {
      md.use(require("markdown-it-katex"));
    },
  },
};
