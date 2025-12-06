import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		padding: 0;
	`;

	public imageWrap: CSSObject = css`
		${this.mixins.flexCenter};
		padding: 0;
	`;

	public image: CSSObject = css`
		object-fit: cover;
	`;

	public body: CSSObject = css``;

	public textWrap: CSSObject = css`
		padding: ${this.variables.radiusStandard / 2}px;
	`;

	public btnWrap: CSSObject = css`
		padding: 0 ${this.variables.radiusStandard / 2}px ${this.variables.radiusStandard / 2}px ${this.variables.radiusStandard / 2}px;
	`;
}

export default new Style();
