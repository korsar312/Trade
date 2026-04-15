import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { TAtomMessageBubbleType } from "../index.tsx";
import type { StyleInterface } from "../../../../../Logic/Domain/Services/ServiceStyle/Style.interface.ts";

class Style extends Styles {
	private tail = 5;

	public wrapper(type?: TAtomMessageBubbleType, color?: StyleInterface.EColor): CSSObject {
		const radPx = `${this.variables.radiusStandard}px`;

		const side = (() => {
			switch (type) {
				case "send":
					return `left`;

				case "receive":
				default:
					return `right`;
			}
		})();

		return css`
			position: relative;
			background: ${this.getColor(color || "BLUE_2")};
			border-radius: ${radPx};
			border-bottom-${side}-radius: 0;
			padding: ${this.size(2)} ${this.size(3)};
			margin-${side}: ${this.tail}px;
			z-index: 1;

			&::before {
				content: "";
				position: absolute;
				border-left: ${this.tail * 2}px solid transparent;
				border-right: ${this.tail * 2}px solid transparent;
				border-bottom: 16px solid ${this.getColor("BLUE_2")};
				bottom: 0;
				${side}: -${this.tail}px;
				z-index: -1;
			}
		`;
	}
}

export default new Style();
