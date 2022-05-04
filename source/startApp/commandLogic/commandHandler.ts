import * as tg from 'telegraf/types'
import * as tt from 'telegraf/typings/telegram-types'
import {Deunionize} from "telegraf/typings/deunionize";

const parsCommand = (text: string): string => {

	return 'test'
}

export const commandEvent = (com: Deunionize<tg.Update>): void => {
	const content: Deunionize<tg.Message> = com.message

	switch (parsCommand(content.text)) {

		case 'get':

			break

		case 'help':

			break
	}
}