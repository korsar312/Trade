import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexCenter};
		gap: ${this.variables.padStandard}px;
	`;
}

export default new Style();
