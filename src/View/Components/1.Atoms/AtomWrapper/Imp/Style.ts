import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public colControl: CSSObject = css`
		${this.mixins.flexCol};
		gap: 12px;
	`;

	public rowControl: CSSObject = css`
		${this.mixins.flexCenter};
		justify-content: flex-start;
		gap: ${this.variables.padStandard}px;
		width: 100%;
	`;
}

export default new Style();
