import { type FC, useId } from "react";
import Substance, {
	type IComponent as IProp,
	type TSubstanceFormConstructCompType,
} from "../../../Components/3.Substances/SubstanceFormConstruct";
import { observer } from "mobx-react";
import { type CatalogueInterface, CatalogueTypeItemArr } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import { Act } from "../../../../Logic/Core";
import Util from "../../../../Logic/Libs/Util";

export interface IComponent {
	typeItem: CatalogueInterface.ETypeItem;
	changeTabFn: (tab: CatalogueInterface.ETypeItem) => void;
}

const Index: FC<IComponent> = (props) => {
	const { typeItem, changeTabFn } = props;

	const genId = Util.idGen();

	const formMain = useId();
	const formPublic = useId();
	const formSecret = useId();

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

	function tabRender(): TSubstanceFormConstructCompType[] {
		switch (typeItem) {
			case "CARD":
				return [
					{
						id: genId(),
						type: "FORM_INPUT",
						options: {
							idForm: formPublic,
							title: { text: "LISTING_BEFORE_PAYMENT_DATA", addStyle: [{ color: Act.Style.getColor("RED_3") }] },
							input: { placeholder: "CARD_HOLDER_AGE", type: "number" },
						},
					},
					{
						id: genId(),
						type: "FORM_INPUT",
						options: {
							idForm: formSecret,
							title: { text: "LISTING_AFTER_PAYMENT_DATA", addStyle: [{ color: Act.Style.getColor("BLUE_2") }] },
							input: { placeholder: "CARD_HOLDER_FULL_NAME" },
						},
					},
				];

			case "GUARD":
				return [
					{
						id: genId(),
						type: "FORM_TEXTAREA",
						options: {
							idForm: formSecret,
							title: { text: "LISTING_AFTER_PAYMENT_DATA", addStyle: [{ color: Act.Style.getColor("BLUE_2") }] },
							labelTitle: { placeholder: "TEXT_AFTER_PAYMENT" },
						},
					},
				];
		}
	}

	function openConfirm() {
		const modalId = Act.App.addModals("CONFIRM", (val) => setTimeout(() => createListing(modalId, val)));
	}

	function createListing(id: string, val: boolean) {
		if (val) {
			const forms = [
				document.getElementById(formMain) as HTMLFormElement | null,
				document.getElementById(formPublic) as HTMLFormElement | null,
				document.getElementById(formSecret) as HTMLFormElement | null,
			].filter(Boolean) as HTMLFormElement[];

			const ok = forms.every((f) => f.reportValidity());
			console.log(ok, 22);
			console.log(forms.length, 22);

			if (ok) {
				Act.Catalogue.createListing({
					name: "QQQQ",
					desc: "WWWWW.",
					price: 6000,
					type: "CARD",
					saleKind: "GOODS",
					info: {
						name: "EEEE",
						bank: "ALFA",
						age: "11",
					},
				}).then(() => Act.Router.goTo("GOODS"));
			}
		}

		Act.App.removeModals(id);
	}

	function isChoiceTab(type: CatalogueInterface.ETypeItem) {
		return typeItem === type;
	}

	const propsComponent: IProp = {
		compRow: [...constForm, ...tabRender()],
	};

	return <Substance {...propsComponent} />;
};

export default observer(Index);
