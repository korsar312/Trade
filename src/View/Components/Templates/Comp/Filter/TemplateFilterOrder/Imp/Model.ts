import type { TModel } from "../../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import { useEffect, useState } from "react";
import type { TComponent as TGroup, TMoleculeGroupBtn } from "../../../../../2.Molecules/MoleculeGroupBtn";

function Model({ Props, Pub }: TModel<TComponent>) {
	const {} = Props;

	const [isSell, setIsSell] = useState(true);
	const [isComplete, setIsComplete] = useState(true);

	useEffect(() => {
		Pub.requestOrderList({ limit: 10, isActive: !isComplete, isSell });
	}, [isSell, isComplete]);

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

	const tabProps: Array<TGroup & { id: string }> = [
		{
			id: "1",
			btnRow: [mySell, myBuy],
		},
		{
			id: "2",
			btnRow: [complete, unComplete],
		},
	];

	return { tabProps };
}

export default Model;
