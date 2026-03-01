import type { TComponent as TProps } from "../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import Util from "../../../../Logic/Libs/Util";
import type { ProjectInterface } from "../../../../Logic/Core/DI/Project.interface.ts";

type TComponent = {
	id: string;
} & Partial<TProps>;

function Template(Act: ProjectInterface.TActService, props: TComponent): TProps {
	const { id, ...rest } = props;

	const price = Act.Catalogue.getPrice(id) || Infinity;
	const userBalance = Act.Wallet.getBalance();
	const priceFormat = Util.toMoney(price);
	const isDisable = price > userBalance;

	function click() {
		Act.App.addModals("CONFIRM", buyItem);
	}

	function buyItem() {
		Act.Payment.buyLot(id).then(goItem).finally(Act.Wallet.refreshBalance);
	}

	function goItem() {
		Act.Router.goTo("INFO");
	}

	return { text: priceFormat, isFullWidth: true, color: "BLUE_2", click, isDisable, ...rest };
}

export default Template;
