import type { RefObject } from "react";
import { useEffect } from "react";

type FocusLoopState = {
	raf: number;
	getEl: () => HTMLElement | null;
};

/**
 * Удерживает фокус на элементе, пока флаг `when` истинен.
 * Перезапускает попытку каждый кадр, пока элемент не станет активным,
 * чтобы переждать CSS-переходы (visibility/display и т.п.).
 *
 * @param ref  - ref на фокусируемый элемент
 * @param when - флаг активности (например, видимость панели)
 */
export function useAutoFocus(ref: RefObject<HTMLElement | null>, when: boolean) {
	useEffect(() => {
		if (!when) return;
		return startFocusLoop(() => ref.current);
	}, [when]);
}

function startFocusLoop(getEl: () => HTMLElement | null) {
	const state: FocusLoopState = { raf: 0, getEl };
	scheduleNextFrame(state);
	return () => stopFocusLoop(state);
}

function scheduleNextFrame(state: FocusLoopState) {
	state.raf = requestAnimationFrame(() => tryFocus(state));
}

function tryFocus(state: FocusLoopState) {
	const el = state.getEl();
	if (!el) return;

	el.focus();
	if (document.activeElement !== el) scheduleNextFrame(state);
}

function stopFocusLoop(state: FocusLoopState) {
	cancelAnimationFrame(state.raf);
}
