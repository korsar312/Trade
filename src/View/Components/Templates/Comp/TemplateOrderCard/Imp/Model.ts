import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import { useEffect, useState } from "react";
import type { TMoleculeGroupBtn } from "../../../../2.Molecules/MoleculeGroupBtn";
import type { TComponent as IProp } from "../../../../4.Structures/StructuresTabCard";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const orderList = Act.Catalogue.getGoodsIdList();

	const [isSell, setIsSell] = useState(true);
	const [isComplete, setIsComplete] = useState(true);

	useEffect(() => {}, [isSell, isComplete]);

	const mySell: TMoleculeGroupBtn = {
		id: "1",
		options: { text: "MY_SALES", click: () => setIsSell(false) },
		isActive: !isSell,
	};

	const myBuy: TMoleculeGroupBtn = {
		id: "2",
		options: { text: "MY_PURCHASES", click: () => setIsSell(true) },
		isActive: isSell,
	};

	const complete: TMoleculeGroupBtn = {
		id: "3",
		options: { text: "ACTIVE", click: () => setIsComplete(false) },
		isActive: !isComplete,
	};

	const unComplete: TMoleculeGroupBtn = {
		id: "4",
		options: { text: "COMPLETED", click: () => setIsComplete(true) },
		isActive: isComplete,
	};

	const rowProps: IProp = {
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
		children: orderList.map((el) => ({
			id: el,
			options: {
				name: Act.Catalogue.getName(el),
				image: Act.Catalogue.getImage(el),
				btn: [],
			},
			type: "ITEM_CARD",
		})),
	};

	return { rowProps };
}

export default Model;
