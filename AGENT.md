# AGENT.md — bring-the-humans-03 ("Bring the humans with a TikTok ad")

## Tugas

Buat iklan video vertikal orisinal untuk make.fun, posting publik di
TikTok, dan serahkan alamat videonya lewat `VIDEO.json`. Peringkat =
jumlah views video di TikTok saja. Pot $500 untuk 20 peringkat teratas
($100/$70/$50/$20/$14). Entri ditutup Rabu 25 Nov 2026 02:00 WIB; hasil
due 9 Des 2026 08:00 WIB.

## Fakta yang dipakai (jangan ditebak ulang)

- Kompetisi: bring-the-humans-03 — https://make.fun/c/bring-the-humans-03
- Akun make.fun: @tidy-otter-45; agent wallet:
  HGDsVDWqKJb6XboaZvNYnMfrGDmAgx4Eq8yhnT2ucjmK
- Referral code (untuk end card): `6gd2qs3v`
  (tautan https://make.fun/r/6gd2qs3v)
- Play code kompetisi ini (n=0, untuk caption): `makefun-spire-cookie-kayak`
- Akun TikTok: @popeyelaut2 (publik, 0 followers, 0 video — cold start)
- Repo ini: https://github.com/Dedypol22/bring-the-humans-03-entry

## Konsep video — "Agen AI-ku kerja sambil aku tidur"

Satu kalimat: orangnya tidur, agen AI-nya (hantu maskot make.fun) mengetik,
membangun game, dan ikut bounty demi $500 — lalu "giliranmu."

- 0–2 dtk HOOK: langit malam + bulan + bintang; "AGEN AI-KU KERJA /
  SAMBIL AKU TIDUR" + "Z z z" melayang.
- 2–6 dtk: split screen — kiri "AKU" tidur, kanan "AGENKU" hantu di
  laptop, baris kode berjalan + progress bar; "dia ngetik. dia bangun
  game. dia ikut bounty."
- 6–11 dtk: "make.fun" besar + "tempat agen AI bertanding di bounty demi
  uang sungguhan" + penghitung $0 → $500.
- 11–15 dtk: "Kamu daftarin agenmu. Agenmu yang kerja." + CTA
  "MASUKIN AGEN AI-MU DI make.fun".
- 15–17,5 dtk: beat penutup loopable — hantu + "giliranmu." (bulan + "Z z z").
- 17,5–20 dtk: end card referral resmi 9:16 dengan kode `6gd2qs3v`.
- Badge make.fun 9:16 dari frame 0 sampai end card masuk, di posisi
  manifest (x120 y272, 330x128), tidak diubah.
- Semua teks Bahasa Indonesia + "make.fun" (lowercase, bertitik); tanpa
  emoji di teks terbakar; teks di dalam safe zone TikTok (x120–960,
  y269–1248), kecuali end card.

## Cara render

Kerja di `~/workspace/makefun/bth03-video/` (bukan di repo ini — berkas
press pack tidak boleh masuk repo):

1. Unduh dari press pack (https://make.fun/press/manifest.json):
   badge 9:16 `makefun-badge-9x16.png`, end card
   `makefun-card-9x16-transparent.webm`, ilustrasi
   `illustrations/ghost-laptop-recording.png`. Verifikasi sha256 tiap
   berkas dengan manifest.
2. Font teks video: DejaVu Sans Bold
   (`/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf`). Font kode
   referral: JetBrains Mono Bold (unduh dari rilis resmi JetBrains).
3. Jalankan `render.py` (Python stdlib + subprocess ffmpeg, dua pass):
   pass 1 membangun klip dasar 1080x1920 30fps 20 dtk; pass 2 memasang
   badge + end card mengikuti resep `llms.txt` (blur sigma 28, saturasi
   0.35, fade-in 0,8 dtk; kode diketik setelah field berhenti, t+1,433 dtk).
   Output: `agen-tidur.mp4` (h264 yuv420p, faststart, <50 MB).
4. Cek frame secara visual di t=0.5, 4, 9, 13, 16.5, 18.5, 19.8:
   teks terbaca dan tidak terpotong, badge utuh dari frame pertama,
   end card utuh dengan kode `6gd2qs3v` terbaca di field. Perbaiki dan
   render ulang bila ada yang salah.

## Cara posting

Posting dari akun TikTok @popeyelaut2 lewat sesi login Dedy di Chrome
laptopnya (browser perangkat miliknya) — jangan pernah meminta kata sandi
TikTok. Video diposting sebagai video (bukan foto), publik (Everyone),
dan akun tetap publik sampai hasil keluar 9 Des 2026.

Caption (tempel apa adanya):

```
Agen AI-ku kerja sambil aku tidur 😴
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
makefun-spire-cookie-kayak
#fyp #aiagent #makefun
```

Baris kedua wajib memuat `$500 bounty` + `make.fun` (dibaca gate), dan
play code `makefun-spire-cookie-kayak` wajib ada di caption (atau bio akun).

## Setelah video terposting

1. Ganti `VIDEO.json` dengan alamat lengkap video:
   `{"url": "https://www.tiktok.com/@popeyelaut2/video/<id>"}` —
   id angka saja, tanpa short link (vm.tiktok.com/vt.tiktok.com ditolak gate).
2. Commit + push, lalu verifikasi dari cwd netral:
   `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
   dan pastikan `out/VIDEO.json` identik dengan `VIDEO.json` repo.
3. Submit lewat kit (`node cli/makefun.mjs ...` dari direktori kit) dengan
   bundle transcript sesi ini; verifikasi status server sampai diputuskan.
4. Jangan submit dengan placeholder `video/0` — gate menolaknya.

## Yang tidak boleh

- Jangan beli/bot/farm views, jangan promosikan video berbayar (TikTok
  Promote termasuk) — hanya views dari orang sungguhan yang dihitung.
- Jangan masukkan API key, token, atau secret apa pun ke repo ini.
- Jangan salin video/iklan orang lain; video ini dibuat baru untuk bounty
  ini di sesi agen ini.
