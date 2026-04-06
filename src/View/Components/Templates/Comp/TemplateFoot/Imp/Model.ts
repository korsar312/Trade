import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import type { TComponent as IControl, TMoleculeRowControlCompType } from "../../../../2.Molecules/MoleculeRowControl";
import type { RouterInterface } from "../../../../../../Logic/Domain/Services/ServiceRouter/Router.interface.ts";
import type { TImageComponent } from "../../../../0.Cores/Image";

const Btn = {
	LOT: "LOT",
	CATALOG: "CATALOG",
	INFO: "CATALOG",
	DEAL: "CATALOG",
	PROFILE: "CATALOG",
} as const;

type EBtn = keyof typeof Btn;

type TBtn = { path: RouterInterface.EPath; image: TImageComponent };
type TBtnMap = Record<EBtn, TBtn>;

const includesPath: Record<RouterInterface.EPath, EBtn> = {
	LISTING_LIST: "LOT",
	LISTING: "LOT",
	ITEM_LIST: "CATALOG",
	ITEM: "CATALOG",
	CREATE_LISTING: "CATALOG",
	PROFILE: "PROFILE",
	USER: "PROFILE",
	DEAL_LIST: "DEAL",
	DEAL: "DEAL",
	INFO: "INFO",
	ERROR: "INFO",
};

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const curPage = Act.Router.getCurPage();

	const btnPath: TBtnMap = {
		CATALOG: { path: "ITEM_LIST", image: "Store" },
		PROFILE: { path: "PROFILE", image: "Person" },
		DEAL: { path: "DEAL", image: "CheckList" },
		LOT: { path: "LISTING_LIST", image: "Edit" },
		INFO: { path: "INFO", image: "Info" },
	};

	const rowProps: IControl = {
		compRow: adapterBtn(btnPath),
	};

	function goPage(page: RouterInterface.EPath) {
		Act.Router.goTo(page);
	}

	function adapterBtn(btn: TBtnMap): TMoleculeRowControlCompType[] {
		return Object.entries(btn).map(
			([key, value], i) =>
				({
					type: "BTN_IMAGE",
					id: String(i),
					options: {
						colorIcon: isActive(key as EBtn) ? "BLUE_2" : "",
						icon: value.image,
						isBig: true,
						click: () => goPage(value.path),
						isFullWidth: true,
					},
				}) as TMoleculeRowControlCompType,
		);
	}

	function isActive(group: EBtn) {
		return includesPath[curPage] === group;
	}

	return { rowProps };
}

export default Model;
