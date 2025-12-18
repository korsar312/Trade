import { type FC, useState } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/4.Structures/StructuresTabCard";
import { observer } from "mobx-react";
import { Act } from "../../../../Logic/Core";
import type { TMoleculeGroupBtn } from "../../2.Molecules/MoleculeGroupBtn";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const orderList = Act.Order.getOrderIdList();
	const userId = Act.User.getId();

	const [isSell, setIsSell] = useState(true);
	const [isComplete, setIsComplete] = useState(true);

	const orderFilter = orderList.filter((el) => {
		const itemIsSell = Act.Order.isSellUser(el, userId);
		const itemIsComplete = !Act.Order.isActiveOrder(el);

		return isSell === itemIsSell && isComplete === itemIsComplete;
	});

	const mySell: TMoleculeGroupBtn = {
		id: "1",
		options: { text: "Мои Продажи", click: () => setIsSell(false) },
		isActive: !isSell,
	};

	const myBuy: TMoleculeGroupBtn = {
		id: "2",
		options: { text: "Мои Покупки", click: () => setIsSell(true) },
		isActive: isSell,
	};

	const complete: TMoleculeGroupBtn = {
		id: "3",
		options: { text: "Активные", click: () => setIsComplete(false) },
		isActive: !isComplete,
	};

	const unComplete: TMoleculeGroupBtn = {
		id: "4",
		options: { text: "Завершенные", click: () => setIsComplete(true) },
		isActive: isComplete,
	};

	const propsComponent: IProp = {
		tabs: [
			{
				id: "1",
				options: {
					btnRow: [mySell, myBuy],
				},
			},
			{
				id: "2",
				options: {
					btnRow: [complete, unComplete],
				},
			},
		],
		children: orderFilter.map((el) => ({
			id: el,
			options: {
				name: Act.Order.getName(el),
				image: Act.Order.getImage(el),
				btn: [],
			},
			type: "ITEM_CARD",
		})),
	};

	return <Substance {...propsComponent} />;
};

export default observer(Index);
