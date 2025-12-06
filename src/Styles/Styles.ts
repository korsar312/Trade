import Mixins from "./Mixins/Mixins";
import Variables from "./Variables/Variables";
import StyleP from "./StyleP/StyleP";
import type { StyleInterface } from "../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import { Act } from "../Logic/Core";
import "./Normalize.css";
import "../Assets/Fonts/Fonts.css";

export class Styles {
	public pub = StyleP;

	protected mixins = Mixins;
	protected variables = Variables;

	protected getColor(color?: StyleInterface.TColorChoice, opacity?: number) {
		return Act.Style.getColor(color, opacity);
	}

	protected getFont(font: StyleInterface.EFont) {
		return Act.Style.getFont(font);
	}

	protected size(num: number) {
		return Act.Style.getSize(num);
	}
}

export default Styles;
