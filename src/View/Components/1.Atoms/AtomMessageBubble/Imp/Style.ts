import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { TAtomMessageBubbleType } from "../index.tsx";
import type { StyleInterface } from "../../../../../Logic/Domain/Services/ServiceStyle/Style.interface.ts";

class Style extends Styles {
	private tail = 5;

	private tailDraw(side: "left" | "right", color: string): CSSObject {
		return css`
			content: "";
			position: absolute;
			border-left: ${this.tail * 2}px solid transparent;
			border-right: ${this.tail * 2}px solid transparent;
			border-bottom: 16px solid ${color};
			bottom: 0;
			z-index: -1;
			${side}: -${this.tail}px;
		`;
	}

	public wrapper(type?: TAtomMessageBubbleType, color?: StyleInterface.EColor): CSSObject {
		const radPx = `${this.variables.radiusStandard}px`;
		const colorChoice = this.getColor(color || "BLUE_2");

		const side = (() => {
			switch (type) {
				case "send":
					return `right`;
				default:
					return `left`;
			}
		})();

		return css`
			box-sizing: border-box;
			align-items: flex-start;
			position: relative;
			background: ${colorChoice};
			border-radius: ${radPx};
			border-bottom-${side}-radius: 0;
			padding: ${this.size(3)} ${this.size(3)};
			margin-${side}: ${this.tail}px;
			z-index: 1;

			&::before {
           		${this.tailDraw(side, colorChoice)};
			}
		`;
	}

	public time: CSSObject = css`
		margin-top: ${this.size(2)};
		text-align: right;
	`;
}

export default new Style();
