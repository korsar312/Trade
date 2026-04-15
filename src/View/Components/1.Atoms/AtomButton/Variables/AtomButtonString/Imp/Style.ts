import Styles from "../../../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		padding: 0;
		border: 0;
	`;
}

export default new Style();
