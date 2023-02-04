import { access } from "fs"

type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods).reduce((acc, [className, value]) => value ? [...acc, className] : acc, [])
    ].join(' ')
}
