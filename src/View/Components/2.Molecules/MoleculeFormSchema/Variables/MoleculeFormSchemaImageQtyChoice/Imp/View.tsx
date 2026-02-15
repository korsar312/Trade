import type { TPresent } from "../";
import Component from "../../../";

const View: TPresent = ({ Model }) => {
	const { propsComponent } = Model;

	return <Component {...propsComponent} />;
};

export default View;
