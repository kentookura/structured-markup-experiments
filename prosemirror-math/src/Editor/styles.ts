import { css } from "lit";

// This is not great

export const katex = css`
  @font-face {
    font-family: KaTeX_AMS;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_AMS-Regular.woff2) format("woff2"),
      url(fonts/KaTeX_AMS-Regular.woff) format("woff"),
      url(fonts/KaTeX_AMS-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Caligraphic;
    font-style: normal;
    font-weight: 700;
    src: url(fonts/KaTeX_Caligraphic-Bold.woff2) format("woff2"),
      url(fonts/KaTeX_Caligraphic-Bold.woff) format("woff"),
      url(fonts/KaTeX_Caligraphic-Bold.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Caligraphic;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Caligraphic-Regular.woff2) format("woff2"),
      url(fonts/KaTeX_Caligraphic-Regular.woff) format("woff"),
      url(fonts/KaTeX_Caligraphic-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Fraktur;
    font-style: normal;
    font-weight: 700;
    src: url(fonts/KaTeX_Fraktur-Bold.woff2) format("woff2"),
      url(fonts/KaTeX_Fraktur-Bold.woff) format("woff"),
      url(fonts/KaTeX_Fraktur-Bold.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Fraktur;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Fraktur-Regular.woff2) format("woff2"),
      url(fonts/KaTeX_Fraktur-Regular.woff) format("woff"),
      url(fonts/KaTeX_Fraktur-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Main;
    font-style: normal;
    font-weight: 700;
    src: url(fonts/KaTeX_Main-Bold.woff2) format("woff2"),
      url(fonts/KaTeX_Main-Bold.woff) format("woff"),
      url(fonts/KaTeX_Main-Bold.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Main;
    font-style: italic;
    font-weight: 700;
    src: url(fonts/KaTeX_Main-BoldItalic.woff2) format("woff2"),
      url(fonts/KaTeX_Main-BoldItalic.woff) format("woff"),
      url(fonts/KaTeX_Main-BoldItalic.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Main;
    font-style: italic;
    font-weight: 400;
    src: url(fonts/KaTeX_Main-Italic.woff2) format("woff2"),
      url(fonts/KaTeX_Main-Italic.woff) format("woff"),
      url(fonts/KaTeX_Main-Italic.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Main;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Main-Regular.woff2) format("woff2"),
      url(fonts/KaTeX_Main-Regular.woff) format("woff"),
      url(fonts/KaTeX_Main-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Math;
    font-style: italic;
    font-weight: 700;
    src: url(fonts/KaTeX_Math-BoldItalic.woff2) format("woff2"),
      url(fonts/KaTeX_Math-BoldItalic.woff) format("woff"),
      url(fonts/KaTeX_Math-BoldItalic.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Math;
    font-style: italic;
    font-weight: 400;
    src: url(fonts/KaTeX_Math-Italic.woff2) format("woff2"),
      url(fonts/KaTeX_Math-Italic.woff) format("woff"),
      url(fonts/KaTeX_Math-Italic.ttf) format("truetype");
  }
  @font-face {
    font-family: "KaTeX_SansSerif";
    font-style: normal;
    font-weight: 700;
    src: url(fonts/KaTeX_SansSerif-Bold.woff2) format("woff2"),
      url(fonts/KaTeX_SansSerif-Bold.woff) format("woff"),
      url(fonts/KaTeX_SansSerif-Bold.ttf) format("truetype");
  }
  @font-face {
    font-family: "KaTeX_SansSerif";
    font-style: italic;
    font-weight: 400;
    src: url(fonts/KaTeX_SansSerif-Italic.woff2) format("woff2"),
      url(fonts/KaTeX_SansSerif-Italic.woff) format("woff"),
      url(fonts/KaTeX_SansSerif-Italic.ttf) format("truetype");
  }
  @font-face {
    font-family: "KaTeX_SansSerif";
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_SansSerif-Regular.woff2) format("woff2"),
      url(fonts/KaTeX_SansSerif-Regular.woff) format("woff"),
      url(fonts/KaTeX_SansSerif-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Script;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Script-Regular.woff2) format("woff2"),
      url(fonts/KaTeX_Script-Regular.woff) format("woff"),
      url(fonts/KaTeX_Script-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Size1;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Size1-Regular.woff2) format("woff2"),
      url(fonts/KaTeX_Size1-Regular.woff) format("woff"),
      url(fonts/KaTeX_Size1-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Size2;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Size2-Regular.woff2) format("woff2"),
      url(fonts/KaTeX_Size2-Regular.woff) format("woff"),
      url(fonts/KaTeX_Size2-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Size3;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Size3-Regular.woff2) format("woff2"),
      url(fonts/KaTeX_Size3-Regular.woff) format("woff"),
      url(fonts/KaTeX_Size3-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Size4;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Size4-Regular.woff2) format("woff2"),
      url(fonts/KaTeX_Size4-Regular.woff) format("woff"),
      url(fonts/KaTeX_Size4-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: KaTeX_Typewriter;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Typewriter-Regular.woff2) format("woff2"),
      url(fonts/KaTeX_Typewriter-Regular.woff) format("woff"),
      url(fonts/KaTeX_Typewriter-Regular.ttf) format("truetype");
  }
  .katex {
    text-rendering: auto;
    font: normal 1.21em KaTeX_Main, Times New Roman, serif;
    line-height: 1.2;
    text-indent: 0;
  }
  .katex * {
    -ms-high-contrast-adjust: none !important;
    border-color: currentColor;
  }
  .katex .katex-version:after {
    content: "0.16.4";
  }
  .katex .katex-mathml {
    clip: rect(1px, 1px, 1px, 1px);
    border: 0;
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  .katex .katex-html > .newline {
    display: block;
  }
  .katex .base {
    position: relative;
    white-space: nowrap;
    width: -webkit-min-content;
    width: -moz-min-content;
    width: min-content;
  }
  .katex .base,
  .katex .strut {
    display: inline-block;
  }
  .katex .textbf {
    font-weight: 700;
  }
  .katex .textit {
    font-style: italic;
  }
  .katex .textrm {
    font-family: KaTeX_Main;
  }
  .katex .textsf {
    font-family: KaTeX_SansSerif;
  }
  .katex .texttt {
    font-family: KaTeX_Typewriter;
  }
  .katex .mathnormal {
    font-family: KaTeX_Math;
    font-style: italic;
  }
  .katex .mathit {
    font-family: KaTeX_Main;
    font-style: italic;
  }
  .katex .mathrm {
    font-style: normal;
  }
  .katex .mathbf {
    font-family: KaTeX_Main;
    font-weight: 700;
  }
  .katex .boldsymbol {
    font-family: KaTeX_Math;
    font-style: italic;
    font-weight: 700;
  }
  .katex .amsrm,
  .katex .mathbb,
  .katex .textbb {
    font-family: KaTeX_AMS;
  }
  .katex .mathcal {
    font-family: KaTeX_Caligraphic;
  }
  .katex .mathfrak,
  .katex .textfrak {
    font-family: KaTeX_Fraktur;
  }
  .katex .mathtt {
    font-family: KaTeX_Typewriter;
  }
  .katex .mathscr,
  .katex .textscr {
    font-family: KaTeX_Script;
  }
  .katex .mathsf,
  .katex .textsf {
    font-family: KaTeX_SansSerif;
  }
  .katex .mathboldsf,
  .katex .textboldsf {
    font-family: KaTeX_SansSerif;
    font-weight: 700;
  }
  .katex .mathitsf,
  .katex .textitsf {
    font-family: KaTeX_SansSerif;
    font-style: italic;
  }
  .katex .mainrm {
    font-family: KaTeX_Main;
    font-style: normal;
  }
  .katex .vlist-t {
    border-collapse: collapse;
    display: inline-table;
    table-layout: fixed;
  }
  .katex .vlist-r {
    display: table-row;
  }
  .katex .vlist {
    display: table-cell;
    position: relative;
    vertical-align: bottom;
  }
  .katex .vlist > span {
    display: block;
    height: 0;
    position: relative;
  }
  .katex .vlist > span > span {
    display: inline-block;
  }
  .katex .vlist > span > .pstrut {
    overflow: hidden;
    width: 0;
  }
  .katex .vlist-t2 {
    margin-right: -2px;
  }
  .katex .vlist-s {
    display: table-cell;
    font-size: 1px;
    min-width: 2px;
    vertical-align: bottom;
    width: 2px;
  }
  .katex .vbox {
    align-items: baseline;
    display: inline-flex;
    flex-direction: column;
  }
  .katex .hbox {
    width: 100%;
  }
  .katex .hbox,
  .katex .thinbox {
    display: inline-flex;
    flex-direction: row;
  }
  .katex .thinbox {
    max-width: 0;
    width: 0;
  }
  .katex .msupsub {
    text-align: left;
  }
  .katex .mfrac > span > span {
    text-align: center;
  }
  .katex .mfrac .frac-line {
    border-bottom-style: solid;
    display: inline-block;
    width: 100%;
  }
  .katex .hdashline,
  .katex .hline,
  .katex .mfrac .frac-line,
  .katex .overline .overline-line,
  .katex .rule,
  .katex .underline .underline-line {
    min-height: 1px;
  }
  .katex .mspace {
    display: inline-block;
  }
  .katex .clap,
  .katex .llap,
  .katex .rlap {
    position: relative;
    width: 0;
  }
  .katex .clap > .inner,
  .katex .llap > .inner,
  .katex .rlap > .inner {
    position: absolute;
  }
  .katex .clap > .fix,
  .katex .llap > .fix,
  .katex .rlap > .fix {
    display: inline-block;
  }
  .katex .llap > .inner {
    right: 0;
  }
  .katex .clap > .inner,
  .katex .rlap > .inner {
    left: 0;
  }
  .katex .clap > .inner > span {
    margin-left: -50%;
    margin-right: 50%;
  }
  .katex .rule {
    border: 0 solid;
    display: inline-block;
    position: relative;
  }
  .katex .hline,
  .katex .overline .overline-line,
  .katex .underline .underline-line {
    border-bottom-style: solid;
    display: inline-block;
    width: 100%;
  }
  .katex .hdashline {
    border-bottom-style: dashed;
    display: inline-block;
    width: 100%;
  }
  .katex .sqrt > .root {
    margin-left: 0.27777778em;
    margin-right: -0.55555556em;
  }
  .katex .fontsize-ensurer.reset-size1.size1,
  .katex .sizing.reset-size1.size1 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size1.size2,
  .katex .sizing.reset-size1.size2 {
    font-size: 1.2em;
  }
  .katex .fontsize-ensurer.reset-size1.size3,
  .katex .sizing.reset-size1.size3 {
    font-size: 1.4em;
  }
  .katex .fontsize-ensurer.reset-size1.size4,
  .katex .sizing.reset-size1.size4 {
    font-size: 1.6em;
  }
  .katex .fontsize-ensurer.reset-size1.size5,
  .katex .sizing.reset-size1.size5 {
    font-size: 1.8em;
  }
  .katex .fontsize-ensurer.reset-size1.size6,
  .katex .sizing.reset-size1.size6 {
    font-size: 2em;
  }
  .katex .fontsize-ensurer.reset-size1.size7,
  .katex .sizing.reset-size1.size7 {
    font-size: 2.4em;
  }
  .katex .fontsize-ensurer.reset-size1.size8,
  .katex .sizing.reset-size1.size8 {
    font-size: 2.88em;
  }
  .katex .fontsize-ensurer.reset-size1.size9,
  .katex .sizing.reset-size1.size9 {
    font-size: 3.456em;
  }
  .katex .fontsize-ensurer.reset-size1.size10,
  .katex .sizing.reset-size1.size10 {
    font-size: 4.148em;
  }
  .katex .fontsize-ensurer.reset-size1.size11,
  .katex .sizing.reset-size1.size11 {
    font-size: 4.976em;
  }
  .katex .fontsize-ensurer.reset-size2.size1,
  .katex .sizing.reset-size2.size1 {
    font-size: 0.83333333em;
  }
  .katex .fontsize-ensurer.reset-size2.size2,
  .katex .sizing.reset-size2.size2 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size2.size3,
  .katex .sizing.reset-size2.size3 {
    font-size: 1.16666667em;
  }
  .katex .fontsize-ensurer.reset-size2.size4,
  .katex .sizing.reset-size2.size4 {
    font-size: 1.33333333em;
  }
  .katex .fontsize-ensurer.reset-size2.size5,
  .katex .sizing.reset-size2.size5 {
    font-size: 1.5em;
  }
  .katex .fontsize-ensurer.reset-size2.size6,
  .katex .sizing.reset-size2.size6 {
    font-size: 1.66666667em;
  }
  .katex .fontsize-ensurer.reset-size2.size7,
  .katex .sizing.reset-size2.size7 {
    font-size: 2em;
  }
  .katex .fontsize-ensurer.reset-size2.size8,
  .katex .sizing.reset-size2.size8 {
    font-size: 2.4em;
  }
  .katex .fontsize-ensurer.reset-size2.size9,
  .katex .sizing.reset-size2.size9 {
    font-size: 2.88em;
  }
  .katex .fontsize-ensurer.reset-size2.size10,
  .katex .sizing.reset-size2.size10 {
    font-size: 3.45666667em;
  }
  .katex .fontsize-ensurer.reset-size2.size11,
  .katex .sizing.reset-size2.size11 {
    font-size: 4.14666667em;
  }
  .katex .fontsize-ensurer.reset-size3.size1,
  .katex .sizing.reset-size3.size1 {
    font-size: 0.71428571em;
  }
  .katex .fontsize-ensurer.reset-size3.size2,
  .katex .sizing.reset-size3.size2 {
    font-size: 0.85714286em;
  }
  .katex .fontsize-ensurer.reset-size3.size3,
  .katex .sizing.reset-size3.size3 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size3.size4,
  .katex .sizing.reset-size3.size4 {
    font-size: 1.14285714em;
  }
  .katex .fontsize-ensurer.reset-size3.size5,
  .katex .sizing.reset-size3.size5 {
    font-size: 1.28571429em;
  }
  .katex .fontsize-ensurer.reset-size3.size6,
  .katex .sizing.reset-size3.size6 {
    font-size: 1.42857143em;
  }
  .katex .fontsize-ensurer.reset-size3.size7,
  .katex .sizing.reset-size3.size7 {
    font-size: 1.71428571em;
  }
  .katex .fontsize-ensurer.reset-size3.size8,
  .katex .sizing.reset-size3.size8 {
    font-size: 2.05714286em;
  }
  .katex .fontsize-ensurer.reset-size3.size9,
  .katex .sizing.reset-size3.size9 {
    font-size: 2.46857143em;
  }
  .katex .fontsize-ensurer.reset-size3.size10,
  .katex .sizing.reset-size3.size10 {
    font-size: 2.96285714em;
  }
  .katex .fontsize-ensurer.reset-size3.size11,
  .katex .sizing.reset-size3.size11 {
    font-size: 3.55428571em;
  }
  .katex .fontsize-ensurer.reset-size4.size1,
  .katex .sizing.reset-size4.size1 {
    font-size: 0.625em;
  }
  .katex .fontsize-ensurer.reset-size4.size2,
  .katex .sizing.reset-size4.size2 {
    font-size: 0.75em;
  }
  .katex .fontsize-ensurer.reset-size4.size3,
  .katex .sizing.reset-size4.size3 {
    font-size: 0.875em;
  }
  .katex .fontsize-ensurer.reset-size4.size4,
  .katex .sizing.reset-size4.size4 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size4.size5,
  .katex .sizing.reset-size4.size5 {
    font-size: 1.125em;
  }
  .katex .fontsize-ensurer.reset-size4.size6,
  .katex .sizing.reset-size4.size6 {
    font-size: 1.25em;
  }
  .katex .fontsize-ensurer.reset-size4.size7,
  .katex .sizing.reset-size4.size7 {
    font-size: 1.5em;
  }
  .katex .fontsize-ensurer.reset-size4.size8,
  .katex .sizing.reset-size4.size8 {
    font-size: 1.8em;
  }
  .katex .fontsize-ensurer.reset-size4.size9,
  .katex .sizing.reset-size4.size9 {
    font-size: 2.16em;
  }
  .katex .fontsize-ensurer.reset-size4.size10,
  .katex .sizing.reset-size4.size10 {
    font-size: 2.5925em;
  }
  .katex .fontsize-ensurer.reset-size4.size11,
  .katex .sizing.reset-size4.size11 {
    font-size: 3.11em;
  }
  .katex .fontsize-ensurer.reset-size5.size1,
  .katex .sizing.reset-size5.size1 {
    font-size: 0.55555556em;
  }
  .katex .fontsize-ensurer.reset-size5.size2,
  .katex .sizing.reset-size5.size2 {
    font-size: 0.66666667em;
  }
  .katex .fontsize-ensurer.reset-size5.size3,
  .katex .sizing.reset-size5.size3 {
    font-size: 0.77777778em;
  }
  .katex .fontsize-ensurer.reset-size5.size4,
  .katex .sizing.reset-size5.size4 {
    font-size: 0.88888889em;
  }
  .katex .fontsize-ensurer.reset-size5.size5,
  .katex .sizing.reset-size5.size5 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size5.size6,
  .katex .sizing.reset-size5.size6 {
    font-size: 1.11111111em;
  }
  .katex .fontsize-ensurer.reset-size5.size7,
  .katex .sizing.reset-size5.size7 {
    font-size: 1.33333333em;
  }
  .katex .fontsize-ensurer.reset-size5.size8,
  .katex .sizing.reset-size5.size8 {
    font-size: 1.6em;
  }
  .katex .fontsize-ensurer.reset-size5.size9,
  .katex .sizing.reset-size5.size9 {
    font-size: 1.92em;
  }
  .katex .fontsize-ensurer.reset-size5.size10,
  .katex .sizing.reset-size5.size10 {
    font-size: 2.30444444em;
  }
  .katex .fontsize-ensurer.reset-size5.size11,
  .katex .sizing.reset-size5.size11 {
    font-size: 2.76444444em;
  }
  .katex .fontsize-ensurer.reset-size6.size1,
  .katex .sizing.reset-size6.size1 {
    font-size: 0.5em;
  }
  .katex .fontsize-ensurer.reset-size6.size2,
  .katex .sizing.reset-size6.size2 {
    font-size: 0.6em;
  }
  .katex .fontsize-ensurer.reset-size6.size3,
  .katex .sizing.reset-size6.size3 {
    font-size: 0.7em;
  }
  .katex .fontsize-ensurer.reset-size6.size4,
  .katex .sizing.reset-size6.size4 {
    font-size: 0.8em;
  }
  .katex .fontsize-ensurer.reset-size6.size5,
  .katex .sizing.reset-size6.size5 {
    font-size: 0.9em;
  }
  .katex .fontsize-ensurer.reset-size6.size6,
  .katex .sizing.reset-size6.size6 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size6.size7,
  .katex .sizing.reset-size6.size7 {
    font-size: 1.2em;
  }
  .katex .fontsize-ensurer.reset-size6.size8,
  .katex .sizing.reset-size6.size8 {
    font-size: 1.44em;
  }
  .katex .fontsize-ensurer.reset-size6.size9,
  .katex .sizing.reset-size6.size9 {
    font-size: 1.728em;
  }
  .katex .fontsize-ensurer.reset-size6.size10,
  .katex .sizing.reset-size6.size10 {
    font-size: 2.074em;
  }
  .katex .fontsize-ensurer.reset-size6.size11,
  .katex .sizing.reset-size6.size11 {
    font-size: 2.488em;
  }
  .katex .fontsize-ensurer.reset-size7.size1,
  .katex .sizing.reset-size7.size1 {
    font-size: 0.41666667em;
  }
  .katex .fontsize-ensurer.reset-size7.size2,
  .katex .sizing.reset-size7.size2 {
    font-size: 0.5em;
  }
  .katex .fontsize-ensurer.reset-size7.size3,
  .katex .sizing.reset-size7.size3 {
    font-size: 0.58333333em;
  }
  .katex .fontsize-ensurer.reset-size7.size4,
  .katex .sizing.reset-size7.size4 {
    font-size: 0.66666667em;
  }
  .katex .fontsize-ensurer.reset-size7.size5,
  .katex .sizing.reset-size7.size5 {
    font-size: 0.75em;
  }
  .katex .fontsize-ensurer.reset-size7.size6,
  .katex .sizing.reset-size7.size6 {
    font-size: 0.83333333em;
  }
  .katex .fontsize-ensurer.reset-size7.size7,
  .katex .sizing.reset-size7.size7 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size7.size8,
  .katex .sizing.reset-size7.size8 {
    font-size: 1.2em;
  }
  .katex .fontsize-ensurer.reset-size7.size9,
  .katex .sizing.reset-size7.size9 {
    font-size: 1.44em;
  }
  .katex .fontsize-ensurer.reset-size7.size10,
  .katex .sizing.reset-size7.size10 {
    font-size: 1.72833333em;
  }
  .katex .fontsize-ensurer.reset-size7.size11,
  .katex .sizing.reset-size7.size11 {
    font-size: 2.07333333em;
  }
  .katex .fontsize-ensurer.reset-size8.size1,
  .katex .sizing.reset-size8.size1 {
    font-size: 0.34722222em;
  }
  .katex .fontsize-ensurer.reset-size8.size2,
  .katex .sizing.reset-size8.size2 {
    font-size: 0.41666667em;
  }
  .katex .fontsize-ensurer.reset-size8.size3,
  .katex .sizing.reset-size8.size3 {
    font-size: 0.48611111em;
  }
  .katex .fontsize-ensurer.reset-size8.size4,
  .katex .sizing.reset-size8.size4 {
    font-size: 0.55555556em;
  }
  .katex .fontsize-ensurer.reset-size8.size5,
  .katex .sizing.reset-size8.size5 {
    font-size: 0.625em;
  }
  .katex .fontsize-ensurer.reset-size8.size6,
  .katex .sizing.reset-size8.size6 {
    font-size: 0.69444444em;
  }
  .katex .fontsize-ensurer.reset-size8.size7,
  .katex .sizing.reset-size8.size7 {
    font-size: 0.83333333em;
  }
  .katex .fontsize-ensurer.reset-size8.size8,
  .katex .sizing.reset-size8.size8 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size8.size9,
  .katex .sizing.reset-size8.size9 {
    font-size: 1.2em;
  }
  .katex .fontsize-ensurer.reset-size8.size10,
  .katex .sizing.reset-size8.size10 {
    font-size: 1.44027778em;
  }
  .katex .fontsize-ensurer.reset-size8.size11,
  .katex .sizing.reset-size8.size11 {
    font-size: 1.72777778em;
  }
  .katex .fontsize-ensurer.reset-size9.size1,
  .katex .sizing.reset-size9.size1 {
    font-size: 0.28935185em;
  }
  .katex .fontsize-ensurer.reset-size9.size2,
  .katex .sizing.reset-size9.size2 {
    font-size: 0.34722222em;
  }
  .katex .fontsize-ensurer.reset-size9.size3,
  .katex .sizing.reset-size9.size3 {
    font-size: 0.40509259em;
  }
  .katex .fontsize-ensurer.reset-size9.size4,
  .katex .sizing.reset-size9.size4 {
    font-size: 0.46296296em;
  }
  .katex .fontsize-ensurer.reset-size9.size5,
  .katex .sizing.reset-size9.size5 {
    font-size: 0.52083333em;
  }
  .katex .fontsize-ensurer.reset-size9.size6,
  .katex .sizing.reset-size9.size6 {
    font-size: 0.5787037em;
  }
  .katex .fontsize-ensurer.reset-size9.size7,
  .katex .sizing.reset-size9.size7 {
    font-size: 0.69444444em;
  }
  .katex .fontsize-ensurer.reset-size9.size8,
  .katex .sizing.reset-size9.size8 {
    font-size: 0.83333333em;
  }
  .katex .fontsize-ensurer.reset-size9.size9,
  .katex .sizing.reset-size9.size9 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size9.size10,
  .katex .sizing.reset-size9.size10 {
    font-size: 1.20023148em;
  }
  .katex .fontsize-ensurer.reset-size9.size11,
  .katex .sizing.reset-size9.size11 {
    font-size: 1.43981481em;
  }
  .katex .fontsize-ensurer.reset-size10.size1,
  .katex .sizing.reset-size10.size1 {
    font-size: 0.24108004em;
  }
  .katex .fontsize-ensurer.reset-size10.size2,
  .katex .sizing.reset-size10.size2 {
    font-size: 0.28929605em;
  }
  .katex .fontsize-ensurer.reset-size10.size3,
  .katex .sizing.reset-size10.size3 {
    font-size: 0.33751205em;
  }
  .katex .fontsize-ensurer.reset-size10.size4,
  .katex .sizing.reset-size10.size4 {
    font-size: 0.38572806em;
  }
  .katex .fontsize-ensurer.reset-size10.size5,
  .katex .sizing.reset-size10.size5 {
    font-size: 0.43394407em;
  }
  .katex .fontsize-ensurer.reset-size10.size6,
  .katex .sizing.reset-size10.size6 {
    font-size: 0.48216008em;
  }
  .katex .fontsize-ensurer.reset-size10.size7,
  .katex .sizing.reset-size10.size7 {
    font-size: 0.57859209em;
  }
  .katex .fontsize-ensurer.reset-size10.size8,
  .katex .sizing.reset-size10.size8 {
    font-size: 0.69431051em;
  }
  .katex .fontsize-ensurer.reset-size10.size9,
  .katex .sizing.reset-size10.size9 {
    font-size: 0.83317261em;
  }
  .katex .fontsize-ensurer.reset-size10.size10,
  .katex .sizing.reset-size10.size10 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size10.size11,
  .katex .sizing.reset-size10.size11 {
    font-size: 1.19961427em;
  }
  .katex .fontsize-ensurer.reset-size11.size1,
  .katex .sizing.reset-size11.size1 {
    font-size: 0.20096463em;
  }
  .katex .fontsize-ensurer.reset-size11.size2,
  .katex .sizing.reset-size11.size2 {
    font-size: 0.24115756em;
  }
  .katex .fontsize-ensurer.reset-size11.size3,
  .katex .sizing.reset-size11.size3 {
    font-size: 0.28135048em;
  }
  .katex .fontsize-ensurer.reset-size11.size4,
  .katex .sizing.reset-size11.size4 {
    font-size: 0.32154341em;
  }
  .katex .fontsize-ensurer.reset-size11.size5,
  .katex .sizing.reset-size11.size5 {
    font-size: 0.36173633em;
  }
  .katex .fontsize-ensurer.reset-size11.size6,
  .katex .sizing.reset-size11.size6 {
    font-size: 0.40192926em;
  }
  .katex .fontsize-ensurer.reset-size11.size7,
  .katex .sizing.reset-size11.size7 {
    font-size: 0.48231511em;
  }
  .katex .fontsize-ensurer.reset-size11.size8,
  .katex .sizing.reset-size11.size8 {
    font-size: 0.57877814em;
  }
  .katex .fontsize-ensurer.reset-size11.size9,
  .katex .sizing.reset-size11.size9 {
    font-size: 0.69453376em;
  }
  .katex .fontsize-ensurer.reset-size11.size10,
  .katex .sizing.reset-size11.size10 {
    font-size: 0.83360129em;
  }
  .katex .fontsize-ensurer.reset-size11.size11,
  .katex .sizing.reset-size11.size11 {
    font-size: 1em;
  }
  .katex .delimsizing.size1 {
    font-family: KaTeX_Size1;
  }
  .katex .delimsizing.size2 {
    font-family: KaTeX_Size2;
  }
  .katex .delimsizing.size3 {
    font-family: KaTeX_Size3;
  }
  .katex .delimsizing.size4 {
    font-family: KaTeX_Size4;
  }
  .katex .delimsizing.mult .delim-size1 > span {
    font-family: KaTeX_Size1;
  }
  .katex .delimsizing.mult .delim-size4 > span {
    font-family: KaTeX_Size4;
  }
  .katex .nulldelimiter {
    display: inline-block;
    width: 0.12em;
  }
  .katex .delimcenter,
  .katex .op-symbol {
    position: relative;
  }
  .katex .op-symbol.small-op {
    font-family: KaTeX_Size1;
  }
  .katex .op-symbol.large-op {
    font-family: KaTeX_Size2;
  }
  .katex .accent > .vlist-t,
  .katex .op-limits > .vlist-t {
    text-align: center;
  }
  .katex .accent .accent-body {
    position: relative;
  }
  .katex .accent .accent-body:not(.accent-full) {
    width: 0;
  }
  .katex .overlay {
    display: block;
  }
  .katex .mtable .vertical-separator {
    display: inline-block;
    min-width: 1px;
  }
  .katex .mtable .arraycolsep {
    display: inline-block;
  }
  .katex .mtable .col-align-c > .vlist-t {
    text-align: center;
  }
  .katex .mtable .col-align-l > .vlist-t {
    text-align: left;
  }
  .katex .mtable .col-align-r > .vlist-t {
    text-align: right;
  }
  .katex .svg-align {
    text-align: left;
  }
  .katex svg {
    fill: currentColor;
    stroke: currentColor;
    fill-rule: nonzero;
    fill-opacity: 1;
    stroke-width: 1;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-dashoffset: 0;
    stroke-opacity: 1;
    display: block;
    height: inherit;
    position: absolute;
    width: 100%;
  }
  .katex svg path {
    stroke: none;
  }
  .katex img {
    border-style: none;
    max-height: none;
    max-width: none;
    min-height: 0;
    min-width: 0;
  }
  .katex .stretchy {
    display: block;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .katex .stretchy:after,
  .katex .stretchy:before {
    content: "";
  }
  .katex .hide-tail {
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .katex .halfarrow-left {
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 50.2%;
  }
  .katex .halfarrow-right {
    overflow: hidden;
    position: absolute;
    right: 0;
    width: 50.2%;
  }
  .katex .brace-left {
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 25.1%;
  }
  .katex .brace-center {
    left: 25%;
    overflow: hidden;
    position: absolute;
    width: 50%;
  }
  .katex .brace-right {
    overflow: hidden;
    position: absolute;
    right: 0;
    width: 25.1%;
  }
  .katex .x-arrow-pad {
    padding: 0 0.5em;
  }
  .katex .cd-arrow-pad {
    padding: 0 0.55556em 0 0.27778em;
  }
  .katex .mover,
  .katex .munder,
  .katex .x-arrow {
    text-align: center;
  }
  .katex .boxpad {
    padding: 0 0.3em;
  }
  .katex .fbox,
  .katex .fcolorbox {
    border: 0.04em solid;
    box-sizing: border-box;
  }
  .katex .cancel-pad {
    padding: 0 0.2em;
  }
  .katex .cancel-lap {
    margin-left: -0.2em;
    margin-right: -0.2em;
  }
  .katex .sout {
    border-bottom-style: solid;
    border-bottom-width: 0.08em;
  }
  .katex .angl {
    border-right: 0.049em solid;
    border-top: 0.049em solid;
    box-sizing: border-box;
    margin-right: 0.03889em;
  }
  .katex .anglpad {
    padding: 0 0.03889em;
  }
  .katex .eqn-num:before {
    content: "(" counter(katexEqnNo) ")";
    counter-increment: katexEqnNo;
  }
  .katex .mml-eqn-num:before {
    content: "(" counter(mmlEqnNo) ")";
    counter-increment: mmlEqnNo;
  }
  .katex .mtr-glue {
    width: 50%;
  }
  .katex .cd-vert-arrow {
    display: inline-block;
    position: relative;
  }
  .katex .cd-label-left {
    display: inline-block;
    position: absolute;
    right: calc(50% + 0.3em);
    text-align: left;
  }
  .katex .cd-label-right {
    display: inline-block;
    left: calc(50% + 0.3em);
    position: absolute;
    text-align: right;
  }
  .katex-display {
    display: block;
    margin: 1em 0;
    text-align: center;
  }
  .katex-display > .katex {
    display: block;
    text-align: center;
    white-space: nowrap;
  }
  .katex-display > .katex > .katex-html {
    display: block;
    position: relative;
  }
  .katex-display > .katex > .katex-html > .tag {
    position: absolute;
    right: 0;
  }
  .katex-display.leqno > .katex > .katex-html > .tag {
    left: 0;
    right: auto;
  }
  .katex-display.fleqn > .katex {
    padding-left: 2em;
    text-align: left;
  }
  body {
    counter-reset: katexEqnNo mmlEqnNo;
  }
`;

