import {
  mathPlugin,
  mathBackspaceCmd,
  insertMathCmd,
} from "@benrbray/prosemirror-math";
import { inputRules } from "prosemirror-inputrules";
import { keymap } from "prosemirror-keymap";
import { history } from "prosemirror-history";
import { mathSchema } from "./schema";
import "@benrbray/prosemirror-math/style/math.css";

import {
  makeBlockMathInputRule,
  makeInlineMathInputRule,
  REGEX_INLINE_MATH_DOLLARS,
  REGEX_BLOCK_MATH_DOLLARS,
} from "@benrbray/prosemirror-math";
import {
  chainCommands,
  newlineInCode,
  createParagraphNear,
  liftEmptyBlock,
  splitBlock,
  deleteSelection,
  joinForward,
  selectNodeForward,
  selectNodeBackward,
  joinBackward,
} from "prosemirror-commands";

let inlineMathInputRule = makeInlineMathInputRule(
  REGEX_INLINE_MATH_DOLLARS,
  mathSchema.nodes.math_inline
);
let blockMathInputRule = makeBlockMathInputRule(
  REGEX_BLOCK_MATH_DOLLARS,
  mathSchema.nodes.math_display
);
export const plugins = [
  mathPlugin,
  inputRules({ rules: [inlineMathInputRule, blockMathInputRule] }),
  keymap({
    "Mod-Space": insertMathCmd(mathSchema.nodes.math_inline),
    Backspace: chainCommands(
      deleteSelection,
      mathBackspaceCmd,
      joinBackward,
      selectNodeBackward
    ),
    // below is the default keymap
    Enter: chainCommands(
      newlineInCode,
      createParagraphNear,
      liftEmptyBlock,
      splitBlock
    ),
    "Ctrl-Enter": chainCommands(newlineInCode, createParagraphNear, splitBlock),
    Delete: chainCommands(deleteSelection, joinForward, selectNodeForward),
  }),
  //dropCursor(),
  //gapCursor(),
  history(),
  //new HyperlinkPlugin(
  //  schema.marks.link,
  //  this.configureToolbar.bind(this)
  //),
];
