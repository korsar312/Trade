import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import { useEffect, useState } from "react";
import type { TMoleculeGroupBtn } from "../../../../2.Molecules/MoleculeGroupBtn";
import type { TSubstanceTabsBtn } from "../../../../3.Substances/SubstanceTabs";
import type { TComponent as ICard } from "../../../../3.Substances/SubstanceItemCard";

type TCardId = ICard & { id: string };

function Model({ Props, Act, Pub }: TModel<TComponent>) {
	const {} = Props;

	const listingIdList = Act.Listing.getListingIdList();

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

	const tabProps: TSubstanceTabsBtn[] = [
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
	];

	const cardList: TCardId[] = listingIdList.map((el) => ({
		id: el,
		name: Act.Listing.getName(el),
		image: Act.Listing.getImage(el),
		btn: [],
		click: () => goOrder(el),
	}));

	function goOrder(id: string) {
		Act.Router.goTo("ORDER", { id });
	}

	return { tabProps, cardList };
}

export default Model;
