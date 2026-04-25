import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import type { TMoleculeRowControlCompType } from "../../../../2.Molecules/MoleculeRowControl";
import type { TMoleculeChatFieldText } from "../../../../2.Molecules/MoleculeChatField";

function Model({ Props, Act }: TModel<TComponent>) {
	const { dealId, ...rest } = Props;

	const userId = Act.User.getId();
	const chatId = Act.Chat.getChatIdByDealId(dealId) || "";
	const messageIdList = Act.Chat.getMessageIdListByChatId(chatId);

	const titleProps: TMoleculeRowControlCompType[] = [
		{ id: "0", type: "ICON", options: { img: "Chat", color: "BLUE_2" } },
		{ id: "1", type: "TEXT", options: { text: "DEAL_CHAT" } },
	];

	const textProps: TMoleculeChatFieldText[] = messageIdList.map((el) => {
		return {
			id: el,
			date: getMessageDate(el) || 0,
			text: getMessageText(el) || "",
			type: userId === getMessageOwner(el) ? "send" : "receive",
		};
	});

	function getMessageText(id: string) {
		return Act.Chat.getMessageText(id);
	}

	function getMessageDate(id: string) {
		return Act.Chat.getMessageDate(id);
	}

	function getMessageOwner(id: string) {
		return Act.Chat.getMessageOwnerId(id);
	}

	function sendMessage(text: string) {
		return Act.Chat.sendMessage(chatId, text);
	}

	return { titleProps, textProps, sendMessage, ...rest };
}

export default Model;
