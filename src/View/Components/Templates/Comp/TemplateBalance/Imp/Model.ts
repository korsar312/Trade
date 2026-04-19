import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import type { TComponent as IProp } from "../../../../3.Substances/SubstanceDescMap";
import type { TComponent as IText } from "../../../../0.Cores/Text";
import type { TComponent as IBtn } from "../../../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import type { WalletInterface } from "../../../../../../Logic/Domain/Services/ServiceWallet/Wallet.interface.ts";
import { useEffect, useRef, useState } from "react";
import { useUpdate } from "../../../../../../Logic/Libs/Hooks/useUpdate/useUpdate.ts";
import type { TMoleculeRowControlCompType } from "../../../../2.Molecules/MoleculeRowControl";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const balance = Act.Wallet.getBalance();
	const hold = Act.Wallet.getHold();

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
				key: {
					compRow: [
						{ id: "icon", type: "ICON", options: { img: "Money", color: "BLUE_3" } },
						keyPublic({ text: "BALANCE_INFO" }),
					],
				},
			},
			{
				id: "2",
				key: { compRow: [keyPublic({ text: "BALANCE" })] },
				value: { compRow: [textProp({ text: balance })] },
			},
			{
				id: "3",
				key: { compRow: [keyPublic({ text: "HOLD" })] },
				value: { compRow: [textProp({ text: hold })] },
			},
			{
				id: "4",
				key: { wrapper: { pos: "center" }, compRow: [keyPublic({ text: "LINKED_WALLETS" })] },
				value: {
					compRow: [{ id: "0", type: "BTN_MAIN", options: { text: "ADD", color: "MAIN_3", isFullWidth: true } }],
				},
				type: "vert",
			},
		],
	};

	const depositProps: IProp | null = deposit && {
		rows: [
			{
				id: "1",
				key: {
					compRow: [
						keyPublic({
							text: "DEP_INSTRUCTION",
							addContent: [deposit.amount],
							addStyle: [
								{ color: Act.Style.getColor("RED_3") },
								{ color: Act.Style.getColor("RED_3") },
								{ color: Act.Style.getColor("RED_3") },
							],
						}),
					],
				},
			},
			{
				id: "2",
				key: { compRow: [keyPublic({ text: "ADDRESS" })] },
				value: { compRow: [textProp({ text: deposit.address, isBreakLine: true })] },
			},
			{
				id: "3",
				key: { compRow: [keyPublic({ text: "SUM" })] },
				value: { compRow: [textProp({ text: deposit.amount })] },
			},
			{
				id: "4",
				key: { compRow: [keyPublic({ text: "TIME_LEFT" })] },
				value: { compRow: [textProp({ text: Math.floor((depTimeLeft || 0) / 1000) })] },
			},
			{
				id: "5",
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

	function keyPublic(edit: IText): TMoleculeRowControlCompType {
		return { id: "0", type: "TEXT", options: { color: "SECOND_2", ...edit } };
	}

	function textProp(edit: IText): TMoleculeRowControlCompType {
		return { id: "0", type: "TEXT", options: { pos: "left", ...edit } };
	}

	return { descProps, depositProps, btnPlusProps, btnMinusProps };
}

export default Model;
