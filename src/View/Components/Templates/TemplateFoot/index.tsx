import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/4.Structures/StructuresWrapPaper";
import { BasePage } from "../../../../Logic/Config/List/Routes.ts";
import type { RouterInterface } from "../../../../Logic/Core/Services/ServiceRouter/Router.interface.ts";
import type { TImageComponent } from "../../0.Cores/Image";
import type { TSubstanceRowControlCompType } from "../../3.Substances/SubstanceRowControl";
import { Act } from "../../../../Logic/Core";

export interface IComponent {}

type TBtn = { base: keyof typeof BasePage; path: RouterInterface.EPath; image: TImageComponent };
//type TRowUnId = Pick<TSubstanceRowControlCompType, "id">;

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const btnPath: TBtn[] = [
		{
			base: "TRADE",
			path: "GOODS",
			image: "Store",
		},
		{
			base: "PROFILE",
			path: "PROFILE",
			image: "Person",
		},
		{
			base: "ORDER",
			path: "ORDER",
			image: "CheckList",
		},
		{
			base: "INFO",
			path: "INFO",
			image: "Info",
		},
	];

	const space: TSubstanceRowControlCompType = { type: "SPACING", options: {}, id: "1" };

	const btnNorm = adapterBtn(btnPath);

	const propsComponent: IProp = {
		innerStruct: {
			type: "ROW_CONTROL",
			options: {
				compRow: addSpacing(btnNorm),
			},
		},
		wrapProp: {
			color: "MAIN_2",
		},
	};

	function goPage(page: RouterInterface.EPath) {
		Act.Router.goTo(page);
	}

	function adapterBtn(btn: TBtn[]): TSubstanceRowControlCompType[] {
		return btn.map((el) => ({ id: "1", type: "BTN_IMAGE", options: { icon: el.image, isBig: true, click: () => goPage(el.path) } }));
	}

	function addSpacing(items: TSubstanceRowControlCompType[]): TSubstanceRowControlCompType[] {
		const unId: TSubstanceRowControlCompType[] = items.flatMap((item) => [space, item]).concat(space);

		return unId.map((el, i) => ({ ...el, id: String(i) }));
	}

	return <Substance {...propsComponent} />;
};

export default Index;
