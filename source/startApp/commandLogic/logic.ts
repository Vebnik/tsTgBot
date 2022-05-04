import * as tg from 'telegraf/types'
import {Deunionize} from "telegraf/typings/deunionize";


const get = (ctx: Deunionize<tg.Update>): void => {

}

const help = (ctx: Deunionize<any>): void => {

	const helpMsg: string = `Привет!\nДля поиска картинки используй команду - get\n -> /get [pic name]`
	ctx.reply(helpMsg)

}

export { get, help }