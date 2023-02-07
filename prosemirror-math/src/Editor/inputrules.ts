import { NodeType } from "prosemirror-model";
import { InputRule } from "prosemirror-inputrules";

export function makeEnvironmentInputRule(
  pattern: RegExp,
  nodeType: NodeType,
  getAttrs?: (match: string[]) => any
) {
  return new InputRule(/(|>\s+$)/, (state, match, start, end) => {
    let $start = state.doc.resolve(start);
    let index = $start.index();
    let $end = state.doc.resolve(end);
    // get attrs
    let attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
    // check if replacement valid
    if (!$start.parent.canReplaceWith(index, $end.index(), nodeType)) {
      return null;
    }
    // perform replacement
    return state.tr.replaceRangeWith(
      start,
      end,
      nodeType.create(attrs, nodeType.schema.text(match[1]))
    );
  });
}
