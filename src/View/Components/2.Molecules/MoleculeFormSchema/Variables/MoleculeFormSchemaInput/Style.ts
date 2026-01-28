import Styles from "../../../../../../Styles/Styles.ts";
import { css } from "@emotion/react";

class Style extends Styles {
	public wrapper = css`
		${this.mixins.flexCol};
		gap: ${this.size(5)};
	`;

	public content = css`
		${this.mixins.flexGorCenter};
	`;
}

export default new Style();
