import { parse } from "https://deno.land/std/flags/mod.ts";
import { importSpellbook } from "./spellbooks.ts";

type Spellbook = Record<string, any>;

export const readSpell = ({ incantation, spellbook }: {
    incantation: any;
    spellbook: Spellbook;
}) => {
    try {
        return incantation.reduce(Reflect.get, spellbook);
    } catch {
        return spellbook.default;
    }
};

export const cast = async () => {
    const { _: incantation, ...enchantments } = parse(Deno.args);
    const spellbook = await importSpellbook();
    const invocation = readSpell({ incantation, spellbook });
    if (typeof invocation !== "function") {
        throw new Error(`Can't cast "${incantation.join("-")}". couldn't find that spell in the spellbook.`);
    }
    await invocation(enchantments);
};

if (import.meta.main) {
    await cast();
}
