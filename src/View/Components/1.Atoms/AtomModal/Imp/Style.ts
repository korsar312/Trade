import Styles from "../../../../../Styles/Styles.ts";
import { css } from "@emotion/react";

class Style extends Styles {
	public wrapper = css`
		${this.mixins.fixed};
		position: fixed;
		width: 100%;
		height: 100%;

		max-width: none;
		max-height: none;

		padding: 0;
		margin: 0;
		outline: none;

		overflow: visible;
		background: none;
		border: none;

		transition:
			display 1s,
			overlay 1s;
		transition-behavior: allow-discrete;
	`;

	public backdrop = css`
		${this.mixins.fixed};
		background: ${this.getColor("MAIN_2", 0.7)};
	`;
}

export default new Style();
