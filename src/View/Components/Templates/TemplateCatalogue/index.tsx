import { type FC, useState } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/4.Structures/StructuresCatalog";
import { Act } from "../../../../Logic/Core";
import Util from "../../../../Logic/Libs/Util";
import type { TMoleculeRowControlCompType } from "../../2.Molecules/MoleculeRowControl";
import type { CatalogueInterface } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import { observer } from "mobx-react";

export interface IComponent {}

type TFilter = {
	name: string | null;
	bank: CatalogueInterface.EBank | null;
	priseUp: number | null;
	priseDown: number | null;
};

const initFilter: TFilter = {
	name: null,
	bank: null,
	priseUp: null,
	priseDown: null,
};

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const catalog = Act.Catalogue.getGoodsIdList();

	const [filters, setFilters] = useState<TFilter>(initFilter);

	const isEmptyFilter = Object.values(filters).every((el) => el === null);
	const catalogRender = isEmptyFilter ? catalog : catalog.filter(filterFn);
	const filterName = filters.name ?? "";

	const topRow: TMoleculeRowControlCompType[] = [
		{ id: "1", type: "INPUT", options: { iconsLeft: "Search", placeholder: "SEARCHING", value: filterName, onChange: textFilter } },
		{ id: "2", type: "BTN_IMAGE", options: { color: "MAIN_3", icon: "Sort" } },
		{ id: "3", type: "BTN_IMAGE", options: { color: "MAIN_3", icon: "Refresh" } },
	];

	const botRow: TMoleculeRowControlCompType[] = [
		{ id: "1", type: "BTN_IMAGE", options: { color: "BLUE_1", icon: "PlusSquare" } },
		{ id: "2", type: "BTN_IMAGE", options: { color: "MAIN_3", icon: "Clear", click: clearFilter } },
		{ id: "3", type: "BTN_MAIN", options: { color: "MAIN_3", text: "BANK", rightImage: "ArrowDown" } },
		{ id: "4", type: "BTN_MAIN", options: { color: "MAIN_3", text: "PRISE_DOWN", rightImage: "ArrowDown" } },
		{ id: "5", type: "BTN_MAIN", options: { color: "MAIN_3", text: "PRISE_UP", rightImage: "ArrowDown" } },
		{ id: "6", type: "BTN_MAIN", options: { color: "MAIN_3", text: "RATING", rightImage: "ArrowDown" } },
	];

	const propsComponent: IProp = {
		itemList: catalogRender.map((el) => ({
			btn: [{ text: getFormatPrice(el), isFullWidth: true, color: "BLUE_2", click: () => "" }],
			click: () => goItemDetail(el),
			image: getImage(el),
			name: getName(el),
			id: el,
		})),
		filterList: [
			{ compRow: topRow, id: "1" },
			{ compRow: botRow, id: "2" },
		],
	};

	function filterFn(itemId: string): boolean {
		if (filters.name !== null && !getName(itemId)?.toLowerCase().includes(filters.name.toLowerCase())) return false;
		if (filters.bank !== null && getBank(itemId) !== filters.bank) return false;
		if (filters.priseUp !== null && Number(getPrice(itemId)) > filters.priseUp) return false;
		if (filters.priseDown !== null && Number(getPrice(itemId)) < filters.priseDown) return false;

		return true;
	}

	function getName(id: string) {
		return Act.Catalogue.getName(id);
	}

	function getPrice(id: string) {
		return Act.Catalogue.getPrice(id);
	}

	function getBank(id: string) {
		return Act.Catalogue.getBank(id);
	}

	function getFormatPrice(id: string) {
		return Util.toMoney(getPrice(id));
	}

	function getImage(id: string) {
		return Act.Catalogue.getImage(id);
	}

	function clearFilter() {
		setFilters(initFilter);
	}

	function newFilter<K extends keyof TFilter>(field: K, value: TFilter[K]) {
		setFilters((old) => ({ ...old, [field]: value }));
	}

	function textFilter(value: string) {
		newFilter("name", value);
	}

	function goItemDetail(id: string) {
		Act.Router.goTo("ITEM", { id });
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
