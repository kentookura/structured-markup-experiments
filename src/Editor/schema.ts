import { Schema, NodeSpec, NodeType, DOMOutputSpec } from "prosemirror-model";
import { InputRule } from "prosemirror-inputrules";

const environments = ["definition", "theorem", "corollary", "proof"];

const environment: NodeSpec = {
  attrs: { type: { default: "definition" } },
  content: "block*",
  group: "block",
  toDom: (node) => [
    "p",
    {
      "environment-type": node.attrs.type,
      class: "evironment_".concat(node.attrs.type),
    },
  ],
  parseDom: [
    {
      tag: "p[environment-type]",
      getAttrs: (dom) => {
        let type = dom.getAttribute("environment-type");
        return environments.indexOf(type) > -1 ? type : false;
      },
    },
  ],
};

export const nodes = {
  doc: {
    content: "block+",
  } as NodeSpec,
  environment,
  paragraph: {
    content: "inline*",
    group: "block",
    parseDOM: [{ tag: "p" }],
    toDOM() {
      return ["p", 0];
    },
  } as NodeSpec,
  math_inline: {
    // important!
    group: "inline math",
    content: "text*", // important!
    inline: true, // important!
    atom: true, // important!
    toDOM: () => ["math-inline", { class: "math-node" }, 0],
    parseDOM: [
      {
        tag: "math-inline", // important!
      },
    ],
  } as NodeSpec,
  math_display: {
    // important!
    group: "block math",
    content: "text*", // important!
    atom: true, // important!
    code: true, // important!
    toDOM: () => ["math-display", { class: "math-node" }, 0],
    parseDOM: [
      {
        tag: "math-display", // important!
      },
    ],
  } as NodeSpec,
  text: {
    group: "inline",
  } as NodeSpec,
  /// A heading textblock, with a `level` attribute that
  /// should hold the number 1 to 6. Parsed and serialized as `<h1>` to
  /// `<h6>` elements.
  heading: {
    attrs: { level: { default: 1 } },
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [
      { tag: "h1", attrs: { level: 1 } },
      { tag: "h2", attrs: { level: 2 } },
      { tag: "h3", attrs: { level: 3 } },
      { tag: "h4", attrs: { level: 4 } },
      { tag: "h5", attrs: { level: 5 } },
      { tag: "h6", attrs: { level: 6 } },
    ],
    toDOM(node) {
      return ["h" + node.attrs.level, 0];
    },
  } as NodeSpec,

  //ordered_list: {
  //  content: "list_item+",
  //  group: "block",
  //  attrs: { order: { default: 1 }, tight: { default: false } },
  //  parseDOM: [
  //    {
  //      tag: "ol",
  //      getAttrs(dom) {
  //        return {
  //          order: (dom as HTMLElement).hasAttribute("start")
  //            ? +(dom as HTMLElement).getAttribute("start")!
  //            : 1,
  //          tight: (dom as HTMLElement).hasAttribute("data-tight"),
  //        };
  //      },
  //    },
  //  ],
  //  toDOM(node) {
  //    return [
  //      "ol",
  //      {
  //        start: node.attrs.order == 1 ? null : node.attrs.order,
  //        "data-tight": node.attrs.tight ? "true" : null,
  //      },
  //      0,
  //    ];
  //  },
  //} as NodeSpec,

  bullet_list: {
    content: "list_item+",
    group: "block",
    attrs: { tight: { default: false } },
    parseDOM: [
      {
        tag: "ul",
        getAttrs: (dom) => ({
          tight: (dom as HTMLElement).hasAttribute("data-tight"),
        }),
      },
    ],
    toDOM(node) {
      return ["ul", { "data-tight": node.attrs.tight ? "true" : null }, 0];
    },
  } as NodeSpec,

  list_item: {
    content: "paragraph block*",
    defining: true,
    parseDOM: [{ tag: "li" }],
    toDOM() {
      return ["li", 0];
    },
  } as NodeSpec,
};

export const marks = {
  highlight: {
    attrs: {
      id: {},
    },
    excludes: "",
    parseDOM: [
      {
        tag: "[data-highlight-id]",
        getAttrs(dom) {
          return { id: dom.getAttribute("data-highlight-id") };
        },
      },
    ],
    toDOM(node) {
      return ["span", { "data-highlight-id": node.attrs.id }, 0];
    },
  },

  link: {
    attrs: {
      href: {},
      title: { default: null },
    },
    inclusive: false,
    parseDOM: [
      {
        tag: "a[href]",
        getAttrs(dom) {
          return {
            href: dom.getAttribute("href"),
            title: dom.getAttribute("title"),
          };
        },
      },
    ],
    toDOM(node) {
      let { href, title } = node.attrs;
      return ["a", { href, title }, 0];
    },
  },

  em: {
    parseDOM: [{ tag: "i" }, { tag: "em" }, { style: "font-style=italic" }],
    toDOM() {
      return ["em", 0];
    },
  },

  strong: {
    parseDOM: [
      { tag: "strong" },
      {
        tag: "b",
        getAttrs: (node) => node.style.fontWeight != "normal" && null,
      },
      {
        style: "font-weight",
        getAttrs: (value) => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null,
      },
    ],
    toDOM() {
      return ["strong", 0];
    },
  },
};
export const mathSchema = new Schema({ nodes, marks });
