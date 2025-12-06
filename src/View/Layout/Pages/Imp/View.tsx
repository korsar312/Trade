import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import { RouterProvider } from "react-router/dom";
import TemplateHead from "../../../Components/4.Templates/TemplateHead";

const View: NFC<typeof Model> = (props) => {
	const { router } = props;

	return (
		<div css={Style.wrapper}>
			<TemplateHead />
			<RouterProvider router={router} />
		</div>
	);
};

export default View;
