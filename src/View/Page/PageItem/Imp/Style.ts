import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexCol};
		gap: 12px;
		height: 100%;
	`;

	public detailWrap: CSSObject = css`
		flex: 1;
		overflow: hidden;
	`;

	public btnWrap: CSSObject = css`
		${this.mixins.flexCenter};
		gap: 12px;
	`;
}

export default new Style();
