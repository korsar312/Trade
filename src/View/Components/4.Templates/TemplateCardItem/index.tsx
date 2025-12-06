import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceItemCard";
import { Act } from "../../../../Logic/Core";
import Util from "../../../../Logic/Libs/Util";

export interface IComponent {
	itemId: string;
}

const Index: FC<IComponent> = (props) => {
	const { itemId } = props;

	const name = Act.Message.getGoodsWord(itemId, "name");
	const sell = Act.Catalogue.getPrice(itemId);
	const image = Act.Catalogue.getImage(itemId);

	const price = Util.toMoney(sell);

	const propsComponent: IProp = {
		name,
		price,
		image,
	};

	return <Substance {...propsComponent} />;
};

export default Index;
