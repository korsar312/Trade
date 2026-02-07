export class Trigram {
	static execute() {
		return function <T>(
			list: readonly T[],
			query: string,
			extract: (item: T) => string,
			minMatchRatio = 0.15, // 0..1 (Jaccard)
			limit?: number,
		): T[] {
			const normalize = (s: string): string => {
				if (!s) return "";
				return s
					.normalize("NFKD")
					.replace(/\p{M}+/gu, "")
					.toLowerCase()
					.replace(/ё/g, "е")
					.replace(/\s+/g, " ")
					.trim();
			};

			const qn = normalize(query);
			if (!qn) return [...list];

			// short query => rank by first occurrence + length
			if (qn.length < 3) {
				const scored: Array<{ item: T; pos: number; len: number }> = [];
				for (const item of list) {
					const tn = normalize(extract(item));
					const pos = tn.indexOf(qn);
					if (pos !== -1) scored.push({ item, pos, len: tn.length });
				}
				scored.sort((a, b) => a.pos - b.pos || a.len - b.len);
				const out = scored.map((x) => x.item);
				return typeof limit === "number" ? out.slice(0, Math.max(0, limit)) : out;
			}

			const buildTrigrams = (s: string): string[] => {
				const t = normalize(s);
				if (!t) return [];
				const padded = `__${t}_`;
				const grams: string[] = [];
				for (let i = 0; i + 3 <= padded.length; i++) grams.push(padded.slice(i, i + 3));
				return grams;
			};

			const qSet = new Set<string>(buildTrigrams(qn));
			const qSize = qSet.size;
			if (qSize === 0) return [];

			const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
			const thr = clamp01(minMatchRatio);

			type Scored = {
				item: T;
				exact: boolean;
				jaccard: number;
				pos: number;
				len: number;
			};

			const scored: Scored[] = [];

			for (const item of list) {
				const tn = normalize(extract(item));
				if (!tn) continue;

				const pos = tn.indexOf(qn);
				const exact = pos !== -1;

				const grams = buildTrigrams(tn);
				if (grams.length === 0) continue;

				let inter = 0;
				const tSet = new Set<string>();
				for (let i = 0; i < grams.length; i++) {
					const g = grams[i];
					if (tSet.has(g)) continue;
					tSet.add(g);
					if (qSet.has(g)) inter++;
				}
				if (inter === 0 && !exact) continue;

				const union = qSize + tSet.size - inter;
				const jaccard = union > 0 ? inter / union : 0;

				if (exact || jaccard + 1e-12 >= thr) {
					scored.push({
						item,
						exact,
						jaccard: exact ? 1 : jaccard,
						pos: exact ? pos : Number.MAX_SAFE_INTEGER,
						len: tn.length,
					});
				}
			}

			scored.sort((a, b) => {
				if (a.exact !== b.exact) return a.exact ? -1 : 1;
				if (a.jaccard !== b.jaccard) return b.jaccard - a.jaccard;
				if (a.pos !== b.pos) return a.pos - b.pos;
				if (a.len !== b.len) return a.len - b.len;
				return 0;
			});

			const out = scored.map((x) => x.item);
			return typeof limit === "number" ? out.slice(0, Math.max(0, limit)) : out;
		};
	}
}
