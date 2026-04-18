export namespace ChatInterface {
	export interface IAdapter {
		setChat(listing: IChat[]): void;
		setMessage(message: IMessage[]): void;

		getChatIdByDealId(dealId: string): string;
		getMessageIdListByChatId(chatId: string): string[];

		getMessageText(messageId: string): string;
		getMessageDate(messageId: string): number;
		getMessageOwnerId(messageId: string): string;
	}

	export interface IChat {
		id: string;
		dealId: string;
		participantId: string[];
	}

	export interface IMessage {
		id: string;
		chatId: string;
		userId: string;
		createdAt: number;
		readId: string[];
		text: string;
	}

	export type TChatMap = Record<string, IChat>;
	export type TMessageMap = Record<string, IMessage>;
	export type TChatMessageLink = Record<string, string[]>;

	export interface Store {
		chat: TChatMap;
		message: TMessageMap;
		chatMessageLink: TChatMessageLink;
	}
}
