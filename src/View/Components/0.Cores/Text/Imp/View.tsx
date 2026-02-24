import type { TPresent } from "../";
import Util from "../../../../../Logic/Libs/Util/index.ts";
import type { CSSObject } from "@emotion/react";
import type { JSX } from "react";

const View: TPresent = ({ Model, Style }) => {
	const { textFind, color, extStyle, font, opacity, pos, label, isBreakLine } = Model;

	const styles: CSSObject[] = [Style.wrapper, Style.param(pos, font, color, opacity, isBreakLine), ...Util.getArray(extStyle)];
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

	return (
		<Tag css={styles} {...label}>
			{text()}
		</Tag>
	);
};

export default View;
