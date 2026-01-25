import type Model from "./Model.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import TemplateModalFormChoiceManyParam from "../../../Components/Templates/TemplateModalFormChoiceManyParam";
import { Fragment, type ReactElement } from "react";
import type { AppInterface } from "../../../../Logic/Core/Services/ServiceApp/App.interface.ts";
import TemplateModalFormChoiceOneParam from "../../../Components/Templates/TemplateModalFormChoiceOneParam";
import TemplateModalFormChoicePriceParam from "../../../Components/Templates/TemplateModalFormChoicePriceParam";

const View: NFC<typeof Model> = (props) => {
	const { modalList, closeModal } = props;

	function renderModal(el: AppInterface.TModals, close: () => void): ReactElement {
		switch (el.type) {
			case "BANK":
				return <TemplateModalFormChoiceManyParam color={"MAIN_3"} type="bank" submitFn={el.successFn} bgClick={close} />;
			case "SORT":
				return <TemplateModalFormChoiceOneParam color={"MAIN_3"} type="sort" submitFn={el.successFn} bgClick={close} />;
			case "PRICE":
				return <TemplateModalFormChoicePriceParam color={"MAIN_3"} submitFn={el.successFn} bgClick={close} />;
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
