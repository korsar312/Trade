import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		border-radius: ${this.variables.radiusStandard}px;
		${this.mixins.noScrollBar};
		height: 100%;
	`;
}

export default new Style();
