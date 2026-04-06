import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import type { TComponent as IComp } from "../../../../3.Substances/SubstanceItemCard";
import PropsControlItemBtn from "../../../Props/PropsControlItemBtn.ts";

type TRowProps = IComp & { id: string };

function Model({ Props, Act }: TModel<TComponent>) {
	const { type } = Props;

	const listingIdList = Act.Listing.getListingIdList();
	const dealIdList = Act.Deal.getDealIdList();

	const rowProps: TRowProps[] = typeChoice();

	function typeChoice(): TRowProps[] {
		switch (type) {
			case "order":
				return dealIdList.map((dealId) => {
					const listing = Act.Deal.getListingId(dealId);

					return {
						id: dealId,
						name: Act.Listing.getName(listing),
						image: Act.Listing.getImage(listing),
						btn: [],
						click: () => goOrder(dealId),
					};
				});

			case "item":
				return listingIdList.map((listingId) => ({
					id: listingId,
					name: Act.Listing.getName(listingId),
					image: Act.Listing.getImage(listingId),
					btn: PropsControlItemBtn(Act, { id: listingId }),
					click: () => goItemDetail(listingId),
				}));

			case "listing":
				return listingIdList.map((listingId) => ({
					id: listingId,
					name: Act.Listing.getName(listingId),
					image: Act.Listing.getImage(listingId),
					btn: PropsControlItemBtn(Act, { id: listingId }),
					click: () => goItemDetail(listingId),
				}));
		}
	}

	function goOrder(id: string) {
		Act.Router.goTo("DEAL", { id });
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
