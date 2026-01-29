/**
 * Генератор Id
 */
export class IdGen {
	static execute() {
		return function (prefix = "", start = 0) {
			const g = _idGen(prefix, start);
			return () => g.next().value;
		};
	}
}

function* _idGen(prefix = "", start = 0): Generator<string, never, never> {
	let i = start;
	while (true) yield `${prefix}${i++}`;
}
