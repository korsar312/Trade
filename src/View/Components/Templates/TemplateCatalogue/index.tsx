import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/4.Structures/StructuresCatalog";
import { Act } from "../../../../Logic/Core";
import Util from "../../../../Logic/Libs/Util";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const catalog = Act.Catalogue.getGoodsIdList();

	function getName(id: string) {
		return Act.Message.getGoodsWord(id, "name");
	}

	function getPrice(id: string) {
		return Util.toMoney(Act.Catalogue.getPrice(id));
	}

	function getImage(id: string) {
		return Act.Catalogue.getImage(id);
	}

	const propsComponent: IProp = {
		itemList: catalog.map((el) => ({
			btn: [{ text: getPrice(el), isFullWidth: true, color: "BLUE_2" }],
			image: getImage(el),
			name: getName(el),
			id: el,
		})),
	};

	return <Substance {...propsComponent} />;
};

export default Index;
