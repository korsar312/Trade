import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		display: flex;
		gap: 12px;
		background: ${this.getColor("MAIN_3")};
		border-radius: ${this.variables.radiusStandard / 1.5}px;
		width: 100%;
	`;
}

export default new Style();
