import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

class Style extends Styles {
	private enableColor: StyleInterface.EColor = "SECOND_1";
	private disableColor: StyleInterface.EColor = "MAIN_2";

	public wrapper: CSSObject = css`
		position: relative;
		appearance: none;
		width: 24px;
		height: 24px;
		border: 2px solid ${this.getColor(this.enableColor)};
		${this.mixins.flexCenter};

		&:checked::after {
			content: "";
			width: 12px;
			height: 12px;
			background: ${this.getColor(this.enableColor)};
			border-radius: 50%;
		}

		&[disabled] {
			border: 2px solid ${this.getColor(this.disableColor)};
		}

		&[disabled]:checked::after {
			background: ${this.getColor(this.disableColor)};
		}
	`;
}

export default new Style();
