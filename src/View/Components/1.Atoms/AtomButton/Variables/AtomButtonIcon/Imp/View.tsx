import type { TPresent } from "../";
import Component from "../../../";

const View: TPresent = ({ Model, Style }) => {
	const { propsComponent, isBig } = Model;

	return <Component {...propsComponent} extStyles={Style.wrapper(isBig)} />;
};

export default View;
