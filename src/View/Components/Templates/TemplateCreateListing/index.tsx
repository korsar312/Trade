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

const Index: FC<IComponent> = (props) => {
	const { typeItem, changeTabFn } = props;

	function isChoiceTab(type: CatalogueInterface.ETypeItem) {
		return typeItem === type;
	}

	function tabRender(): TSubstanceFormConstructCompType {
		const id = "3";

		switch (typeItem) {
			case "CARD":
				return {
					id,
					type: "FORM_TEXT_PAIR",
					options: {
						title: "ENTER",
						labelDesc: "ENTER",
						labelTitle: "ENTER",
						submit: () => "",
					},
				};

			case "GUARD":
				return {
					id,
					type: "FORM_TEXTAREA",
					options: {
						title: { text: "LISTING_AFTER_PAYMENT_DATA", addStyle: [{ color: Act.Style.getColor("BLUE_2") }] },
						labelTitle: "TEXT_AFTER_PAYMENT",
						submit: () => "",
					},
				};
		}
	}

	const propsComponent: IProp = {
		compRow: [
			{
				id: "1",
				type: "FORM_TEXT_PAIR",
				options: {
					title: "LISTING_MAIN_DATA",
					labelDesc: "LISTING_DESC",
					labelTitle: "LISTING_NAME",
					submit: () => "",
				},
			},
			{
				id: "2",
				type: "TABS",
				options: {
					btnRow: CatalogueTypeItemArr.map((el) => ({
						id: el,
						options: { click: () => changeTabFn(el), text: el },
						isActive: isChoiceTab(el),
					})),
				},
			},
			tabRender(),
		],
	};

	return <Substance {...propsComponent} />;
};

export default observer(Index);
