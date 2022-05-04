
export class StartLogic {

	public app: any

	constructor(app: object) {
		this.app = app
	}

	public logIn(): object {
		console.log(`Bot stated on ${new Date().toISOString()} || ${this.app.name}`)
		return this.app.launch()
	}

}
