import Styles from "../../../../../../../Styles/Styles.ts";
import { css } from "@emotion/react";

class Style extends Styles {
	public wrapper = css`
		${this.mixins.flexCol};
		gap: ${this.size(4)};
	`;

	public content = css`
		${this.mixins.flexGorCenter};
	`;

	public switch = css`
		${this.mixins.flexVerCenter};
		gap: ${this.size(4)};
	`;
}

export default new Style();
