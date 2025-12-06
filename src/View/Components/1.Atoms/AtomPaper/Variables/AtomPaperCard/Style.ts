import Styles from "../../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		padding: ${this.size(2)};
		box-shadow: 0 0 14px -8px ${this.getColor("SECOND_1")};
		border-radius: ${this.size(4)};
	`;
}

export default new Style();
