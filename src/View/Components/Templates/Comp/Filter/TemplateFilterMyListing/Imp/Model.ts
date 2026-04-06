import type { TModel } from "../../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import { useEffect, useState } from "react";
import type { TComponent as TGroup, TMoleculeGroupBtn } from "../../../../../2.Molecules/MoleculeGroupBtn";

function Model({ Props, Act, Pub }: TModel<TComponent>) {
	const {} = Props;

	const userId = Act.User.getId();

	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		Pub.requestCatalog({
			limit: 10,
			saleKind: "ONE",
			type: "CARD",
			sellerId: userId,
			info: {},
		});
	}, [isActive]);

	const title: TMoleculeGroupBtn = {
		id: "0",
		options: { text: "MY_LISTING" },
	};

	const mySell: TMoleculeGroupBtn = {
		id: "1",
		options: { text: "ACTIVE", click: () => setIsActive(false) },
		isActive: !isActive,
	};

	const myBuy: TMoleculeGroupBtn = {
		id: "2",
		options: { text: "COMPLETED", click: () => setIsActive(true) },
		isActive: isActive,
	};

	const tabProps: Array<TGroup & { id: string }> = [
		{
			id: "0",
			btnRow: [title],
		},
		{
			id: "1",
			btnRow: [mySell, myBuy],
		},
	];

	return { tabProps };
}

export default Model;