export const mathStyles = css`
  .math-node {
    min-width: 1em;
    min-height: 1em;
    font-size: 0.95em;
    font-family: "Consolas", "Ubuntu Mono", monospace;
    cursor: auto;
  }

  .math-node.empty-math .math-render::before {
    content: "(empty)";
    color: red;
  }

  .math-node .math-render.parse-error::before {
    content: "(math error)";
    color: red;
    cursor: help;
  }

  .math-node.ProseMirror-selectednode {
    outline: none;
  }

  .math-node .math-src {
    display: none;
    color: rgb(132, 33, 162);
    tab-size: 4;
  }

  .math-node.ProseMirror-selectednode .math-src {
    display: inline;
  }
  .math-node.ProseMirror-selectednode .math-render {
    display: none;
  }

  /* -- Inline Math --------------------------------------- */

  math-inline {
    display: inline;
    white-space: nowrap;
  }

  math-inline .math-render {
    display: inline-block;
    font-size: 0.85em;
    cursor: pointer;
  }

  math-inline .math-src .ProseMirror {
    display: inline;
    /* Necessary to fix FireFox bug with contenteditable, https://bugzilla.mozilla.org/show_bug.cgi?id=1252108 */
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
  }

  math-inline .math-src::after,
  math-inline .math-src::before {
    content: "$";
    color: #b0b0b0;
  }

  /* -- Block Math ---------------------------------------- */

  math-display {
    display: block;
  }

  math-display .math-render {
    display: block;
  }

  math-display.ProseMirror-selectednode {
    background-color: #eee;
  }

  math-display .math-src .ProseMirror {
    width: 100%;
    display: block;
  }

  math-display .math-src::after,
  math-display .math-src::before {
    content: "$$";
    text-align: left;
    color: #b0b0b0;
  }

  math-display .katex-display {
    margin: 0;
  }

  /* -- Selection Plugin ---------------------------------- */

  p::selection,
  p > *::selection {
    background-color: #c0c0c0;
  }
  .katex-html *::selection {
    background-color: none !important;
  }

  .math-node.math-select .math-render {
    background-color: #c0c0c0ff;
  }
  math-inline.math-select .math-render {
    padding-top: 2px;
  }
`;

