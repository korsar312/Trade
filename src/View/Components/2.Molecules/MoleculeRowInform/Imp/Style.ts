import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexVerCenter};
		justify-content: space-between;
		box-sizing: border-box;
		padding: 8px 16px;
		border: 1px solid ${this.getColor("SECOND_1")};
		border-radius: ${this.size(3)};
		height: auto;
		gap: ${this.size(2)};
	`;

	public field: CSSObject = css`
		${this.mixins.flexCenter};
		gap: ${this.size(2)};
	`;
}

export default new Style();
