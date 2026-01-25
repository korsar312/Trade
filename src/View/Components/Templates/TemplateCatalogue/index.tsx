import { type FC, useEffect, useState } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/4.Structures/StructuresCatalog";
import { Act } from "../../../../Logic/Core";
import Util from "../../../../Logic/Libs/Util";
import type { TMoleculeRowControlCompType } from "../../2.Molecules/MoleculeRowControl";
import type { CatalogueInterface } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import type { PublicInterface } from "../../../../Logic/Core/Services/Public.interface.ts";
import type { SettingInterface } from "../../../../Logic/Core/Services/ServiceSetting/Setting.interface.ts";
import { observer } from "mobx-react";
import { useDidUpdate } from "../../../../Logic/Libs/Hooks/useDidUpdate/useDidUpdate.ts";

export interface IComponent {}

const keyStorage: SettingInterface.ENameStorage = "CARD_FILTER_NAME";

const initFilter: PublicInterface.TFilterCard = {
	name: null,
	bank: [],
	priseUp: null,
	priseDown: null,
};

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const catalog = Act.Catalogue.getGoodsIdList();

	const [filters, setFilters] = useState<PublicInterface.TFilterCard>(getFilterData());

	const isBankFill = Boolean(filters.bank?.length);

	const catalogRender = catalog.filter(filterFn);
	const filterName = filters.name ?? "";

	const topRow: TMoleculeRowControlCompType[] = [
		{
			id: "1",
			type: "INPUT",
			options: { iconsLeft: "Search", placeholder: "SEARCHING", value: filterName, onChange: textFilter },
		},
		{
			id: "2",
			type: "BTN_IMAGE",
			options: { color: "MAIN_3", icon: "Sort" },
		},
		{
			id: "3",
			type: "BTN_IMAGE",
			options: { color: "MAIN_3", icon: "Refresh" },
		},
	];

	const botRow: TMoleculeRowControlCompType[] = [
		{
			id: "1",
			type: "BTN_IMAGE",
			options: { color: "BLUE_1", icon: "PlusSquare" },
		},
		{
			id: "2",
			type: "BTN_IMAGE",
			options: { color: "MAIN_3", icon: "Clear", click: clearFilter },
		},
		{
			id: "3",
			type: "BTN_MAIN",
			options: { color: isBankFill ? "BLUE_2" : "MAIN_3", text: "BANK", rightImage: "ArrowDown", click: openFilterBank },
		},
		{
			id: "4",
			type: "BTN_MAIN",
			options: { color: "MAIN_3", text: "PRISE_DOWN", rightImage: "ArrowDown" },
		},
		{
			id: "5",
			type: "BTN_MAIN",
			options: { color: "MAIN_3", text: "PRISE_UP", rightImage: "ArrowDown" },
		},
		{
			id: "6",
			type: "BTN_MAIN",
			options: { color: "MAIN_3", text: "RATING", rightImage: "ArrowDown" },
		},
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

	useDidUpdate(() => {
		Act.Setting.setStorage(keyStorage, filters);
	}, [filters]);

	useEffect(() => {
		Act.Catalogue.requestGoods({
			limit: 10,
			type: "CARD",
			saleKind: "GOODS",
			info: {
				bank: isBankFill ? filters.bank : undefined,
			},
		});
	}, [filters]);

	function filterFn(itemId: string): boolean {
		if (filters.name !== null && !getName(itemId)?.toLowerCase().includes(filters.name?.toLowerCase())) return false;
		if (filters.priseUp !== null && Number(getPrice(itemId)) > filters.priseUp) return false;
		if (filters.priseDown !== null && Number(getPrice(itemId)) < filters.priseDown) return false;

		return true;
	}

	function getFilterData() {
		return Act.Setting.getStorage(keyStorage) || initFilter;
	}

	function openFilterBank() {
		const modalId = Act.App.addModals("BANK", (val) => setTimeout(() => setFilterBank(modalId, val)));
	}

	function textFilter(value: string) {
		setFilterHandle("name", value);
	}

	function setFilterBank(id: string, bank: CatalogueInterface.EBank[]) {
		setFilterHandle("bank", bank);
		Act.App.removeModals(id);
	}

	function setFilterHandle<T extends keyof PublicInterface.TFilterCard>(field: T, value: PublicInterface.TFilterCard[T]) {
		setFilters((old) => ({ ...old, [field]: value }));
	}

	function getName(id: string) {
		return Act.Catalogue.getName(id);
	}

	function getType(id: string) {
		return Act.Catalogue.getType(id);
	}

	function getPrice(id: string) {
		return Act.Catalogue.getPrice(id);
	}

	//function getBank(id: string) {
	//	return Act.Catalogue.getBank(id);
	//}

	function getFormatPrice(id: string) {
		return Util.toMoney(getPrice(id));
	}

	function getImage(id: string) {
		return Act.Catalogue.getImage(id);
	}

	function clearFilter() {
		setFilters(initFilter);
	}

	function goItemDetail(id: string) {
		Act.Router.goTo("ITEM", { id, type: getType(id) || "CARD" });
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
