class VariablesVars {
	private _timeFastTransition = 0.25;

	public get timeFastTransition() {
		return this._timeFastTransition + "s";
	}

	public get timeTransition() {
		return this._timeFastTransition + "s";
	}

	public transition = "0.5s ease-in-out";
	public fastTransition = `${this.timeFastTransition} ease-in-out`;
	public soTransition = `${this.timeTransition} ease-in-out`;

	public radiusStandard = 6;
	public scrollSize = 4;
}

const Variables = new VariablesVars();
export default Variables;
