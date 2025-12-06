import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { handleSubmit, children } = props;

	return (
		<form css={Style.wrapper} onSubmit={handleSubmit}>
			{children}
		</form>
	);
};

export default View;
