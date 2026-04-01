module.exports = {

  // ── command prefix ────────────────────────────────────
  PREFIX: '.',

  // ── bot identity ──────────────────────────────────────
  BOT_NAME: 'SACHITH CHANDRA',

  // ── your whatsapp number (no + sign) ──────────────────
  OWNER_NUMBER: '94717233347',

  // ── who can use the bot ───────────────────────────────
  // public | private | groups | inbox
  MODE: 'public',

  // ── auto read messages ────────────────────────────────
  READ_MESSAGE: 'false',

  // ── google gemini api key (optional) ─────────────────
  // get free key → https://aistudio.google.com
  // leave empty string '' if not using AI
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || '',

  // ── block countries (optional) ────────────────────────
  // leave as [] to allow all countries
  // add entry to block: { code: 'dialcode', name: 'Country', minLen: numberLength }
  BLOCK_COUNTRIES: [],

}
