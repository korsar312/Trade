import type { TPresent } from "../";

const View: TPresent = ({ Model, Style }) => {
	const { handleSubmit, children, id, ref } = Model;

	return (
		<form css={Style.wrapper} ref={ref} onSubmit={handleSubmit} id={id}>
			{children}
		</form>
	);
};

export default View;