export const prosemirrorStyles = css`
  .ProseMirror {
    position: relative;
    word-wrap: break-word;
    white-space: pre-wrap;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
    padding: 1rem;
    line-height: 1.2;
    outline: none;
    font-family: var(
      --markdown-editor-typography-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: var(
      --markdown-editor-typography-font-size,
      var(--mdc-typography-subtitle1-font-size, 1rem)
    );
    font-weight: var(
      --markdown-editor-typography-font-weight,
      var(--mdc-typography-subtitle1-font-weight, 400)
    );
    letter-spacing: var(
      --markdown-editor-typography-letter-spacing,
      var(--mdc-typography-subtitle1-letter-spacing, 0.009375em)
    );
  }
  .ProseMirror pre {
    white-space: pre-wrap;
  }
  .ProseMirror li {
    position: relative;
  }
  .ProseMirror p:first-child,
  .ProseMirror h1:first-child,
  .ProseMirror h2:first-child,
  .ProseMirror h3:first-child,
  .ProseMirror h4:first-child,
  .ProseMirror h5:first-child,
  .ProseMirror h6:first-child {
    margin-top: 10px;
  }
  .ProseMirror a {
    color: var(--markdown-editor-typography-anchor-color, -webkit-link);
    text-decoration: var(--markdown-editor-typography-anchor-text-decoration);
  }
  .ProseMirror p {
    margin-bottom: 1em;
  }
  .ProseMirror-hideselection {
    caret-color: transparent;
  }
  .ProseMirror-hideselection *::selection,
  .ProseMirror-hideselection *::-moz-selection {
    background: transparent;
  }
  .ProseMirror-selectednode {
    outline: 2px solid #8cf;
  }
  /* Make sure li selections wrap around markers */
  li.ProseMirror-selectednode {
    outline: none;
  }
  li.ProseMirror-selectednode:after {
    content: "";
    position: absolute;
    left: -32px;
    right: -2px;
    top: -2px;
    bottom: -2px;
    border: 2px solid #8cf;
    pointer-events: none;
  }
  .ProseMirror-textblock-dropdown {
    min-width: 3em;
  }
  .ProseMirror-menu {
    margin: 0 -4px;
    line-height: 1;
  }
  .ProseMirror-tooltip .ProseMirror-menu {
    width: -webkit-fit-content;
    width: fit-content;
    white-space: pre;
  }
  .ProseMirror-menuitem {
    margin: 0.25rem 0.25rem 0.25rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    overflow: hidden;
  }
  .ProseMirror-menuitem:hover {
    background-color: #f5f5f5;
  }
  .ProseMirror-menuseparator {
    margin: 0 8px;
  }
  .ProseMirror-menu-dropdown,
  .ProseMirror-menu-dropdown-menu {
    font-size: 90%;
    white-space: nowrap;
  }
  .ProseMirror-menu-dropdown {
    vertical-align: 1px;
    cursor: pointer;
    position: relative;
    padding-right: 15px;
  }
  .ProseMirror-menu-dropdown-wrap {
    padding: 1px 0 1px 4px;
    display: inline-block;
    position: relative;
  }
  .ProseMirror-menu-dropdown:after {
    content: "";
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid currentColor;
    opacity: 0.6;
    position: absolute;
    right: 4px;
    top: calc(50% - 2px);
  }
  .ProseMirror-menu-dropdown-menu,
  .ProseMirror-menu-submenu {
    position: absolute;
    background: white;
    color: #666;
    border: 1px solid #aaa;
    padding: 2px;
  }
  .ProseMirror-menu-dropdown-menu {
    z-index: 1;
    min-width: 6em;
  }
  .ProseMirror-menu-dropdown-item {
    cursor: pointer;
  }
  .ProseMirror-menu-dropdown-item:hover {
    background: #f2f2f2;
  }
  .ProseMirror-menu-dropdown-item > div {
    padding: 0.375rem 0.5rem;
  }
  .ProseMirror-menu-submenu-wrap {
    position: relative;
    margin-right: -4px;
  }
  .ProseMirror-menu-submenu-label:after {
    content: "";
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 4px solid currentColor;
    opacity: 0.6;
    position: absolute;
    right: 4px;
    top: calc(50% - 4px);
  }
  .ProseMirror-menu-submenu {
    display: none;
    min-width: 4em;
    left: 100%;
    top: -3px;
  }
  .ProseMirror-menu-active {
    background: #eee;
    border-radius: 4px;
    color: black;
  }
  .ProseMirror-menu-submenu-wrap:hover .ProseMirror-menu-submenu,
  .ProseMirror-menu-submenu-wrap-active .ProseMirror-menu-submenu {
    display: block;
  }
  .ProseMirror-menubar {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    background: white;
    min-height: 1em;
    overflow: visible;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    color: #666;
    padding: 1px 6px;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom: 1px solid
      var(--markdown-editor-outline-idle-border-color, rgba(0, 0, 0, 0.38));
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  .ProseMirror-icon {
    display: inline-block;
    line-height: 0.8;
    vertical-align: -2px;
    /* Compensate for padding */
    padding: 2px 8px;
    cursor: pointer;
  }
  .ProseMirror-menu-disabled {
    color: rgba(0, 0, 0, 0.37);
    background-color: rgba(0, 0, 0, 0.12);
    cursor: not-allowed;
  }
  .ProseMirror-menu-disabled.ProseMirror-icon {
    cursor: not-allowed;
  }
  .ProseMirror-icon svg {
    fill: currentColor;
    height: 1em;
  }
  .ProseMirror-icon span {
    vertical-align: text-top;
  }
  .ProseMirror-gapcursor {
    display: none;
    pointer-events: none;
    position: absolute;
  }
  .ProseMirror-gapcursor:after {
    content: "";
    display: block;
    position: absolute;
    top: -2px;
    width: 20px;
    border-top: 1px solid black;
    animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
  }
  @keyframes ProseMirror-cursor-blink {
    to {
      visibility: hidden;
    }
  }
  .ProseMirror-focused .ProseMirror-gapcursor {
    display: block;
  }
  /* Add space around the hr to make clicking it easier */
  .ProseMirror-example-setup-style hr {
    padding: 2px 10px;
    border: none;
    margin: 1em 0;
  }
  .ProseMirror-example-setup-style hr:after {
    content: "";
    display: block;
    height: 1px;
    background-color: silver;
    line-height: 2px;
  }
  .ProseMirror ul,
  .ProseMirror ol {
    padding-left: 30px;
  }
  .ProseMirror blockquote {
    padding-left: 1em;
    border-left: 3px solid #eee;
    margin-left: 0;
    margin-right: 0;
  }
  .ProseMirror-example-setup-style img {
    cursor: default;
  }
  .ProseMirror-invalid {
    background: #ffc;
    border: 1px solid #cc7;
    border-radius: 4px;
    padding: 5px 10px;
    position: absolute;
    min-width: 10em;
  }
  .ProseMirror h1.title.empty-node::before,
  .ProseMirror h2.instructional-prompt.empty-node::before,
  .ProseMirror h3.mechanical-promp.empty-node::before {
    content: "Enter title here...";
  }
  .ProseMirror div.passage-subtitle.empty-node:first-child::before {
    content: "Enter subtitle here...";
  }
  .ProseMirror div.passage-author.empty-node:first-child::before,
  .ProseMirror div.passage-cast-title.empty-node:first-child::before,
  .ProseMirror div.passage-act-title.empty-node:first-child::before,
  .ProseMirror div.passage-scene-title.empty-node:first-child::before,
  .ProseMirror div.passage-verse.empty-node:first-child::before,
  .ProseMirror div.passage-footnotes.empty-node:first-child::before,
  .ProseMirror div.paragraph.empty-node:first-child::before {
    content: "Enter text here...";
  }
  div[contenteditable]:focus h1.title.empty-node::before,
  div[contenteditable]:focus h2.instructional-prompt.empty-node::before,
  div[contenteditable]:focus h3.mechanical-promp.empty-node::before,
  div[contenteditable]:focus
    div.passage-subtitle.empty-node:first-child::before,
  div[contenteditable]:focus div.passage-author.empty-node:first-child::before,
  div[contenteditable]:focus
    div.passage-cast-title.empty-node:first-child::before,
  div[contenteditable]:focus
    div.passage-act-title.empty-node:first-child::before,
  div[contenteditable]:focus
    div.passage-scene-title.empty-node:first-child::before,
  div[contenteditable]:focus div.passage-verse.empty-node:first-child::before,
  div[contenteditable]:focus
    div.passage-footnotes.empty-node:first-child::before,
  div[contenteditable]:focus div.paragraph.empty-node:first-child::before {
    content: "";
  }
  .ProseMirror .empty-node::before {
    position: absolute;
    color: #aaa;
    cursor: text;
    font-style: italic;
  }
  #editor,
  .editor {
    background: white;
    color: black;
    background-clip: padding-box;
    padding: 5px 0;
  }
  #editor[disabled] .ProseMirror-menubar {
    display: none !important;
  }
  drop-down-editor rich-text .inline-component-button,
  expand-collapse rich-text .inline-component-button,
  flip-reveal rich-text .inline-component-button,
  hint-list rich-text .inline-component-button,
  option-list rich-text .inline-component-button,
  plankton-passage rich-text .inline-component-button {
    pointer-events: none;
    color: lightgray;
  }
  #ProseMirror-icon-collection path {
    fill-rule: evenodd;
  }
`;
