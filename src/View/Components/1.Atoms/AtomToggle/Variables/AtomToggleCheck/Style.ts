import Styles from "../../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		border-radius: ${this.size(2)};

		&:checked::after {
			width: 16px;
			height: 16px;
			border-radius: ${this.size(2)};
		}
	`;
}

export default new Style();
