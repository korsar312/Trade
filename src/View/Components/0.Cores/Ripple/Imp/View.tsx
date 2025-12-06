import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import { useEffect, useRef, useState } from "react";

type Ripple = { id: string; x: number; y: number; size: number };

const View: NFC<typeof Model> = () => {
	const [ripples, setRipples] = useState<Ripple[]>([]);
	const rippleContainer = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const node = rippleContainer.current?.parentElement;
		if (!node) return;
		const handler = (event: MouseEvent) => {
			const container = rippleContainer.current!;
			const rect = container.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = event.clientX - rect.left - size / 2;
			const y = event.clientY - rect.top - size / 2;
			setRipples((p) => [...p, { id: crypto.randomUUID(), x, y, size }]);
		};
		node.addEventListener("click", handler);
		return () => node.removeEventListener("click", handler);
	}, []);

	return (
		<div ref={rippleContainer} css={Style.wrapper}>
			{ripples.map((r) => (
				<span
					key={r.id}
					css={Style.rippleStyle}
					style={Style.rippleParam(r.x, r.y, r.size, r.size)}
					onAnimationEnd={() => setRipples((p) => p.filter((i) => i.id !== r.id))}
				/>
			))}
		</div>
	);
};

export default View;
