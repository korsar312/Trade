import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceDescMap";
import { observer } from "mobx-react";
import type { IComponent as IText } from "../../../Components/0.Cores/Text";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { Act } from "../../../../Logic/Core";
import Util from "../../../../Logic/Libs/Util";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const param = useParamPage("ITEM");
	const itemId = param.id || "";

	const name = Act.Message.getGoodsWord(itemId, "name");
	const bank = Act.Catalogue.getBank(itemId);
	const price = Act.Catalogue.getPrice(itemId);
	const priceForm = Util.toMoney(price);
	const seller = Act.Message.getGoodsWord(itemId, "name");
	const disc = Act.Message.getGoodsWord(itemId, "dict");

	const propsComponent: IProp = {
		rows: [
			{
				id: "1",
				key: { text: "Название" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(name) }],
				},
			},
			{
				id: "2",
				key: { text: "Банк" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(bank) }],
				},
			},
			{
				id: "3",
				key: { text: "Цена" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(priceForm) }],
				},
			},
			{
				id: "4",
				key: { text: "Рейтинг" },
				value: {
					compRow: [
						{ id: "1", type: "BTN_IMAGE", options: { icon: "Star", isBig: true, colorIcon: "BLUE_3" } },
						{ id: "2", type: "BTN_IMAGE", options: { icon: "Star", isBig: true, colorIcon: "BLUE_3" } },
						{ id: "3", type: "BTN_IMAGE", options: { icon: "Star", isBig: true, colorIcon: "BLUE_3" } },
						{ id: "4", type: "BTN_IMAGE", options: { icon: "Star", isBig: true, colorIcon: "BLUE_3" } },
						{ id: "5", type: "BTN_IMAGE", options: { icon: "Star", isBig: true, colorIcon: "BLUE_3" } },
					],
				},
			},
			{
				id: "5",
				key: { text: "Продавец" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(seller) }],
				},
			},
			{
				id: "6",
				key: { text: "Описание" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(disc) }],
				},
			},
		],
	};

	function textProp(text: string): IText {
		return { text };
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
