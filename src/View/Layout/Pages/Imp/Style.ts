import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		display: flex;
		flex-direction: column;
		gap: ${this.size(4)};
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: ${this.size(5)};
		box-sizing: border-box;
	`;
}

export default new Style();
