import type { PublicInterface } from "../../Services/Public.interface.ts";
import type { ListingInterface } from "../../Services/ServiceListing/Listing.interface.ts";
import type { typesUtils } from "../../../Libs/Util/TypesUtils.ts";
import type { ItemInterface } from "../../Services/ServiceItem/Item.interface.ts";
import type { WalletInterface } from "../../Services/ServiceWallet/Wallet.interface.ts";
import type { UserInterface } from "../../Services/ServiceUser/User.interface.ts";
import type { DealInterface } from "../../Services/ServiceDeal/Deal.interface.ts";
import type { PaymentInterface } from "../../Services/ServicePayment/Payment.interface.ts";
import type { ChatInterface } from "../../Services/ServiceChat/Chat.interface.ts";

export namespace RestInterface {
	interface IListingReq {
		limit: number;
		saleKind: ListingInterface.ESaleKind;
		cursorId?: string;
		sort?: PublicInterface.ESort;
		sellerId?: string;
		priceUp?: number;
		priceDown?: number;
		findStr?: string;
	}

	interface IUserRes {
		sellerName: string;
		sellerLike: number;
		sellerDislike: number;
	}

	export interface IOrderRes {
		listing: ListingInterface.IListing;
		deal: DealInterface.IDeal;
		seller: UserInterface.TUserInfoMin;
		payment: PaymentInterface.IPayment;
		buyer: UserInterface.TUserInfoMin;
		item: ItemInterface.TItemAll;
		chat: ChatInterface.IChat[];
		message: ChatInterface.IMessage[];
	}

	type TCatalogInfo = IListingReq & typesUtils.DeepPartial<ItemInterface.TItemFilter> & Pick<ItemInterface.TItemFilter, "type">;
	export type TLotInfo = ListingInterface.IListing & ItemInterface.TItemPublic & IUserRes;

	/** =========== REQUEST =========== */

	export type TLoginReq = { login: string; token: string };
	export type TGetItemsReq = TCatalogInfo;
	export type TGetItemReq = { id: string; type: ItemInterface.ETypeItem };
	export type TCreateListingReq = ListingInterface.TMain & ItemInterface.TItemAll;
	export type TGetMyAccReq = void;
	export type TAwaitPayDepositReq = { signal?: AbortSignal };
	export type TIsExistDepositReq = void;
	export type TCreateDepositReq = { amount: number };
	export type TRemoveDepositReq = void;
	export type TGetBalanceReq = void;
	export type TWithdrawBalanceReq = WalletInterface.TTranche;
	export type TStartBuyItemReq = { listingId: string };
	export type TGetOrderListReq = { isActive: boolean; isSell: boolean; limit: number; cursorId?: string };
	export type TGetOrderReq = { dealId: string };
	export type TDealCompleteReq = { dealId: string };
	export type TDealCancelReq = { dealId: string };
	export type TDealSendMessageReq = { dealId: string; text: string };

	/** =========== RESPONSE =========== */

	export type TLoginRes = UserInterface.IUser;
	export type TGetItemsRes = TLotInfo[];
	export type TGetItemRes = TLotInfo;
	export type TCreateListingRes = string;
	export type TGetMyAccRes = UserInterface.IUser;
	export type TAwaitPayDepositRes = boolean;
	export type TIsExistDepositRes = WalletInterface.TCheckDeposit;
	export type TCreateDepositRes = WalletInterface.TDeposit;
	export type TRemoveDepositRes = void;
	export type TGetBalanceRes = WalletInterface.TWallet;
	export type TwWithdrawBalanceRes = void;
	export type TStartBuyItemRes = void;
	export type TGetOrderListRes = IOrderRes[];
	export type TGetOrderRes = IOrderRes;
	export type TDealCompleteRes = void;
	export type TDealCancelRes = void;
	export type TDealSendMessageRes = void;
}
