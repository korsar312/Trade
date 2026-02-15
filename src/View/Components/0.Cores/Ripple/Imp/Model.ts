import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useEffect, useRef, useState } from "react";

type Ripple = { id: string; x: number; y: number; size: number };

function Model({ Props }: TModel<TComponent>) {
	const {} = Props;

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

	return { rippleContainer, ripples, setRipples };
}

export default Model;
