import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.absolute};
		width: ${this.variables.pageWidth}px;
		left: 50%;
		transform: translateX(-50%);
	`;

	public modalGlobal: CSSObject = css`
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: ${this.variables.pageWidth}px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	`;
}

export default new Style();
