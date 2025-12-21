import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject, keyframes } from "@emotion/react";

class Style extends Styles {
	private shimmer = keyframes`
		0%   { transform: translateX(-120%); }
		100% { transform: translateX(120%); }
	`;

	public wrapper: CSSObject = css`
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 18px;
		border-radius: 6px;
		background: ${this.getColor("SECOND_1", 0.1)};

		&::after {
			content: "";
			position: absolute;
			inset: 0;

			background: linear-gradient(
				90deg,
				transparent 0%,
				${this.getColor("SECOND_1", 0.2)} 30%,
				${this.getColor("SECOND_1", 0.8)} 50%,
				${this.getColor("SECOND_1", 0.1)} 70%,
				transparent 100%
			);

			transform: translateX(-120%);
			animation: ${this.shimmer} 1.2s ease-in-out infinite;
			pointer-events: none;
		}
	`;
}

export default new Style();
