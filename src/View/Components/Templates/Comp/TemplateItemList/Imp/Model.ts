import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import type { TComponent as IComp } from "../../../../3.Substances/SubstanceItemCard";
import PropsControlItemBtn from "../../../Props/PropsControlItemBtn.ts";

type TRowProps = IComp & { id: string };

function Model({ Props, Act }: TModel<TComponent>) {
	const { type } = Props;

	const listingIdList = Act.Listing.getListingIdList();

	const rowProps: TRowProps[] = listingIdList.map((listingId) => ({
		id: listingId,
		name: Act.Listing.getName(listingId),
		image: Act.Listing.getImage(listingId),
		btn: [],
		...typeChoice(listingId),
	}));

	function typeChoice(id: string): Partial<TRowProps> {
		switch (type) {
			case "order":
				return { click: () => goOrder(id) };

			case "item":
				return {
					btn: PropsControlItemBtn(Act, { id }),
					click: () => goItemDetail(id),
				};

			case "listing":
				return {
					btn: PropsControlItemBtn(Act, { id }),
					click: () => goItemDetail(id),
				};
		}
	}

	function goOrder(id: string) {
		Act.Router.goTo("ORDER", { id });
	}

	function goItemDetail(id: string) {
		Act.Router.goTo("ITEM", { id, type: getType(id) || "CARD" });
	}

	function getType(id: string) {
		return Act.Item.getType(id);
	}

	return { rowProps };
}

export default Model;
