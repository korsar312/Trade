import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

class Style extends Styles {
	public wrapper(isVert?: boolean): CSSObject {
		return css`
			${isVert ? "width" : "height"}: 0px;
			${isVert ? "height" : "width"}: auto;
			align-self: stretch;
		`;
	}

	public color(color?: StyleInterface.TColorChoice): CSSObject {
		return css`
			border: 1px solid ${this.getColor(color || "MAIN_2")};
		`;
	}
}

export default new Style();
