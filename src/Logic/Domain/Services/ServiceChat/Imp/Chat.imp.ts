import type { ChatInterface as Interface } from "../Chat.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class ChatImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private SetChat(store: Interface.Store, chat: Interface.TChatMap): Interface.Store {
		return { ...store, chat };
	}

	private SetMessage(store: Interface.Store, message: Interface.TMessageMap): Interface.Store {
		return { ...store, message };
	}

	private SetChatMessageLink(store: Interface.Store, chatMessageLink: Interface.TChatMessageLink): Interface.Store {
		return { ...store, chatMessageLink };
	}

	private ChatMessageLinkMap(message: Interface.IMessage[]): Interface.TChatMessageLink {
		return message.reduce((prev, cur) => {
			const messageList = prev[cur.chatId];
			prev[cur.chatId] = messageList ? [...messageList] : [cur.id];

			return prev;
		}, {} as Interface.TChatMessageLink);
	}

	private ChatToMap(goods: Interface.IChat[]): Interface.TChatMap {
		return goods.reduce((prev, cur) => ((prev[cur.id] = cur), prev), {} as Interface.TChatMap);
	}

	private MessageToMap(goods: Interface.IMessage[]): Interface.TMessageMap {
		return goods.reduce((prev, cur) => ((prev[cur.id] = cur), prev), {} as Interface.TMessageMap);
	}

	private GetMessage(id?: string): Interface.IMessage | undefined {
		return id == null ? undefined : this.store.message[id];
	}

	private GetMessageIdListByChatId(id?: string): string[] | undefined {
		return id == null ? undefined : this.store.chatMessageLink[id];
	}

	private GetChatByDealId(id?: string): Interface.IChat | undefined {
		return id == null ? undefined : Object.entries(this.store.chat).find(([, value]) => value.dealId === id)?.[1];
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {
			chat: {},
			message: {},
			chatMessageLink: {},
		};

		super(props, store);
	}

	//==============================================================================================

	public setChat(chat: Interface.IChat[]) {
		const normChat = this.ChatToMap(chat);

		this.store = this.SetChat(this.store, normChat);
	}

	public setMessage(message: Interface.IMessage[]) {
		const normMessage = this.MessageToMap(message);
		const chatMessage = this.ChatMessageLinkMap(message);
		const middleStore = this.SetChatMessageLink(this.store, chatMessage);

		this.store = this.SetMessage(middleStore, normMessage);
	}

	public getChatIdByDealId(dealId: string) {
		const chat = this.GetChatByDealId(dealId);
		if (!chat) throw new Error();

		return chat.id;
	}

	public getMessageIdListByChatId(chatId: string) {
		const messageList = this.GetMessageIdListByChatId(chatId);
		if (!messageList) throw new Error();

		return messageList;
	}

	public getMessageText(messageId: string) {
		const message = this.GetMessage(messageId);
		if (!message) throw new Error();

		return message.text;
	}
}

export default ChatImp;
