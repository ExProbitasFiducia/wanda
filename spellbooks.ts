import { dirname, sep, join } from "https://deno.land/std/path/mod.ts";


const pathForPart = (_, i, arr) => arr.slice(0, arr.length - i).join(sep);

export const generateSearchPaths = (searchDir = Deno.cwd()) => {
    if (!Deno.statSync(searchDir).isDirectory) {
        throw new Error(`${searchDir} is not a valid directory`);
    }
    return searchDir.split(sep).map(pathForPart);
};

const locateSpellbook = ([path, ...rest]: string[]) => {
    if (!path) {
        throw new Error(`There was a problem locating the spellbook. There may not be a spellbook in the current directory or any of its parents. Double check that a spellbook exists and then try again.`);
    }
    const spellbookPath = join(path, "spellbook.ts");
    try {
        // importing spellbook may fail, which is why we're in a try block here.
        return import(spellbookPath);
    } catch {
        return locate(rest)
    }
};

export const importSpellbook = async ({ lookupPath } = { lookupPath: Deno.cwd() }) => {
    const searchPaths = await generateSearchPaths(lookupPath);
    const { spellbook } = await locateSpellbook(searchPaths);
    return spellbook;
};
