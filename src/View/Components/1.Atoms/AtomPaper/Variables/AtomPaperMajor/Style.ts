import Styles from "../../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		padding: ${this.size(3)};
	`;
}

export default new Style();
