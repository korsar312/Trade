import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexCol};
		gap: ${this.variables.padStandard}px;
		height: 100%;
	`;

	public content: CSSObject = css`
		position: relative;
		overflow: hidden;
		flex: 1;
	`;

	public imageWrap: CSSObject = css`
		min-height: 10vh;
		border-radius: ${this.variables.radiusStandard}px;
		overflow: hidden;
		flex: 1;
	`;

	public detailWrap: CSSObject = css`
		${this.mixins.noScrollBar};
		border-radius: ${this.variables.radiusStandard}px;
	`;

	public chat(isShowChat: boolean): CSSObject {
		return css`
			visibility: ${isShowChat ? "visible" : "hidden"};
			opacity: ${+isShowChat};
			transition: opacity ${this.variables.fastTransition};
			position: absolute;
			top: 0;
			bottom: 0;
			width: 100%;
		`;
	}
}

export default new Style();
