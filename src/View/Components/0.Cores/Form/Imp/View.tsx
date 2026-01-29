import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { handleSubmit, children, id } = props;

	return (
		<form css={Style.wrapper} onSubmit={handleSubmit} id={id}>
			{children}
		</form>
	);
};

export default View;
