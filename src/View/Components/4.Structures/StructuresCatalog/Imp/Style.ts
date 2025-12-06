import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexCol};
		height: 100%;
		gap: 12px;
	`;

	public header: CSSObject = css`
		${this.mixins.flexCol};
		align-items: flex-start;
		gap: 12px;
	`;

	public btnRow: CSSObject = css`
		${this.mixins.noScrollBar};
		${this.mixins.flexGorCenter};
		justify-content: flex-start;
		overflow: auto;
		width: 100%;
		gap: 12px;
	`;

	public catalogWrap: CSSObject = css`
		${this.mixins.noScrollBar};
		overflow: auto;
		flex: 1;
	`;

	public catalog: CSSObject = css`
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	`;
}

export default new Style();
