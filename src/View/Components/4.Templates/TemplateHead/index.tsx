import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/2.Molecules/MoleculeControllRow";
import { Act } from "../../../../Logic/Core";
import type { RouterInterface } from "../../../../Logic/Core/Services/ServiceRouter/Router.interface.ts";

export interface IComponent {}

const noBack: RouterInterface.EPath[] = ["CASS_CHOICE_MENU"];

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const namePage = Act.Router.getCurPage();
	const isNoBack = noBack.includes(namePage);

	const goBack = Act.Router.goBack;

	const propsComponent: IProp = {
		btnLeft: { icon: "Block", color: "BLUE_2", click: goBack, isDisable: isNoBack },
		title: { text: namePage, font: "SectionDesc", color: "MAIN_2" },
	};

	return <Substance {...propsComponent} />;
};

export default Index;
