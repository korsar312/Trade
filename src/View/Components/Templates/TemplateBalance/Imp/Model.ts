import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IProp } from "../../../../Components/3.Substances/SubstanceDescMap";
import type { TComponent as IText } from "../../../0.Cores/Text";
import type { TComponent as IBtn } from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import type { WalletInterface } from "../../../../../Logic/Domain/Services/ServiceWallet/Wallet.interface.ts";
import { useEffect, useRef, useState } from "react";
import { useUpdate } from "../../../../../Logic/Libs/Hooks/useUpdate/useUpdate.ts";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const balance = Act.Wallet.getBalance();

	const [isUpdateBtn, enabledUpdatingBtn, disabledUpdatingBtn] = useUpdate(true);
	const [isUpdateCancel, enabledUpdatingCancel, disabledUpdatingCancel] = useUpdate();

	const [deposit, setDeposit] = useState<WalletInterface.TDeposit | null>(null);
	const [depTimeLeft, setDepTimeLeft] = useState<number | null>(null);

	const timeSync = useRef(0);
	const timer = useRef<NodeJS.Timeout | null>(null);
	const signal = useRef(new AbortController());

	useEffect(() => {
		checkDeposit();

		return () => {
			cancelAwait();
			clean();
		};
	}, []);

	useEffect(() => {
		if (deposit) {
			timerTick();
			timer.current = setInterval(() => timerTick(), 1000);
		}

		return () => {
			timer.current && clearInterval(timer.current);
		};
	}, [deposit]);

	const textProps: IText = {
		text: "YOUR_BALANCE",
	};

	const btnPubProps: IBtn = {
		isFullWidth: true,
		color: "BLUE_2",
		isDisable: deposit,
		isLoading: isUpdateBtn,
	};

	const btnMinusProps: IBtn = {
		text: "WITHDRAW",
		click: insertWithdraw,
		...btnPubProps,
	};

	const btnPlusProps: IBtn = {
		text: "DEPOSIT",
		click: insertSumDeposit,
		...btnPubProps,
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
				id: "2",
				key: { text: "LINKED_WALLET_ADDRESS" },
				value: {
					compRow: [{ id: "1", type: "BTN_MAIN", options: { text: "LINK", color: "MAIN_3", isFullWidth: true } }],
				},
				type: "vert",
			},
		],
	};

	const depositProps: IProp | null = deposit && {
		rows: [
			{
				id: "1",
				key: { text: "ADDRESS" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: { ...textProp(deposit.address), isBreakLine: true } }],
				},
			},
			{
				id: "2",
				key: { text: "SUM" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(deposit.amount) }],
				},
			},
			{
				id: "3",
				key: { text: "TIME_LEFT" },
				value: {
					compRow:
						depTimeLeft == null
							? [{ id: "1", type: "LOAD", options: {} }]
							: [{ id: "1", type: "TEXT", options: textProp(Math.floor(depTimeLeft / 1000)) }],
				},
			},
			{
				id: "4",
				value: {
					compRow: [
						{
							id: "1",
							type: "BTN_MAIN",
							options: {
								text: "CANCEL_PAYMENT",
								color: "RED_1",
								isFullWidth: true,
								click: cancelPay,
								isLoading: isUpdateCancel,
							},
						},
					],
				},
				type: "vert",
			},
		],
	};

	function insertSumDeposit() {
		Act.App.addModals("PRICE", (val) => val && createDeposit(val));
	}

	function insertWithdraw() {
		Act.App.addModals("WITHDRAW", (val) => createWithdraw(val));
	}

	function checkDeposit() {
		enabledUpdatingBtn();
		Act.Wallet.checkDeposit().then(startAwait).finally(disabledUpdatingBtn);
	}

	function createDeposit(amount: number) {
		enabledUpdatingBtn();
		Act.Wallet.createDeposit(amount).then(startAwait).finally(disabledUpdatingBtn);
	}

	function createWithdraw(tranche: WalletInterface.TTranche) {
		enabledUpdatingBtn();
		console.log(tranche);
		Act.Wallet.withdrawBalance(tranche).finally(disabledUpdatingBtn);
	}

	function startAwait(dep: WalletInterface.TCheckDeposit) {
		cancelAwait();
		if (!dep) return setDeposit(null);

		syncTime(dep.serverTime);
		setDeposit(dep);

		Act.Wallet.awaitPayDeposit(signal.current.signal).finally(clean);
	}

	function syncTime(start: number) {
		const date = Number(new Date());
		timeSync.current = date - start;
	}

	function timerTick() {
		if (!deposit || (depTimeLeft !== null && depTimeLeft <= 0)) return;

		const date = Date.now();
		const curServerDate = date - timeSync.current;
		const result = deposit.timeEnd - curServerDate;

		setDepTimeLeft(result < 0 ? 0 : result);
	}

	function clean() {
		timer.current && clearInterval(timer.current);
		timeSync.current = 0;

		setDeposit(null);
		setDepTimeLeft(null);
	}

	function cancelAwait() {
		signal.current.abort();
		signal.current = new AbortController();
	}

	function cancelPay() {
		enabledUpdatingCancel();
		Act.Wallet.removeDeposit().finally(disabledUpdatingCancel);
	}

	function textProp(text: string | number): IText {
		return { text, pos: "left" };
	}

	return { textProps, descProps, depositProps, btnPlusProps, btnMinusProps };
}

export default Model;
