import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	`;
}

export default new Style();
