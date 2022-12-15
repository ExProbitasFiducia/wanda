import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { generateSearchPaths } from "./spellbooks.ts";

Deno.test("generatePaths", () => {
    const generatedSearchPaths = generateSearchPaths("/usr/local/bin");
    console.log(generatedSearchPaths);
    assertEquals(generatedSearchPaths[0], "/usr/local/bin");
    assertEquals(generatedSearchPaths[1], "/usr/local");
    assertEquals(generatedSearchPaths[2], "/usr");
    assertEquals(generatedSearchPaths[3], "/");
});
