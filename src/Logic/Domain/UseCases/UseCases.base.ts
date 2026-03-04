import type { UseCasesInterface as Interface } from "./UseCases.interface";
import type { ProjectInterface } from "../../Core/DI/Project.interface";
import type { ListingInterface } from "../Services/ServiceListing/Listing.interface.ts";
import type { ItemInterface } from "../Services/ServiceItem/Item.interface.ts";
import type { UserInterface } from "../Services/ServiceUser/User.interface.ts";
import type { RestInterface } from "../Infrastructure/InfrastructureLinks/Rest.interface.ts";

export interface IUseCasesProps {
	service: ProjectInterface.TServices;
	inf: ProjectInterface.TInfrastructure;
}

abstract class UseCasesBase implements Interface.TScenarioBase<unknown, unknown> {
	//==============================================================================================

	constructor(private readonly params: IUseCasesProps) {
		this.invoke = this.invoke.bind(this);
	}

	//==============================================================================================

	abstract invoke(params: unknown): unknown;

	protected service = new Proxy({} as ProjectInterface.TActService, {
		get: (_, prop: keyof ProjectInterface.TModuleService) => this.params.service(prop).invoke,
	});

	protected inf = new Proxy({} as ProjectInterface.TActInf, {
		get: (_, prop: keyof ProjectInterface.TModuleInf) => this.params.inf(prop).invoke,
	});

	protected addLot(res: RestInterface.TLotInfo[]) {
		const listing: ListingInterface.IListing[] = res.map((el) => ({
			id: el.id,
			name: el.name,
			desc: el.desc,
			price: el.price,
			status: el.status,
			sellerId: el.sellerId,
			saleKind: el.saleKind,
			updatedAt: el.updatedAt,
			createdAt: el.createdAt,
		}));

		const item: ItemInterface.TItemLink[] = res.map((el) => ({
			listingId: el.id,
			item: { type: el.type, info: el.info } as any,
		}));

		const user: UserInterface.TUserMin[] = res.map((el) => ({
			id: el.sellerId,
			nickname: el.sellerName,
			like: el.sellerLike,
			dislike: el.sellerDislike,
		}));

		this.service.Listing.setListing(listing);
		this.service.Item.setItems(item);
		this.service.User.setUserList(user);
	}
}

export default UseCasesBase;
