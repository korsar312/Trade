import type { TPresent } from "../";
import { type CSSObject } from "@emotion/react";

const View: TPresent = ({ Model, Style }) => {
	const { children, styleType, pos, extStyle } = Model;

	function css(): CSSObject {
		switch (styleType) {
			case undefined:
			case "row":
				return Style.rowControl(pos);
			case "col":
				return Style.colControl;
		}
	}

	return <div css={[css(), extStyle]}>{children}</div>;
};

export default View;
