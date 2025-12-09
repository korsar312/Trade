import Styles from "../../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper(isBig?: boolean): CSSObject {
		return css`
			padding: ${isBig ? 5 : 10}px;
			border-radius: 12px;
		`;
	}
}

export default new Style();
