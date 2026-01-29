import { type FC } from "react";
import Substance, {
	type IComponent as IProp,
	type TSubstanceFormConstructCompType,
} from "../../../Components/3.Substances/SubstanceFormConstruct";
import { observer } from "mobx-react";
import { type CatalogueInterface, CatalogueTypeItemArr } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import { Act } from "../../../../Logic/Core";

export interface IComponent {
	typeItem: CatalogueInterface.ETypeItem;
	changeTabFn: (tab: CatalogueInterface.ETypeItem) => void;
}

type CompTypeOmit = Omit<TSubstanceFormConstructCompType, "id">;

const Index: FC<IComponent> = (props) => {
	const { typeItem, changeTabFn } = props;

	const constForm: CompTypeOmit[] = [
		{
			type: "BTN_MAIN",
			options: {
				text: "CREATE_LISTING",
				isFullWidth: true,
				color: "BLUE_2",
				click: openConfirm,
			},
		},
		{
			type: "FORM_TEXT_PAIR",
			options: {
				title: { text: "LISTING_MAIN_DATA" },
				labelDesc: { placeholder: "LISTING_DESC" },
				labelTitle: { placeholder: "LISTING_NAME" },
				submit: () => "",
			},
		},
		{
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

	function tabRender(): CompTypeOmit[] {
		switch (typeItem) {
			case "CARD":
				return [
					{
						type: "FORM_INPUT",
						options: {
							title: { text: "LISTING_BEFORE_PAYMENT_DATA", addStyle: [{ color: Act.Style.getColor("RED_3") }] },
							input: { placeholder: "CARD_HOLDER_AGE", type: "number" },
							submit: () => "",
						},
					},
					{
						type: "FORM_INPUT",
						options: {
							title: { text: "LISTING_AFTER_PAYMENT_DATA", addStyle: [{ color: Act.Style.getColor("BLUE_2") }] },
							input: { placeholder: "CARD_HOLDER_FULL_NAME" },
							submit: () => "",
						},
					},
				];

			case "GUARD":
				return [
					{
						type: "FORM_TEXTAREA",
						options: {
							title: { text: "LISTING_AFTER_PAYMENT_DATA", addStyle: [{ color: Act.Style.getColor("BLUE_2") }] },
							labelTitle: { placeholder: "TEXT_AFTER_PAYMENT" },
							submit: () => "",
						},
					},
				];
		}
	}

	function openConfirm() {
		const modalId = Act.App.addModals("CONFIRM", (val) => setTimeout(() => createListing(modalId, val)));
	}

	function createListing(id: string, val: boolean) {
		console.log(val);
		Act.App.removeModals(id);
	}

	function isChoiceTab(type: CatalogueInterface.ETypeItem) {
		return typeItem === type;
	}

	const propsComponent: IProp = {
		compRow: [...constForm, ...tabRender()].map((el, i) => ({ ...el, id: String(i) }) as TSubstanceFormConstructCompType),
	};

	return <Substance {...propsComponent} />;
};

export default observer(Index);
