import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Util from "../../../../../Logic/Libs/Util/index.ts";
import type { CSSObject } from "@emotion/react";
import type { JSX } from "react";

const View: NFC<typeof Model> = (props) => {
	const { textFind, color, extStyle, font, opacity, pos, label } = props;

	const styles: CSSObject[] = [Style.wrapper, Style.param(pos, font, color, opacity), ...Util.getArray(extStyle)];
	const Tag: keyof JSX.IntrinsicElements = label ? "label" : "span";

	function text() {
		if (Array.isArray(textFind)) {
			return textFind.map((el, i) => (
				<span key={i} css={el.style}>
					{el.text}
				</span>
			));
		}

		return textFind;
	}

	return <Tag css={styles}>{text()}</Tag>;
};

export default View;
