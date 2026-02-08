import type { IComponent } from "./index";
import { Act } from "../../../../Logic/Core";
import { useId, useRef } from "react";
import {
	CatalogueBankArr,
	type CatalogueInterface,
	CatalogueTypeItemArr,
} from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import Util from "../../../../Logic/Libs/Util";
import type { IComponent as IProp } from "../../../Components/3.Substances/SubstanceFormConstruct";
import type { TSubstanceFormConstructCompType } from "../../3.Substances/SubstanceFormConstruct";
import type { TMoleculeFormSchemaTextTripleForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextTriple";
import type { TMoleculeFormSchemaTextBtnForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextBtn";
import type { TMoleculeFormSchemaTextareaForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextarea";

type TSubmitForms = {
	main: CatalogueInterface.TMain;
	card: CatalogueInterface.ICardInfoAll;
	free: CatalogueInterface.IFreeInfoAll;
};

function Model(props: IComponent) {
	const { typeItem, changeTabFn } = props;

	const genId = Util.idGen();

	const forms = useRef<TSubmitForms>(null);

	const formMain = useId();
	const formCard = useId();
	const formFree = useId();

	const constForm: TSubstanceFormConstructCompType[] = [
		{
			id: genId(),
			type: "ROW",
			options: {
				compRow: [
					{
						id: genId(),
						type: "BTN_MAIN",
						options: {
							text: "CREATE_LISTING",
							isFullWidth: true,
							color: "BLUE_2",
							click: openConfirm,
						},
					},
				],
			},
		},
		{
			id: genId(),
			type: "FORM_TEXT_TRIPLE",
			options: {
				idForm: formMain,
				title: { text: "LISTING_MAIN_DATA" },
				labelTitle: { placeholder: "LISTING_NAME" },
				labelSubtitle: {
					placeholder: "LISTING_PRICE",
					type: "number",
					valid: [(val) => ({ isValid: Number(val) > 0, error: "MUST_GREAT_ZERO" })],
				},
				labelDesc: { placeholder: "LISTING_DESC" },
				submit: handleMain,
			},
		},
		{
			id: genId(),
			type: "TABS",
			options: {
				btnRow: CatalogueTypeItemArr.map((el) => ({
					id: el,
					options: { click: () => changeTabFn(el), text: el },
					isActive: isChoiceTab(el),
				})),
			},
		},
	];

	function tabRender(): TSubstanceFormConstructCompType {
		switch (typeItem) {
			case "CARD":
				return {
					id: genId(),
					type: "FORM_TEXT_BTN",
					options: {
						idForm: formCard,
						title: { text: "FILL_FIELD" },
						labelTitle: { placeholder: "CARD_HOLDER_FULL_NAME" },
						labelSubtitle: { placeholder: "CARD_HOLDER_AGE", type: "number" },
						find: { placeholder: "SEARCH_BANK" },
						choiceList: CatalogueBankArr.map((el) => ({ name: el, title: { text: el } })),
						submit: handleCard,
					},
				};

			case "FREE":
				return {
					id: genId(),
					type: "FORM_TEXTAREA",
					options: {
						idForm: formFree,
						title: { text: "FILL_FIELD" },
						labelTitle: { placeholder: "TEXT_AFTER_PAYMENT" },
						submit: handleFree,
					},
				};
		}
	}

	function handleMain(val: TMoleculeFormSchemaTextTripleForm): void {
		setForm("main", { name: val.title, desc: val.desc, price: Number(val.subtitle), saleKind: "GOODS" });
	}

	function handleCard(val: TMoleculeFormSchemaTextBtnForm): void {
		setForm("card", { name: val.title, age: val.subtitle, bank: val.radio as CatalogueInterface.EBank });
	}

	function handleFree(val: TMoleculeFormSchemaTextareaForm): void {
		setForm("free", { desc: val.input });
	}

	function setForm<K extends keyof TSubmitForms>(key: K, value: TSubmitForms[K]): void {
		if (!forms.current) forms.current = {} as TSubmitForms;

		forms.current[key] = value;
	}

	function openConfirm() {
		Act.App.addModals("CONFIRM", (val) => setTimeout(() => createListing(val)));
	}

	function createListing(val: boolean) {
		if (!val) return;

		const formList = [
			document.getElementById(formMain) as HTMLFormElement | null,
			document.getElementById(formCard) as HTMLFormElement | null,
			document.getElementById(formFree) as HTMLFormElement | null,
		].filter(Boolean) as HTMLFormElement[];

		const ok = formList.every((f) => f.reportValidity());
		ok && formList.forEach((f) => f.requestSubmit());

		if (ok && forms.current) {
			const { free, card, main } = forms.current;

			function field(): CatalogueInterface.TItemAll {
				switch (typeItem) {
					case "CARD":
						return { type: typeItem, info: card };

					case "FREE":
						return { type: typeItem, info: free };
				}
			}

			Act.Catalogue.createListing({ ...main, ...field() }).then(() => Act.Router.goTo("GOODS"));
		}
	}

	function isChoiceTab(type: CatalogueInterface.ETypeItem) {
		return typeItem === type;
	}

	const propsComponent: IProp = {
		compRow: [...constForm, tabRender()],
	};

	return propsComponent;
}

export default Model;
