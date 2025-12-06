import Styles from "../../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		border-radius: 32px;
		width: 52px;
		height: 28px;
		background: ${this.getColor()};
		border: 2px solid ${this.getColor("MAIN_2")};
		padding: 4px;
		justify-content: flex-start;

		&:checked {
			justify-content: flex-end;
			background: ${this.getColor("BLUE_2")};
		}

		&::after,
		&:checked::after {
			content: "";
			width: 20px;
			height: 20px;
			background: ${this.getColor("RED_1")};
			border-radius: 50%;
		}

		&:checked::after {
			background: ${this.getColor("MAIN_2")};
		}

		&[disabled],
		&[disabled]:checked::after {
			background: ${this.getColor("SECOND_1")};
		}

		&[disabled]:checked::after {
			background: ${this.getColor("SECOND_1")};
		}
	`;
}

export default new Style();
