
export class StartLogic {

	public readonly app: any

	constructor(app: object) {
		this.app = app
	}

	public logIn(): void {
		this.app.launch().then(() => {
			console.log(`Bot: ${this.app.botInfo.first_name} Started ❗❗❗`)
		})
	}

	public eventHandler(): void {
		this.app.hears('test', (ctx: any): void => {
			ctx.reply('Reply 🎧')
		})
	}

}
