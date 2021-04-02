import { ActionLabel, ChessName } from "../types"
import { getColor, getCoord, getNumber } from "./coord"

export function resolvePrefix(cmd: string) {
  if (cmd.length !== 2) {
    throw new Error(`resolvePrefix: Unexpected Size of cmd: ${cmd}`)
  }

  const [name, co] = cmd.split('')

  if ('前后一二三四五'.includes(name)) {

    return {
      name: co as ChessName,
    }
  }

  return {
    name: name as ChessName,
    color: getColor(co),
    x: getCoord(co),
  }
}

export function resolveSuffix(cmd: string) {
  if (cmd.length !== 2) {
    throw new Error(`resolveSuffix: Unexpected Size of cmd: ${cmd}`)
  }

  const [label, co] = cmd.split('')

  return {
    co: getNumber(co),
    color: getColor(co),
    label: label as ActionLabel,
  }
}

export function resolveCommand(cmd: string) {
  if (cmd.length !== 4) {
    throw new Error(`resolveSuffix: Unexpected Size of cmd: ${cmd}`)
  }
  return {
    prefix: cmd.substr(0, 2),
    suffix: cmd.substr(2, 2),
  }
}
