import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexCol}
		box-sizing: border-box;
		gap: 8px;
		width: 160px;
		height: 256px;
	`;

	public image: CSSObject = css`
		overflow: hidden;
		border-radius: 14px;
		height: 130px;
	`;

	public body: CSSObject = css`
		${this.mixins.flexCol};
		align-items: flex-start;
		justify-content: space-between;
		overflow: auto;
		flex: 1;
		padding: 0 ${this.size(3)};
	`;

	public name: CSSObject = css`
		overflow: auto;
		max-height: 40px;
	`;

	public count: CSSObject = css``;
}

export default new Style();
