import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		height: 100%;
	`;

	public titleWrap: CSSObject = css`
		display: flex;
		gap: 12px;
	`;
}

export default new Style();
