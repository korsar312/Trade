#!/usr/bin/env ts-node
/// <reference types="node" />

import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";
import * as process from "node:process";
import { fileURLToPath } from "node:url";

type DirKey = 0 | 1 | 2 | 3;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CATALOGS: Record<DirKey, string> = {
	0: "0.Cores",
	1: "1.Atoms",
	2: "2.Molecules",
	3: "3.Substances",
};

function withPrefix(dirKey: DirKey, baseName: string): string {
	if (dirKey === 0) return baseName;
	if (dirKey === 1) return `Atom${baseName}`;
	if (dirKey === 2) return `Molecule${baseName}`;
	return `Substance${baseName}`;
}

async function prompt(question: string): Promise<string> {
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
	const answer = await new Promise<string>((resolve) => rl.question(question, resolve));
	rl.close();
	return answer.trim();
}

function ensureDirExists(dirPath: string, humanName: string) {
	if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
		console.error(`Ошибка: каталог "${humanName}" не найден рядом со скриптом: ${dirPath}`);
		process.exit(1);
	}
}

function copyDirRecursiveSync(src: string, dest: string) {
	// Node 16.7+ имеет fs.cpSync
	if ((fs as any).cpSync) {
		(fs as any).cpSync(src, dest, { recursive: true, force: false, errorOnExist: false });
		return;
	}
	// Фолбэк
	const stat = fs.statSync(src);
	if (stat.isDirectory()) {
		fs.mkdirSync(dest, { recursive: true });
		for (const entry of fs.readdirSync(src)) {
			const s = path.join(src, entry);
			const d = path.join(dest, entry);
			const st = fs.statSync(s);
			if (st.isDirectory()) copyDirRecursiveSync(s, d);
			else fs.copyFileSync(s, d);
		}
	} else {
		const parent = path.dirname(dest);
		fs.mkdirSync(parent, { recursive: true });
		fs.copyFileSync(src, dest);
	}
}

async function main() {
	// 1) Выбор каталога
	const dirAnswer = await prompt("Выберите каталог:\n0 → 0.Cores\n1 → 1.Atoms\n2 → 2.Molecules\n3 → 3.Substances\n> ");
	if (!/^[0-3]$/.test(dirAnswer)) {
		console.error("Ошибка: нужно ввести 0, 1, 2 или 3.");
		process.exit(1);
	}
	const dirKey = Number(dirAnswer) as DirKey;
	const targetCatalogName = CATALOGS[dirKey];

	// 2) Имя компонента
	const baseName = await prompt("Укажите имя компонента (например, Grid): ");
	if (!baseName || !/^[A-Za-z][A-Za-z0-9_]*$/.test(baseName)) {
		console.error("Ошибка: имя должно начинаться с буквы и содержать только A-Z, a-z, 0-9, _");
		process.exit(1);
	}
	const finalName = withPrefix(dirKey, baseName[0].toUpperCase() + baseName.slice(1));

	// 3) Пути
	const targetCatalogPath = path.join(__dirname, `../${targetCatalogName}`);
	const examplePath = path.join(__dirname, "Example");

	ensureDirExists(targetCatalogPath, targetCatalogName);
	ensureDirExists(examplePath, "Example");

	// 4) Папка назначения
	const componentRoot = path.join(targetCatalogPath, finalName);
	if (fs.existsSync(componentRoot)) {
		console.error(`Ошибка: папка уже существует: ${componentRoot}`);
		process.exit(1);
	}

	// 5) Копирование Example -> <Каталог>/<FinalName>
	fs.mkdirSync(componentRoot, { recursive: true });
	copyDirRecursiveSync(examplePath, componentRoot);

	console.log("Готово.");
	console.log(`Каталог: ${targetCatalogName}`);
	console.log(`Компонент: ${finalName}`);
	console.log(`Путь: ${componentRoot}`);
}

main().catch((e) => {
	console.error("Неожиданная ошибка:", e?.message ?? e);
	process.exit(1);
});
