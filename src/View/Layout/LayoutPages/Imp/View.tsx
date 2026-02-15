import type { TPresent } from "../";
import { RouterProvider } from "react-router/dom";
import TemplateHead from "../../../Components/Templates/TemplateHead";
import TemplateFoot from "../../../Components/Templates/TemplateFoot";

const View: TPresent = ({ Model, Style }) => {
	const { router, isInit } = Model;

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
