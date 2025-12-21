import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceDescMap";
import { observer } from "mobx-react";
import type { IComponent as IText } from "../../../Components/0.Cores/Text";
import { Act } from "../../../../Logic/Core";
import Util from "../../../../Logic/Libs/Util";
import type { TMoleculeRowControlCompType } from "../../2.Molecules/MoleculeRowControl";

export interface IComponent {
	itemId: string;
}

const Index: FC<IComponent> = (props) => {
	const { itemId } = props;

	const name = Act.Catalogue.getName(itemId);
	const bank = Act.Catalogue.getBank(itemId);
	const price = Act.Catalogue.getPrice(itemId);
	const rating = Act.Catalogue.getRating(itemId);
	const seller = Act.Catalogue.getSellerName(itemId);
	const desc = Act.Catalogue.getDesc(itemId);

	const priceForm = price && Util.toMoney(price);

	const skeletonEl: TMoleculeRowControlCompType = {
		id: "1",
		type: "LOAD",
		options: {},
	};

	const propsComponent: IProp = {
		rows: [
			{
				id: "1",
				key: { text: "Название" },
				value: {
					compRow: [name ? { id: "1", type: "TEXT", options: textProp(name) } : skeletonEl],
				},
			},
			{
				id: "2",
				key: { text: "Банк" },
				value: {
					compRow: [bank ? { id: "1", type: "TEXT", options: textProp(bank) } : skeletonEl],
				},
			},
			{
				id: "3",
				key: { text: "Цена" },
				value: {
					compRow: [priceForm ? { id: "1", type: "TEXT", options: textProp(priceForm) } : skeletonEl],
				},
			},
			{
				id: "4",
				key: { text: "Рейтинг" },
				value: {
					compRow: rating ? starProp(rating) : [skeletonEl],
				},
			},
			{
				id: "5",
				key: { text: "Продавец" },
				value: {
					compRow: [seller ? { id: "1", type: "TEXT", options: textProp(seller) } : skeletonEl],
				},
			},
			{
				id: "6",
				type: "vert",
				key: { text: "Описание" },
				value: {
					compRow: [desc ? { id: "1", type: "TEXT", options: textProp(desc) } : skeletonEl],
				},
			},
		],
	};

	function textProp(text: string): IText {
		return { text, pos: "left" };
	}

	function starProp(rating: number): TMoleculeRowControlCompType[] {
		return Array.from(Array(5), (_el, i) => ({
			id: String(i),
			type: "ICON",
			options: { img: "Star", color: rating > i ? "BLUE_2" : "MAIN_4" },
		}));
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
