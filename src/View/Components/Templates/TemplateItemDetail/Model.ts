import type { IComponent } from "./index";
import type { IComponent as IProp } from "../../../Components/3.Substances/SubstanceDescMap";
import type { IComponent as IText } from "../../../Components/0.Cores/Text";
import Util from "../../../../Logic/Libs/Util";
import { Act } from "../../../../Logic/Core";
import type { TMoleculeRowControlCompType } from "../../2.Molecules/MoleculeRowControl";

const skeletonEl: TMoleculeRowControlCompType = { id: "-1", type: "LOAD", options: {} };

function Model(props: IComponent) {
	const { itemId } = props;

	const genId = Util.idGen();

	const name = Act.Catalogue.getName(itemId);
	const bank = Act.Catalogue.getBank(itemId);
	const price = Act.Catalogue.getPrice(itemId);
	const rating = Act.Catalogue.getSellerRating(itemId);
	const seller = Act.Catalogue.getSellerName(itemId);
	const desc = Act.Catalogue.getDesc(itemId);

	const priceForm = price && Util.toMoney(price);

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
				id: genId(),
				key: { text: "TITLE" },
				value: {
					compRow: [name ? { id: "1", type: "TEXT", options: textProp(name) } : skeletonEl],
				},
			},
			{
				id: genId(),
				key: { text: "BANK" },
				value: {
					compRow: [bank ? { id: "1", type: "TEXT", options: textProp(bank) } : skeletonEl],
				},
			},
			{
				id: genId(),
				key: { text: "PRICE" },
				value: {
					compRow: [priceForm ? { id: "1", type: "TEXT", options: textProp(priceForm) } : skeletonEl],
				},
			},
			{
				id: genId(),
				key: { text: "RATING" },
				value: {
					compRow: rating ? starProp(rating) : [skeletonEl],
				},
			},
			{
				id: genId(),
				key: { text: "SELLER" },
				value: {
					compRow: [seller ? { id: "1", type: "TEXT", options: textProp(seller) } : skeletonEl],
				},
			},
			{
				id: genId(),
				type: "vert",
				key: { text: "DESCRIPTION" },
				value: {
					compRow: [desc ? { id: "1", type: "TEXT", options: textProp(desc) } : skeletonEl],
				},
			},
		],
	};

	return propsComponent;
}

export default Model;
