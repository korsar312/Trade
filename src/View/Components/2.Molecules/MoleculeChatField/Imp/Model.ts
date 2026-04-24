import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useEffect, useLayoutEffect, useRef } from "react";

function Model({ Props }: TModel<TComponent>) {
	const { textRow } = Props;

	const wrapRef = useRef<HTMLDivElement>(null);
	const wasAtBottomRef = useRef(true);
	const isAutoScrollingRef = useRef(false);

	useLayoutEffect(() => {
		const container = wrapRef.current?.parentElement ?? null;
		const isLastSend = textRow.at(-1)?.type === "send";
		const shouldScroll = wasAtBottomRef.current || isLastSend;

		if (container && shouldScroll) scrollToBottom(container);
	}, [textRow.length]);

	useEffect(() => {
		const scrollContainer = wrapRef.current?.parentElement ?? null;
		if (!scrollContainer) return;

		wasAtBottomRef.current = checkAtBottom(scrollContainer);
		const onScroll = () => handleScroll(scrollContainer);

		scrollContainer.addEventListener("scroll", onScroll);
		scrollContainer.addEventListener("wheel", autoScrollDisable, { passive: true });
		scrollContainer.addEventListener("touchstart", autoScrollDisable, { passive: true });

		return () => {
			scrollContainer.removeEventListener("scroll", onScroll);
			scrollContainer.removeEventListener("wheel", autoScrollDisable);
			scrollContainer.removeEventListener("touchstart", autoScrollDisable);
		};
	}, []);

	function checkAtBottom(container: HTMLElement): boolean {
		const { scrollTop, scrollHeight, clientHeight } = container;
		if (scrollHeight <= clientHeight) return true;

		return scrollHeight - scrollTop - clientHeight < 1;
	}

	function handleScroll(scrollContainer: HTMLElement) {
		const isBottom = checkAtBottom(scrollContainer);

		if (isAutoScrollingRef.current) {
			if (!isBottom) return;

			isAutoScrollingRef.current = false;
			wasAtBottomRef.current = true;
		} else wasAtBottomRef.current = isBottom;
	}

	function autoScrollDisable() {
		isAutoScrollingRef.current = false;
	}

	function scrollToBottom(container: HTMLElement) {
		isAutoScrollingRef.current = true;
		container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
	}

	return { wrapRef, ...Props };
}

export default Model;
