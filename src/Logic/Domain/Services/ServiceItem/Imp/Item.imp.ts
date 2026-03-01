import type { ItemInterface as Interface } from "../Item.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class ItemImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private SetItems(store: Interface.Store, items: Interface.TItemMap): Interface.Store {
		return { ...store, items };
	}

	private ArrToMap(goods: Interface.TItemLink[]): Interface.TItemMap {
		return goods.reduce((prev, cur) => {
			prev[cur.id] = cur;
			return prev;
		}, {} as Interface.TItemMap);
	}

	private GetItem(itemList: Interface.TItemMap, itemId?: string): Interface.TItemLink | undefined {
		return itemId == null ? undefined : itemList[itemId];
	}

	private IsPickItem<T extends Interface.ETypeItem>(item?: Interface.TItem, type?: T): item is Interface.TPickItem<T> {
		return item?.type === type;
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {
			items: {},
		};

		super(props, store);
	}

	//==============================================================================================

	public setItems(items: Interface.TItemLink[]) {
		const normGoods = this.ArrToMap(items);

		this.store = this.SetItems(this.store, normGoods);
	}

	public getType(itemId?: string) {
		const item = this.GetItem(this.store.items, itemId);
		return item?.item.type;
	}

	public getBank(itemId?: string) {
		const item = this.GetItem(this.store.items, itemId);
		if (this.IsPickItem(item?.item, "CARD")) return item?.item.info.bank;

		return null;
	}
}

export default ItemImp;
