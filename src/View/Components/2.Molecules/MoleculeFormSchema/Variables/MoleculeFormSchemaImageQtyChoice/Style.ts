import Styles from "../../../../../../Styles/Styles.ts";
import { css } from "@emotion/react";

class Style extends Styles {
	public wrapper = css`
		${this.mixins.flexCol};
		padding: ${this.size(4)};
		gap: ${this.size(5)};
	`;

	public content = css`
		${this.mixins.flexGorCenter};
	`;

	public row = css`
		${this.mixins.flexCenter};
		gap: ${this.size(3)};
	`;

	public hidden = css`
		display: none;
	`;
}

export default new Style();
