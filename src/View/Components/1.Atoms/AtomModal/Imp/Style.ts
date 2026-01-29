import Styles from "../../../../../Styles/Styles.ts";
import { css } from "@emotion/react";

class Style extends Styles {
	public wrapper = css`
		${this.mixins.fixed};
		background: ${this.getColor("MAIN_2", 0.7)};
	`;

	public content = css`
		max-width: 100%;
	`;
}

export default new Style();
