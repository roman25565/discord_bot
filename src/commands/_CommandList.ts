import { Command } from "../interfaces/Command";
import { edit } from "./edit";
import { help } from "./help";
import { oneHundred } from "./oneHundred";
import { view } from "./view";
import { hello } from "./hello";
import {button} from "./button"

export const CommandList: Command[] = [oneHundred, view, help, edit,hello,button];
