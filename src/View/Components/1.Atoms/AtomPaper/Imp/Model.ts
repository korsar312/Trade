import type { IComponent } from "../";

function Model(props: IComponent) {
	const { extStyle, color, children, onClick, isFull } = props;

	return { extStyle, color, children, onClick, isFull };
}

export default Model;
