import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { StyleInterface } from "../../../../../Logic/Domain/Services/ServiceStyle/Style.interface.ts";

class Style extends Styles {
	public wrapper(color?: StyleInterface.TColorChoice): CSSObject {
		return css`
			overflow: hidden;
			padding: ${this.variables.padStandard}px;
			border-radius: ${this.variables.radiusStandard}px;
			background: ${this.getColor(color || "MAIN_2")};
			transition: ${this.variables.fastTransition};
			box-sizing: border-box;

			& *::-webkit-scrollbar-track {
				margin-bottom: ${this.variables.radiusStandard};
				margin-top: ${this.variables.radiusStandard};
				margin-left: ${this.variables.radiusStandard - this.variables.scrollSize};
				margin-right: ${this.variables.radiusStandard - this.variables.scrollSize * 2};
			}
		`;
	}

	public full: CSSObject = css`
		height: "100%";
	`;
}

export default new Style();
