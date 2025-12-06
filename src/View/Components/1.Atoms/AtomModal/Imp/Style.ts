import Styles from "../../../../../Styles/Styles.ts";
import { css, keyframes } from "@emotion/react";

class Style extends Styles {
	private anim(isOpen: boolean) {
		return keyframes`
		from {opacity: ${+!isOpen}}
		to {opacity: ${+isOpen}}
    `;
	}

	private openAnim = css`
		animation: ${this.anim(true)} ${this.variables.timeFastTransition} forwards;
	`;

	private closeAnim = css`
		animation: ${this.anim(false)} ${this.variables.timeFastTransition} forwards;
	`;

	public wrapper = css`
		overflow: visible;
		background: none;
		border: none;
		outline: none;
		padding: 0;
		transition:
			display 1s,
			overlay 1s;
		transition-behavior: allow-discrete;

		&[open] {
			${this.openAnim}
		}

		&:not([open]) {
			${this.closeAnim}
		}

		&[open]::backdrop {
			${this.openAnim}
		}

		&:not([open])::backdrop {
			${this.closeAnim}
		}

		&::backdrop {
			background: ${this.getColor("MAIN_2", 0.7)};
		}
	`;
}

export default new Style();
