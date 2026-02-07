import Styles from "../../../../../../Styles/Styles.ts";
import { css } from "@emotion/react";

class Style extends Styles {
	public wrapper = css`
		${this.mixins.flexCol};
		gap: ${this.size(3)};
	`;

	public content = css`
		${this.mixins.flexGorCenter};
	`;

	public radioWrap = css`
		${this.mixins.flexCenter};
		gap: ${this.size(4)} ${this.size(6)};
		flex-wrap: wrap;
	`;

	public radio = css`
		${this.mixins.flexVerCenter};
		gap: ${this.size(4)};
	`;

	public hidden = css`
		display: none;
	`;
}

export default new Style();
