/**
 * Поиск в 3 буквы
 */
export class Trigram {
	static execute() {
		return function <T>(list: readonly T[], query: string, extract: (item: T) => string, minMatchRatio = 0): T[] {
			const q = query.trim().toLowerCase();
			if (!q) return [...list];

			const buildGrams = (s: string): string[] => {
				const t = s.trim().toLowerCase();
				if (!t) return [];
				if (t.length < 3) return [t];
				const grams: string[] = [];
				for (let i = 0; i <= t.length - 3; i++) grams.push(t.slice(i, i + 3));
				return grams;
			};

			if (q.length < 3) {
				return list.filter((item) => extract(item)?.toLowerCase().includes(q));
			}

			const qSet = new Set(buildGrams(q));
			if (qSet.size === 0) return [...list];

			const gramsCache = new Map<string, Set<string>>();

			const getTextSet = (textRaw: string): Set<string> => {
				const text = textRaw.trim().toLowerCase();
				if (!text) return new Set();
				const cached = gramsCache.get(text);
				if (cached) return cached;
				const s = new Set(buildGrams(text));
				gramsCache.set(text, s);
				return s;
			};

			return list.filter((item) => {
				const textRaw = extract(item);
				if (!textRaw) return false;

				const tSet = getTextSet(textRaw);
				if (tSet.size === 0) return false;

				let inter = 0;
				for (const g of qSet) if (tSet.has(g)) inter++;

				if (minMatchRatio <= 0) return inter > 0;

				const union = qSet.size + tSet.size - inter;
				const score = union === 0 ? 0 : inter / union;

				return score >= minMatchRatio;
			});
		};
	}
}
