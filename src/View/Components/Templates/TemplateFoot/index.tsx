import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/4.Structures/StructuresWrapPaper";
import type { RouterInterface } from "../../../../Logic/Core/Services/ServiceRouter/Router.interface.ts";
import type { TImageComponent } from "../../0.Cores/Image";
import type { TSubstanceRowControlCompType } from "../../3.Substances/SubstanceRowControl";
import { Act } from "../../../../Logic/Core";

export interface IComponent {}

const Btn = {
	CATALOG: "CATALOG",
	INFO: "CATALOG",
	ORDER: "CATALOG",
	PROFILE: "CATALOG",
} as const;

type EBtn = keyof typeof Btn;

type TBtn = { path: RouterInterface.EPath; image: TImageComponent };
type TBtnMap = Record<EBtn, TBtn>;
type TRowUnId = Omit<TSubstanceRowControlCompType, "id">;

const includesPath: Record<RouterInterface.EPath, EBtn> = {
	GOODS: "CATALOG",
	ITEM: "CATALOG",
	PROFILE: "PROFILE",
	USER: "PROFILE",
	ORDER_LIST: "ORDER",
	ORDER: "ORDER",
	INFO: "INFO",
	ERROR: "INFO",
};

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const curPage = Act.Router.getCurPage();

	const btnPath: TBtnMap = {
		CATALOG: { path: "GOODS", image: "Store" },
		PROFILE: { path: "PROFILE", image: "Person" },
		ORDER: { path: "ORDER", image: "CheckList" },
		INFO: { path: "INFO", image: "Info" },
	};

	const space: TRowUnId = { type: "SPACING", options: {} };
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

	function adapterBtn(btn: TBtnMap): TRowUnId[] {
		return Object.entries(btn).map(([key, value]) => ({
			type: "BTN_IMAGE",
			options: { colorIcon: isActive(key as EBtn) ? "BLUE_2" : "", icon: value.image, isBig: true, click: () => goPage(value.path) },
		}));
	}

	function addSpacing(items: TRowUnId[]): TSubstanceRowControlCompType[] {
		const unId: TRowUnId[] = items.flatMap((item) => [space, item]).concat(space);

		return unId.map((el, i) => ({ ...el, id: String(i) }) as TSubstanceRowControlCompType);
	}

	function isActive(group: EBtn) {
		return includesPath[curPage] === group;
	}

	return <Substance {...propsComponent} />;
};

export default Index;
