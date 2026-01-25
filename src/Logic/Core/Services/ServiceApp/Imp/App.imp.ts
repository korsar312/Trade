import type { AppInterface as Interface } from "../App.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class AppImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private SetInit(store: Interface.Store, init: boolean): Interface.Store {
		return { ...store, init };
	}

	private SetModal(store: Interface.Store, modals: Interface.TModals[]): Interface.Store {
		return { ...store, modals };
	}

	private RemoveModal(allModal: Interface.TModals[], id: string): Interface.TModals[] {
		return [...allModal.filter((el) => el.id !== id)];
	}

	private AddModal(allModal: Interface.TModals[], modal: Interface.TModals): Interface.TModals[] {
		return [...allModal, modal];
	}

	private CreateModal<T extends Interface.EModalName>(
		type: T,
		successFn: (val: Interface.TModalPayloadMap[T]) => void,
	): Interface.TModals {
		return { id: crypto.randomUUID(), type, successFn } as Interface.TModals;
	}
	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = { init: false, modals: [] };

		super(props, store);
	}

	//==============================================================================================

	public initDone() {
		this.store = this.SetInit(this.store, true);
	}

	public isInit() {
		return this.store.init;
	}

	public getModals(): Interface.TModals[] {
		return this.store.modals;
	}

	public addModals<T extends Interface.EModalName>(type: T, successFn: (val: Interface.TModalPayloadMap[T]) => void): string {
		const newModal = this.CreateModal(type, successFn);
		const newModalList = this.AddModal(this.store.modals, newModal);
		this.store = this.SetModal(this.store, newModalList);
		return newModal.id;
	}

	public removeModals(id: string): void {
		const newModalList = this.RemoveModal(this.store.modals, id);
		this.store = this.SetModal(this.store, newModalList);
	}
}

export default AppImp;
