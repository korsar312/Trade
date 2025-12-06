import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.fixed};
		background: ${this.getColor("MAIN_1")};
		bottom: -100px;
		right: -100px;
	`;
}

export default new Style();
