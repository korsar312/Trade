import type { IComponent } from "./index";
import type { IComponent as IProp } from "../../../Components/3.Substances/SubstanceDescMap";
import type { IComponent as IText } from "../../../Components/0.Cores/Text";
import Util from "../../../../Logic/Libs/Util";
import { Act } from "../../../../Logic/Core";
import type { TMoleculeRowControlCompType } from "../../2.Molecules/MoleculeRowControl";

function Model(props: IComponent) {
	const { itemId } = props;

	const name = Act.Catalogue.getName(itemId);
	const bank = Act.Catalogue.getBank(itemId);
	const price = Act.Catalogue.getPrice(itemId);
	const rating = Act.Catalogue.getSellerRating(itemId);
	const seller = Act.Catalogue.getSellerName(itemId);
	const desc = Act.Catalogue.getDesc(itemId);

	const priceForm = price && Util.toMoney(price);

	const skeletonEl: TMoleculeRowControlCompType = {
		id: "1",
		type: "LOAD",
		options: {},
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

	return propsComponent;
}

export default Model;
