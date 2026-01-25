import type Model from "./Model.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import { Fragment, type ReactElement } from "react";
import type { AppInterface } from "../../../../Logic/Core/Services/ServiceApp/App.interface.ts";
import TemplateModalFormChoicePriceParam from "../../../Components/Templates/TemplateModalFormChoicePriceParam";
import TemplateModalFormChoiceBank from "../../../Components/Templates/TemplateModalFormChoiceBank";
import TemplateModalFormChoiceSort from "../../../Components/Templates/TemplateModalFormChoiceSort";
import TemplateModalFormChoiceRating from "../../../Components/Templates/TemplateModalFormChoiceRating";

const View: NFC<typeof Model> = (props) => {
	const { modalList, closeModal } = props;

	function renderModal(el: AppInterface.TModals, close: () => void): ReactElement {
		switch (el.type) {
			case "BANK":
				return <TemplateModalFormChoiceBank color={"MAIN_3"} submitFn={el.successFn} bgClick={close} />;
			case "SORT":
				return <TemplateModalFormChoiceSort color={"MAIN_3"} submitFn={el.successFn} bgClick={close} />;
			case "PRICE":
				return <TemplateModalFormChoicePriceParam color={"MAIN_3"} submitFn={el.successFn} bgClick={close} />;
			case "RATING":
				return <TemplateModalFormChoiceRating color={"MAIN_3"} submitFn={el.successFn} bgClick={close} />;
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
