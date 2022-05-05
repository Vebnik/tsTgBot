import * as tg from 'telegraf/types'
import {Deunionize} from "telegraf/typings/deunionize"
import { commandList } from '../nameSpace/commandList'
import {get, help} from './logic'
import {Telegraf} from "telegraf";


const parsCommand = (text: string): string => {
	return <string>commandList
		.map(el => text.match(`${el}`))
		.toString()
		.replace(/[ ,]/gu, '')
}

export const commandEvent = (ctx: Deunionize<tg.Update>, app: Deunionize<any>): void => {
	const content: Deunionize<tg.Message> = ctx.message

	switch (parsCommand(content.text)) {

		case 'get':
			get(ctx, content.text, app)
			break

		case 'help':
			help(ctx, app)
			break
	}
}