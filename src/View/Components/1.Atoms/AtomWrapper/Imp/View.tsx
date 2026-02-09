import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import { type CSSObject } from "@emotion/react";

const View: NFC<typeof Model> = (props) => {
	const { children, styleType } = props;

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
