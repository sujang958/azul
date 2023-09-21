const f = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
]

const F_HASH: Record<string, string> = {
  ㄱ: "g",
  ㄲ: "k",
  ㄴ: "n",
  ㄷ: "d",
  ㄸ: "t",
  ㄹ: "r",
  ㅁ: "m",
  ㅂ: "b",
  ㅃ: "p",
  ㅅ: "s",
  ㅆ: "s",
  ㅇ: "",
  ㅈ: "j",
  ㅉ: "ch",
  ㅊ: "ch",
  ㅋ: "k",
  ㅌ: "t",
  ㅍ: "p",
  ㅎ: "h",
}

const S_HASH: Record<string, string> = {
  ㅏ: "a",
  ㅐ: "ai",
  ㅑ: "ya",
  ㅒ: "yai",
  ㅓ: "o",
  ㅔ: "e",
  ㅕ: "yo",
  ㅖ: "ie",
  ㅗ: "o",
  ㅘ: "wa",
  ㅙ: "ue",
  ㅚ: "ue",
  ㅛ: "yo",
  ㅜ: "u",
  ㅝ: "wo",
  ㅞ: "ue",
  ㅟ: "ui",
  ㅠ: "yu",
  ㅡ: "u",
  ㅢ: "ui",
  ㅣ: "i",
}

const s = [
  "ㅏ",
  "ㅐ",
  "ㅑ",
  "ㅒ",
  "ㅓ",
  "ㅔ",
  "ㅕ",
  "ㅖ",
  "ㅗ",
  "ㅘ",
  "ㅙ",
  "ㅚ",
  "ㅛ",
  "ㅜ",
  "ㅝ",
  "ㅞ",
  "ㅟ",
  "ㅠ",
  "ㅡ",
  "ㅢ",
  "ㅣ",
]

const t = [
  "",
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
]

const hangulRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi

export const doesContainHangul = (text: string) =>
  (text.match(hangulRegex) ?? []).length > 0

export const hangulToHepburnJapanese = (letters: string[]) => {
  const [firstLetter, secondLetter, thirdLetter] = letters

  let hepburn = ""

  if (firstLetter !== "ㅇ") hepburn += F_HASH[firstLetter] ?? ""
  if (secondLetter) hepburn += S_HASH[secondLetter] ?? ""
  if (thirdLetter) hepburn += "n" // TODO: 만약 촉음이 들어간 캐릭터가 생기면?

  return hepburn
}
