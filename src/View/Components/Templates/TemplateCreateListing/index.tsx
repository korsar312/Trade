import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceFormConstruct";
import { observer } from "mobx-react";
import { type CatalogueInterface, CatalogueTypeItemArr } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import { Act } from "../../../../Logic/Core";

export interface IComponent {
	typeItem: CatalogueInterface.ETypeItem;
}

const Index: FC<IComponent> = (props) => {
	const { typeItem } = props;

	function isChoiceTab(type: CatalogueInterface.ETypeItem) {
		return typeItem === type;
	}

	function changeTab(type: CatalogueInterface.ETypeItem) {
		return Act.Router.goTo("CREATE_LISTING", { type }, { noHistory: true });
	}

	const propsComponent: IProp = {
		compRow: [
			{
				id: "1",
				options: {
					title: "ENTER",
					labelDesc: "ENTER",
					labelTitle: "ENTER",
					submit: () => "",
				},
				type: "FORM_TEXT_PAIR",
			},
			{
				id: "2",
				options: {
					btnRow: CatalogueTypeItemArr.map((el) => ({
						id: el,
						options: { click: () => changeTab(el), text: el },
						isActive: isChoiceTab(el),
					})),
				},
				type: "TABS",
			},
			{
				id: "3",
				options: {
					title: "ENTER",
					labelDesc: "ENTER",
					labelTitle: "ENTER",
					submit: () => "",
				},
				type: "FORM_TEXT_PAIR",
			},
		],
	};

	return <Substance {...propsComponent} />;
};

export default observer(Index);
