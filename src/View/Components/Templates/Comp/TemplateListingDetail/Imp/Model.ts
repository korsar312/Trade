import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import type { TComponent as IDesc } from "../../../../3.Substances/SubstanceDescMap";
import Util from "../../../../../../Logic/Libs/Util";
import type { TComponent as IText } from "../../../../0.Cores/Text";
import type { TMoleculeRowControlCompType } from "../../../../2.Molecules/MoleculeRowControl";

function Model({ Props, Act }: TModel<TComponent>) {
	const { listingId } = Props;

	const name = Act.Listing.getName(listingId);
	const price = Act.Listing.getPrice(listingId);
	const desc = Act.Listing.getDesc(listingId);
	const sellerId = Act.Listing.getSellerId(listingId);

	const seller = Act.User.getName(sellerId);
	const rating = Act.User.getRating(sellerId);

	const bank = Act.Item.getBank(listingId);

	const priceForm = price && Util.toMoney(price);

	const rowProps: IDesc = {
		rows: [
			{
				id: "0",
				key: {
					compRow: [{ id: "icon", type: "ICON", options: { color: "BLUE_3", img: "desc" } }, keyPublic({ text: "MAIN_DATA" })],
				},
			},
			{
				id: "1",
				key: { compRow: [keyPublic({ text: "TITLE" })] },
				value: { compRow: [{ id: "1", type: "TEXT", options: textProp(name) }] },
			},
			{
				id: "2",
				key: { compRow: [keyPublic({ text: "BANK" })] },
				value: { compRow: [{ id: "1", type: "TEXT", options: textProp(bank) }] },
			},
			{
				id: "3",
				key: { compRow: [keyPublic({ text: "PRICE" })] },
				value: { compRow: [{ id: "1", type: "TEXT", options: textProp(priceForm) }] },
			},
			{
				id: "4",
				key: { compRow: [keyPublic({ text: "RATING" })] },
				value: { compRow: starProp(rating) },
			},
			{
				id: "5",
				key: { compRow: [keyPublic({ text: "SELLER" })] },
				value: { compRow: [{ id: "1", type: "TEXT", options: textProp(seller) }] },
			},
			{
				id: "6",
				type: "vert",
				key: {
					wrapper: { pos: "center" },
					compRow: [keyPublic({ text: "DESCRIPTION" })],
				},
				value: { compRow: [{ id: "1", type: "TEXT", options: textProp(desc) }] },
			},
		],
	};

	function keyPublic(edit: IText): TMoleculeRowControlCompType {
		return { id: "0", type: "TEXT", options: { color: "SECOND_2", ...edit } };
	}

	function textProp(text?: string | null | number): IText | undefined {
		return text == null ? undefined : { text, pos: "left" };
	}

	function starProp(rating?: number | null): TMoleculeRowControlCompType[] {
		return rating != null
			? Array.from(Array(5), (_el, i) => ({
					id: String(i),
					type: "ICON",
					options: { img: "Star", color: rating > i ? "BLUE_2" : "MAIN_4" },
				}))
			: [{ id: "0", type: "LOAD" }];
	}

	return { rowProps };
}

export default Model;
