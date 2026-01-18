import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import { RouterProvider } from "react-router/dom";
import TemplateHead from "../../../Components/Templates/TemplateHead";
import TemplateFoot from "../../../Components/Templates/TemplateFoot";

const View: NFC<typeof Model> = (props) => {
	const { router, isInit } = props;

	function content() {
		return (
			<>
				<TemplateHead />

				<div css={Style.page}>
					<RouterProvider router={router} />
				</div>

				<TemplateFoot />
			</>
		);
	}

	return (
		<div css={Style.wrapper}>
			<div css={Style.content}>{isInit && content()}</div>
		</div>
	);
};

export default View;
