import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { onClick, checked, disabled, name, extStyles } = props;

	return (
		<input
			readOnly
			name={name}
			disabled={disabled}
			onClick={onClick}
			checked={checked || false}
			type="checkbox"
			css={[Style.wrapper, extStyles]}
		/>
	);
};

export default View;
