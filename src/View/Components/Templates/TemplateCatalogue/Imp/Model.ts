import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IProp } from "../../../4.Structures/StructuresCatalog";
import { useEffect, useState } from "react";
import type { TMoleculeRowControlCompType } from "../../../2.Molecules/MoleculeRowControl";
import { useDidUpdate } from "../../../../../Logic/Libs/Hooks/useDidUpdate/useDidUpdate.ts";
import { PublicInterface } from "../../../../../Logic/Core/Services/Public.interface.ts";
import type { CatalogueInterface } from "../../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import type { EAtomButtonColor } from "../../../1.Atoms/AtomButton";
import Util from "../../../../../Logic/Libs/Util";
import type { SettingInterface } from "../../../../../Logic/Core/Services/ServiceSetting/Setting.interface.ts";

const keyStorageSort = "CARD_SORT_NAME" satisfies SettingInterface.ENameStorage;
const keyStorageFilter = "CARD_FILTER_NAME" satisfies SettingInterface.ENameStorage;

const initSort: PublicInterface.ESort = "TO_UPPER";
const initFilter: PublicInterface.TFilterCard = { name: null, bank: [], priseUp: null, priseDown: null, rating: null };

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const catalog = Act.Catalogue.getGoodsIdList();
	const genId = Util.idGen();

	const [sort, setSort] = useState<PublicInterface.ESort>(getSortData());
	const [filters, setFilters] = useState<PublicInterface.TFilterCard>(getFilterData());

	const isBankFill = Boolean(filters.bank?.length);

	const filterName = filters.name ?? "";

	const topRow: TMoleculeRowControlCompType[] = [
		{
			id: genId(),
			type: "INPUT",
			options: { iconsLeft: "Search", placeholder: "SEARCHING", value: filterName, onChange: textFilter },
		},
		{
			id: genId(),
			type: "BTN_IMAGE",
			options: { color: "MAIN_3", icon: "Sort", click: openFilterSort },
		},
		{
			id: genId(),
			type: "BTN_IMAGE",
			options: { color: "MAIN_3", icon: "Refresh", click: requestGoods },
		},
	];

	const botRow: TMoleculeRowControlCompType[] = [
		{
			id: genId(),
			type: "BTN_IMAGE",
			options: { color: "BLUE_1", icon: "PlusSquare", click: openListingAdd },
		},
		{
			id: genId(),
			type: "BTN_IMAGE",
			options: { color: "MAIN_3", icon: "Clear", click: clearFilter },
		},
		{
			id: genId(),
			type: "BTN_MAIN",
			options: { color: colorFillFilter("bank"), text: "BANK", rightImage: "ArrowDown", click: openFilterBank },
		},
		{
			id: genId(),
			type: "BTN_MAIN",
			options: { color: colorFillFilter("priseDown"), text: "PRISE_DOWN", rightImage: "ArrowDown", click: openFilterPrice(false) },
		},
		{
			id: genId(),
			type: "BTN_MAIN",
			options: { color: colorFillFilter("priseUp"), text: "PRISE_UP", rightImage: "ArrowDown", click: openFilterPrice(true) },
		},
		{
			id: genId(),
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
		requestGoods();
	}, [sort, filters]);

	function requestGoods() {
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
	}

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
		Act.App.addModals("SORT", (val) => setTimeout(() => setSortVal(val)));
	}

	function openFilterBank() {
		Act.App.addModals("BANK_MANY", (val) => setTimeout(() => setFilterBank(val)));
	}

	function openFilterRating() {
		Act.App.addModals("RATING", (val) => setTimeout(() => setFilterRating(val)));
	}

	function openFilterPrice(isUp: boolean) {
		return () => Act.App.addModals("PRICE", (val) => setTimeout(() => setFilterPrice(isUp, val)));
	}

	function openListingAdd() {
		Act.App.addModals("TYPE_ITEM", (val) => setTimeout(() => goCreateListing(val)));
	}

	// ======================= SETTERS =======================

	function setSortVal(sort: PublicInterface.ESort) {
		setSort(sort);
	}

	function textFilter(value: string) {
		setFilterHandle("name", value);
	}

	function setFilterBank(bank: CatalogueInterface.EBank[]) {
		setFilterHandle("bank", bank);
	}

	function setFilterRating(rating: PublicInterface.TRating | null) {
		setFilterHandle("rating", rating);
	}

	function setFilterPrice(isUp: boolean, price: number | null) {
		setFilterHandle(isUp ? "priseUp" : "priseDown", price);
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

	function goCreateListing(type: CatalogueInterface.ETypeItem) {
		Act.Router.goTo("CREATE_LISTING", { type });
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
			{ compRow: topRow, id: genId() },
			{ compRow: botRow, id: genId() },
		],
	};

	return { propsComponent };
}

export default Model;
