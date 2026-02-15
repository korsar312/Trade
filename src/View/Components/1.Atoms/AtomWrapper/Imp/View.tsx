import type { TPresent } from "../";
import { type CSSObject } from "@emotion/react";

const View: TPresent = ({ Model, Style }) => {
	const { children, styleType } = Model;

	function css(): CSSObject {
		switch (styleType) {
			case "row":
				return Style.rowControl;
			case "col":
				return Style.colControl;
		}
	}

	return <div css={css()}>{children}</div>;
};

export default View;
