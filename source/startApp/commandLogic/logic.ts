import * as tg from 'telegraf/types'
import {Deunionize} from "telegraf/typings/deunionize"
import { search } from '../../searchEngine/search'


const get = (ctx: Deunionize<tg.Update>, content: string): void => {
	const clearCont: string = content.replace(/\/get|\/get /g, '')
	console.log(clearCont)
}

const help = (ctx: Deunionize<any>): void => {

	const helpMsg: string = `Привет!\nДля поиска картинки используй команду - get\n -> /get [pic name]`
	ctx.reply(helpMsg)

}

export { get, help }