import type { FC } from "react";
import type { TAct } from "./Init.ts";

type ModelOf<M extends (...args: any[]) => any> = ReturnType<M>;

export type TView<M extends (...args: any[]) => any, S> = FC<{ Model: ModelOf<M>; Style: S }>;
export type TModel<PROPS> = { Props: PROPS; Act: TAct };

class ComponentConstructor {
	constructor(private readonly Act: TAct) {}

	public Create<PROPS, S = unknown, R = unknown>(
		ModelFn: (params: TModel<PROPS>) => R,
		StyleFn: S,
		ViewFn: TView<(params: TModel<PROPS>) => R, S>,
		_Name: string,
	): FC<PROPS> {
		return (props: PROPS) => {
			const Model = ModelFn({ Props: props, Act: this.Act });

			return <ViewFn Model={Model} Style={StyleFn} />;
		};
	}
}
export default ComponentConstructor;
