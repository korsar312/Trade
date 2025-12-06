import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		gap: ${this.size(2)};
	`;
}

export default new Style();
