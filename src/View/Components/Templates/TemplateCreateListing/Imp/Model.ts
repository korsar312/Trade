import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IBtn } from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import {
	CatalogueBankArr,
	type CatalogueInterface,
	CatalogueTypeItemArr,
} from "../../../../../Logic/Domain/Services/ServiceCatalogue/Catalogue.interface.ts";
import { useRef } from "react";
import type {
	TComponent as ITextTriple,
	TSchemaTextTriple,
} from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextTriple";
import type { TComponent as ITextBtn, TSchemaTextBtn } from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextBtn";
import type {
	TComponent as ITextarea,
	TSchemaTextarea,
} from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextarea";
import type { TComponent as ITabs } from "../../../2.Molecules/MoleculeGroupBtn";

type TSubmitForms = {
	main: CatalogueInterface.TMain;
	card: CatalogueInterface.ICardInfoAll;
	free: CatalogueInterface.IFreeInfoAll;
};

function Model({ Props, Act }: TModel<TComponent>) {
	const { typeItem, changeTabFn } = Props;

	const forms = useRef<TSubmitForms>(null);

	const formMainRef = useRef<HTMLFormElement | null>(null);
	const formCardRef = useRef<HTMLFormElement | null>(null);
	const formFreeRef = useRef<HTMLFormElement | null>(null);

	const formMainProps: ITextTriple = {
		form: { ref: formMainRef },
		title: { text: "LISTING_MAIN_DATA" },
		labelTitle: { placeholder: "LISTING_NAME", required: true },
		labelSubtitle: {
			placeholder: "LISTING_PRICE",
			type: "number",
			valid: [(val) => ({ isValid: Number(val) > 0, error: "MUST_GREAT_ZERO" })],
			required: true,
		},
		labelDesc: { placeholder: "LISTING_DESC", required: true },
		submit: handleMain,
	};

	const formCardProps: ITextBtn = {
		form: { ref: formCardRef },
		title: { text: "FILL_FIELD" },
		labelTitle: { placeholder: "CARD_HOLDER_FULL_NAME", required: true },
		labelSubtitle: { placeholder: "CARD_HOLDER_AGE", type: "number", required: true },
		find: { placeholder: "SEARCH_BANK" },
		choiceList: CatalogueBankArr.map((el) => ({ name: el, title: { text: el } })),
		submit: handleCard,
	};

	const formFreeProps: ITextarea = {
		form: { ref: formFreeRef },
		title: { text: "FILL_FIELD" },
		labelTitle: { placeholder: "TEXT_AFTER_PAYMENT", required: true },
		submit: handleFree,
	};

	const tabProps: ITabs = {
		btnRow: CatalogueTypeItemArr.map((el) => ({
			id: el,
			options: { click: () => changeTabFn(el), text: el },
			isActive: isChoiceTab(el),
		})),
	};

	const btnProps: IBtn = {
		text: "CREATE_LISTING",
		isFullWidth: true,
		color: "BLUE_2",
		click: handleCreate,
	};

	function handleMain(val: TSchemaTextTriple): void {
		setForm("main", { name: val.title, desc: val.desc, price: Number(val.subtitle), saleKind: "ONE" });
	}

	function handleCard(val: TSchemaTextBtn): void {
		setForm("card", { name: val.title, age: val.subtitle, bank: val.radio as CatalogueInterface.EBank });
	}

	function handleFree(val: TSchemaTextarea): void {
		setForm("free", { desc: val.input });
	}

	function setForm<K extends keyof TSubmitForms>(key: K, value: TSubmitForms[K]): void {
		if (!forms.current) forms.current = {} as TSubmitForms;

		forms.current[key] = value;
	}

	function handleCreate() {
		checkForm() && openConfirm();
	}

	function openConfirm() {
		Act.App.addModals("CONFIRM", (val) => setTimeout(() => createListing(val)));
	}

	function checkForm() {
		return getFormList().every((f) => f.reportValidity());
	}

	function getFormList() {
		return [formMainRef.current, formCardRef.current, formFreeRef.current].filter(Boolean) as HTMLFormElement[];
	}

	function createListing(val: boolean) {
		if (!val || !checkForm()) return;

		getFormList().forEach((f) => f.requestSubmit());

		if (forms.current) {
			const { free, card, main } = forms.current;

			function field(): CatalogueInterface.TItemAll {
				switch (typeItem) {
					case "CARD":
						return { type: typeItem, info: card };

					case "FREE":
						return { type: typeItem, info: free };
				}
			}

			Act.Catalogue.createListing({ ...main, ...field() }).then((res) => Act.Router.goTo("ITEM", { id: res }));
		}
	}

	function isChoiceTab(type: CatalogueInterface.ETypeItem) {
		return typeItem === type;
	}

	return { formMainProps, formCardProps, formFreeProps, tabProps, btnProps, typeItem };
}

export default Model;
