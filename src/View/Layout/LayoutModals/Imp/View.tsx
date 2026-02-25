import type { TPresent } from "../";
import { Fragment, type ReactElement } from "react";
import type { AppInterface } from "../../../../Logic/Domain/Services/ServiceApp/App.interface.ts";
import TemplateModalFormChoicePriceParam from "../../../Components/Templates/ModalForm/TemplateModalFormChoicePriceParam";
import TemplateModalFormChoiceBank from "../../../Components/Templates/ModalForm/TemplateModalFormChoiceBank";
import TemplateModalFormChoiceSort from "../../../Components/Templates/ModalForm/TemplateModalFormChoiceSort";
import TemplateModalFormChoiceRating from "../../../Components/Templates/ModalForm/TemplateModalFormChoiceRating";
import TemplateModalFormChoiceItemType from "../../../Components/Templates/ModalForm/TemplateModalFormChoiceItemType";
import TemplateModalFormYouSure from "../../../Components/Templates/ModalForm/TemplateModalFormYouSure";

const View: TPresent = ({ Model }) => {
	const { modalList, closeModal } = Model;

	function renderModal(el: AppInterface.TModals, close: () => void): ReactElement {
		const h2CClient = (val: unknown) => {
			(el.successFn as (v: unknown) => void)(val);
			closeModal(el.id);
		};

		switch (el.type) {
			case "BANK_MANY":
				return <TemplateModalFormChoiceBank color={"MAIN_3"} submitFn={h2CClient} bgClick={close} />;
			case "SORT":
				return <TemplateModalFormChoiceSort color={"MAIN_3"} submitFn={h2CClient} bgClick={close} />;
			case "PRICE":
				return <TemplateModalFormChoicePriceParam color={"MAIN_3"} submitFn={h2CClient} bgClick={close} />;
			case "RATING":
				return <TemplateModalFormChoiceRating color={"MAIN_3"} submitFn={h2CClient} bgClick={close} />;
			case "TYPE_ITEM":
				return <TemplateModalFormChoiceItemType color={"MAIN_3"} submitFn={h2CClient} bgClick={close} />;
			case "CONFIRM":
				return <TemplateModalFormYouSure color={"MAIN_3"} submitFn={h2CClient} bgClick={close} />;
		}
	}

	return (
		<>
			{modalList.map((el) => (
				<Fragment key={el.id}>{renderModal(el, () => closeModal(el.id))}</Fragment>
			))}
		</>
	);
};

export default View;
