import {Telegraf, Telegram} from 'telegraf'
import { Deunionize } from 'telegraf/typings/deunionize'
import { search } from '../../searchEngine/search'


const get = (ctx: Deunionize<any>, content: string, app: Deunionize<Telegraf>): void => {
	const clearCont: string = content.replace(/\/get /g, '')
	const chatId: number = ctx.message.chat.id


	search(clearCont).then((data: any) => {
		const totalPic: number = data.estTotal
		const nextCursor: string = data.nextCursor
		const arrPic: Array<object> = data.deviations

		ctx.reply(`🔍 Total pic find: ${totalPic}`)

		try {
			arrPic.forEach((el: any, index: number) => {
				if (index > 10) return false

				const picUrl: string = el.url
				app.telegram.sendPhoto(chatId, picUrl).catch(err => console.error(err))
			})
		} catch (err) {
			console.error(err)
		}
	})
}

const help = (ctx: Deunionize<any>, app: Deunionize<Telegraf>): void => {
	const helpMsg: string = `👋 Привет!\nДля поиска картинки используй команду - get\n ➡ /get [pic name]`

	ctx.reply(helpMsg)
}

export { get, help }