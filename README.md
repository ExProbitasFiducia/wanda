# Wanda

wanda is a simple command line utility for running typescript scrips with [Deno](https://deno.land).

## Installation

To install wanda's cli utility, `cast`, run the following command:

```
deno install -A cast.ts
```

This will download `cast.ts` and make it available globally as th `cast` command.

## Usage

To run a script using cast, simply use the cast command, followed by the incantation of the spell you'd like to cast, and any enchantments you'd like to provide to that spell.

```
cast <spell>
```

if your spellbook contains a nested spellbook, you can cast your spell with a nested incantation:
```
cast <spellbook> <spell>
```


Using an ENV variable to specify a spellbook

Wanda works great with autoenv. Simlply specify SPELLBOOK_PATH in a .env file, and wanda will cast spells from that spellbook automatically when you change to that directory or one of it's children.



