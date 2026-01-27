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
import type { EAtomButtonColor } from "../../1.Atoms/AtomButton";

export interface IComponent {}

const keyStorageSort = "CARD_SORT_NAME" satisfies SettingInterface.ENameStorage;
const keyStorageFilter = "CARD_FILTER_NAME" satisfies SettingInterface.ENameStorage;

const initSort: PublicInterface.ESort = "TO_UPPER";
const initFilter: PublicInterface.TFilterCard = { name: null, bank: [], priseUp: null, priseDown: null, rating: null };

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const catalog = Act.Catalogue.getGoodsIdList();

	const [sort, setSort] = useState<PublicInterface.ESort>(getSortData());
	const [filters, setFilters] = useState<PublicInterface.TFilterCard>(getFilterData());

	const isBankFill = Boolean(filters.bank?.length);

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
			options: { color: "MAIN_3", icon: "Sort", click: openFilterSort },
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
			options: { color: "BLUE_1", icon: "PlusSquare", click: openListingAdd },
		},
		{
			id: "2",
			type: "BTN_IMAGE",
			options: { color: "MAIN_3", icon: "Clear", click: clearFilter },
		},
		{
			id: "3",
			type: "BTN_MAIN",
			options: { color: colorFillFilter("bank"), text: "BANK", rightImage: "ArrowDown", click: openFilterBank },
		},
		{
			id: "4",
			type: "BTN_MAIN",
			options: { color: colorFillFilter("priseDown"), text: "PRISE_DOWN", rightImage: "ArrowDown", click: openFilterPrice(false) },
		},
		{
			id: "5",
			type: "BTN_MAIN",
			options: { color: colorFillFilter("priseUp"), text: "PRISE_UP", rightImage: "ArrowDown", click: openFilterPrice(true) },
		},
		{
			id: "6",
			type: "BTN_MAIN",
			options: { color: colorFillFilter("rating"), text: "RATING", rightImage: "ArrowDown", click: openFilterRating },
		},
	];

	useDidUpdate(() => {
		Act.Setting.setStorage(keyStorageSort, sort);
	}, [sort]);

	useDidUpdate(() => {
		Act.Setting.setStorage(keyStorageFilter, filters);
	}, [filters]);

	useEffect(() => {
		Act.Catalogue.requestGoods({
			limit: 10,
			sort,
			type: "CARD",
			saleKind: "GOODS",
			findStr: filters.name || undefined,
			priceUp: filters.priseUp || undefined,
			priceDown: filters.priseDown || undefined,
			info: {
				bank: isBankFill ? filters.bank : undefined,
			},
		});
	}, [sort, filters]);

	function colorFillFilter(field: keyof PublicInterface.TFilterCard): EAtomButtonColor {
		let isError: boolean = false;

		switch (field) {
			case "bank": {
				const item = filters[field];
				return item && item.length ? "BLUE_2" : "MAIN_3";
			}

			default: {
				const item = filters[field];
				item == null && (isError = true);
			}
		}

		return isError ? "MAIN_3" : "BLUE_2";
	}

	// ======================= MODALS =======================

	function openFilterSort() {
		const modalId = Act.App.addModals("SORT", (val) => setTimeout(() => setSortVal(modalId, val)));
	}

	function openFilterBank() {
		const modalId = Act.App.addModals("BANK", (val) => setTimeout(() => setFilterBank(modalId, val)));
	}

	function openFilterRating() {
		const modalId = Act.App.addModals("RATING", (val) => setTimeout(() => setFilterRating(modalId, val)));
	}

	function openFilterPrice(isUp: boolean) {
		return () => {
			const modalId = Act.App.addModals("PRICE", (val) => setTimeout(() => setFilterPrice(modalId, isUp, val)));
		};
	}

	function openListingAdd() {
		const modalId = Act.App.addModals("TYPE_ITEM", (val) => setTimeout(() => goCreateListing(modalId, val)));
	}

	// ======================= SETTERS =======================

	function setSortVal(id: string, sort: PublicInterface.ESort) {
		setSort(sort);
		Act.App.removeModals(id);
	}

	function textFilter(value: string) {
		setFilterHandle("name", value);
	}

	function setFilterBank(id: string, bank: CatalogueInterface.EBank[]) {
		setFilterHandle("bank", bank);
		Act.App.removeModals(id);
	}

	function setFilterRating(id: string, rating: PublicInterface.TRating | null) {
		setFilterHandle("rating", rating);
		Act.App.removeModals(id);
	}

	function setFilterPrice(id: string, isUp: boolean, price: number | null) {
		setFilterHandle(isUp ? "priseUp" : "priseDown", price);
		Act.App.removeModals(id);
	}

	function setFilterHandle<T extends keyof PublicInterface.TFilterCard>(field: T, value: PublicInterface.TFilterCard[T]) {
		setFilters((old) => ({ ...old, [field]: value }));
	}

	// ======================= GETTER FILTER/SORT =======================

	function getSortData() {
		return Act.Setting.getStorage(keyStorageSort) || initSort;
	}

	function getFilterData() {
		return Act.Setting.getStorage(keyStorageFilter) || initFilter;
	}

	// ======================= GETTER ITEM =======================

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

	// ======================= OTHERS =======================

	function goCreateListing(id: string, type: CatalogueInterface.ETypeItem) {
		Act.Router.goTo("CREATE_LISTING", { type });
		Act.App.removeModals(id);
	}

	function clearFilter() {
		setFilters(initFilter);
	}

	function goItemDetail(id: string) {
		Act.Router.goTo("ITEM", { id, type: getType(id) || "CARD" });
	}

	const propsComponent: IProp = {
		itemList: catalog.map((el) => ({
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

	return <Substance {...propsComponent} />;
};

export default observer(Index);
