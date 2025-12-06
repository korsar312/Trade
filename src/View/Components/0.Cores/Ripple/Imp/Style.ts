import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject, keyframes } from "@emotion/react";

class Style extends Styles {
	private rippleKF = keyframes`
  		to { transform: scale(1); opacity: 0; }
	`;

	public wrapper: CSSObject = css`
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		pointer-events: none;
		border-radius: inherit;
	`;

	public rippleStyle: CSSObject = css`
		position: absolute;
		background: ${this.getColor("MAIN_1", 0.2)};
		border-radius: 50%;
		transform: scale(0);
		pointer-events: none;
		animation: ${this.rippleKF} 600ms ease-out forwards;
	`;

	public rippleParam(x: number, y: number, w: number, h: number) {
		return { left: x, top: y, width: w, height: h };
	}
}

export default new Style();
