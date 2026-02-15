import type { TPresent } from "../";
import { type TMoleculeRowControlCompType } from "../index.tsx";
import { Fragment, type ReactElement } from "react";
import AtomButtonIcon from "../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import AtomButtonMain from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import AtomInput from "../../../1.Atoms/AtomInput";
import Text from "../../../0.Cores/Text";
import Image from "../../../0.Cores/Image";
import AtomLoadRow from "../../../1.Atoms/AtomLoadRow";

const View: TPresent = ({ Model, Style }) => {
	const { compRow } = Model;

	function render({ type, options }: TMoleculeRowControlCompType): ReactElement {
		switch (type) {
			case "BTN_IMAGE":
				return <AtomButtonIcon {...options} />;
			case "BTN_MAIN":
				return <AtomButtonMain {...options} />;
			case "SPACING":
				return <div css={Style.pub.f1} />;
			case "INPUT":
				return <AtomInput {...options} />;
			case "TEXT":
				return <Text {...options} />;
			case "ICON":
				return <Image {...options} />;
			case "LOAD":
				return <AtomLoadRow {...options} />;
		}
	}

	return (
		<div css={Style.wrapper}>
			{compRow.map((el) => (
				<Fragment key={el.id}>{render(el)}</Fragment>
			))}
		</div>
	);
};

export default View;
