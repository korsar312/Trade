import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		display: flex;
		flex-direction: column;
		gap: ${this.size(4)};
		overflow-y: visible;
		width: 100%;
		flex: 1;
		min-height: 0;
	`;

	public category: CSSObject = css`
		${this.mixins.marPadGor(5)};
		${this.mixins.noScrollBar};
		display: flex;
		gap: ${this.size(3)};
		overflow: auto;
	`;

	public cards: CSSObject = css`
		padding-top: ${this.size(2)};
		margin-bottom: -${this.size(5)};
		padding-bottom: ${this.size(5)};
		${this.mixins.marPadGor(5)};
		${this.mixins.noScrollBar};
		${this.mixins.flexCenter};
		justify-content: space-between;
		gap: ${this.size(4)};
		flex-wrap: wrap;
		overflow: auto;
		flex: 1;
	`;
}

export default new Style();
