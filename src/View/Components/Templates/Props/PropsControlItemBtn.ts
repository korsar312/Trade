import type { TComponent as TProps } from "../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import type { ProjectInterface } from "../../../../Logic/Core/DI/Project.interface.ts";
import Util from "../../../../Logic/Libs/Util";

type TComponent = {
	id: string;
} & Partial<TProps>;

type TBtn = TProps & { id: string };

function Template(Act: ProjectInterface.TActService, props: TComponent): TBtn[] {
	const { id, ...rest } = props;

	const sellerIsUser = Act.Listing.getSellerId(id) === Act.User.getId();
	const price = Act.Listing.getPrice(id) || Infinity;
	const userBalance = Act.Wallet.getBalance();
	const priceFormat = Util.toMoney(price);

	const mainBtn: TProps = { isFullWidth: true, ...rest };

	function goItem() {
		Act.Router.goTo("DEAL", { id });
	}

	function buyItem() {
		Act.Payment.buyLot(id).then(goItem).finally(Act.Wallet.refreshBalance);
	}

	function cancelItem() {
		Act.Payment.buyLot(id).then(goItem).finally(Act.Wallet.refreshBalance);
	}

	function freezeItem() {}

	function runItem() {}

	function cancelModal() {
		cancelItem();
	}

	function buyModal() {
		Act.App.addModals("CONFIRM", (val) => val && buyItem());
	}

	function btnFreeze(): TBtn {
		const isDisable = price > userBalance;

		return { id: "run", color: "MAIN_4", click: freezeItem, isDisable, leftImage: "Pause", ...mainBtn };
	}

	function btnRun(): TBtn {
		const isDisable = price > userBalance;

		return { id: "run", color: "BLUE_2", click: runItem, isDisable, leftImage: "Play", ...mainBtn };
	}

	function btnCancel(): TBtn {
		const isDisable = price > userBalance;

		return { id: "cancel", color: "RED_1", click: cancelModal, isDisable, leftImage: "Remove", ...mainBtn };
	}

	function btnFreezeToggle(): TBtn {
		const isDisable = !true;

		return isDisable ? btnFreeze() : btnRun();
	}

	function btnBuy(): TBtn {
		const isDisable = price > userBalance;

		return { id: "buy", text: priceFormat, color: "BLUE_2", click: buyModal, isDisable, ...mainBtn };
	}

	return sellerIsUser ? [btnFreezeToggle(), btnCancel()] : [btnBuy()];
}

export default Template;
