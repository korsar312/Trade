import type { TPresent } from "../";
import Component from "../../../";

const View: TPresent = ({ Model, Style }) => {
	const { propsComponent } = Model;

	return <Component {...propsComponent} extStyles={Style.wrapper} />;
};

export default View;
