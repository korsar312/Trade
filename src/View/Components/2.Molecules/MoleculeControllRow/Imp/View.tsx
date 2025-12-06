import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomButtonIcon from "../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import Text from "../../../0.Cores/Text";

const View: NFC<typeof Model> = (props) => {
	const { btnLeft, btnRight, title } = props;

	return (
		<div css={Style.wrapper}>
			<div css={Style.btn}>{btnLeft && <AtomButtonIcon {...btnLeft} />}</div>

			<div css={Style.text}>{title && <Text {...title} />}</div>

			<div css={Style.btn}>{btnRight && <AtomButtonIcon {...btnRight} />}</div>
		</div>
	);
};

export default View;
