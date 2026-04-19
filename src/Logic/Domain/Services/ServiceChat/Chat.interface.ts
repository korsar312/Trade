export namespace ChatInterface {
	export interface IAdapter {
		setChat(listing: IChat[]): void;
		setMessage(message: IMessage[]): void;

		sendMessage(dealId: string, text: string): void;

		getChatIdByDealId(dealId: string): string | undefined;
		getMessageIdListByChatId(chatId?: string): string[];

		getMessageText(messageId: string): string | undefined;
		getMessageDate(messageId: string): number | undefined;
		getMessageOwnerId(messageId: string): string | undefined;
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
