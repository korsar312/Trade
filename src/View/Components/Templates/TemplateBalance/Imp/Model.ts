import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IProp } from "../../../../Components/3.Substances/SubstanceDescMap";
import type { TComponent as IText } from "../../../0.Cores/Text";
import type { IComponent as IBtn } from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const balance = Act.Wallet.getBalance();

	const textProps: IText = {
		text: "YOUR_BALANCE",
	};

	const btnPlusProps: IBtn = {
		text: "WITHDRAW",
		isFullWidth: true,
		color: "BLUE_2",
	};

	const btnMinusProps: IBtn = {
		text: "DEPOSIT",
		isFullWidth: true,
		color: "BLUE_2",
	};

	const descProps: IProp = {
		rows: [
			{
				id: "1",
				key: { text: "BALANCE" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(balance) }],
				},
			},
			{
				id: "3",
				key: { text: "LINKED_WALLET_ADDRESS" },
				value: {
					compRow: [{ id: "1", type: "BTN_MAIN", options: { text: "LINK", color: "MAIN_3", isFullWidth: true } }],
				},
				type: "vert",
			},
		],
	};

	function textProp(text: string | number): IText {
		return { text, pos: "left" };
	}

	return { textProps, descProps, btnPlusProps, btnMinusProps };
}

export default Model;
