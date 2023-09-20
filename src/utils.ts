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

export const getConstantVowel = (kor: string) => {
  const ga = 44032
  let uni = kor.charCodeAt(0)

  uni = uni - ga

  let fn = uni / 588
  let sn = (uni - fn * 588) / 28
  let tn = uni % 28

  return {
    f: f[fn],
    s: s[sn],
    t: t[tn],
  }
}

const hangulRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi

export const doesContainHangul = (text: string) =>
  (text.match(hangulRegex) ?? []).length > 0

export const hangulToHepburnJapanese = (letter: string) => {
  const components = getConstantVowel(letter)

  let hepburn = ""

  hepburn = F_HASH[components.f]
  hepburn = S_HASH[components.s]

  if (hepburn.includes("y") && hepburn.includes("j"))
    hepburn = hepburn.replace("y", "")
  if (components.t) hepburn += "n"

  return letter
}
