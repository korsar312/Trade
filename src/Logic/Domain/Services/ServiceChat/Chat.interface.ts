export namespace ChatInterface {
	export interface IAdapter {
		setChat(listing: IChat[]): void;
		setMessage(message: IMessage[]): void;
		addMessage(message: IMessage): void;

		sendMessage(chatId: string, text: string): Promise<void>;

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
		status: EChatStatus;
	}

	export interface IMessage {
		id: string;
		chatId: string;
		userId: string;
		createdAt: number;
		text: string;
		readId: string[];
	}

	export type TChatMap = Record<string, IChat>;
	export type TMessageMap = Record<string, IMessage>;
	export type TChatMessageLink = Record<string, string[]>;

	export type EChatStatus = keyof typeof ChatStatus;

	export interface Store {
		chat: TChatMap;
		message: TMessageMap;
		chatMessageLink: TChatMessageLink;
	}
}

const ChatStatus = {
	ACTIVE: "ACTIVE",
	READ_ONLY: "READ_ONLY",
} as const;
