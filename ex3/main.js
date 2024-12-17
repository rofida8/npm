import { Command } from "commander";
const program = new Command();

program.option("-n, --name <name>", "your name");

const options = program.opts();

program.parse();
console.log(`Hello ${options.name}`);
