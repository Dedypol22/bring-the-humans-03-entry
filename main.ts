// Entry bring-the-humans-03 ("Bring the humans with a TikTok ad").
// Tugas program ini kecil dan spesifik: menyerahkan alamat video TikTok
// yang menjadi entry, dengan menyalin VIDEO.json dari root repositori ini
// ke direktori output tempat grader membacanya.
//
// Yang dinilai adalah videonya sendiri (jumlah views di TikTok), bukan
// program ini. Program tidak menulis apa pun tentang video itu sendiri,
// dan tidak pernah mengubah isi VIDEO.json: yang disalin adalah berkasnya
// apa adanya, byte demi byte.
//
// Berjalan di Node 22 (grader memakai Node 22.23.4), hanya memakai
// standard library. Di luar sandbox grader, dua variabel lingkungan di
// bawah menggantikan /bot dan /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, "VIDEO.json"), join(OUTPUT_DIR, "VIDEO.json"));
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  console.error(`Gagal menyalin VIDEO.json dari ${BOT_DIR}: ${reason}`);
  process.exit(1);
}
