import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		display: flex;
		align-items: center;
		padding: ${this.size(3)};
		border-radius: 12px;
		box-shadow: 0 0 17px -8px ${this.getColor("MAIN_2")};
	`;

	public text: CSSObject = css`
		${this.mixins.flexGorCenter};
		flex: 3;
	`;

	public btn: CSSObject = css`
		${this.mixins.flexGorCenter};
		flex: 1;
	`;
}

export default new Style();
