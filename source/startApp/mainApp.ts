// imports
import {Telegraf} from 'telegraf'
import { auth } from './nameSpace/auth'
import { StartLogic } from './startLogic'
// Construct
const app: object = new Telegraf(auth.token)
const appLogic: any = new StartLogic(app)


// Logic
appLogic.logIn()