export interface Student {
  id: number
  isReleased: boolean
  isPlayable: boolean
  character: Character
  info: Info
  image: Image
  stat: Stat
  terrain: Terrain
  skills: Skills
}

export interface Character {
  name: string
  baseStar: number
  rarity: string
  armorType: string
  bulletType: string
  position: string
  role: string
  squadType: string
  weaponType: string
  profile: string
}

export interface Info {
  age: string
  birthDate: string
  height: string
  artist: string
  club: string
  school: string
  schoolYear: string
  voiceActor: string
}

export interface Image {
  icon: string
  lobby: string
  portrait: string
}

export interface Stat {
  id: number
  attackLevel1: number
  attackLevel100: number
  maxHPLevel1: number
  maxHPLevel100: number
  defenseLevel1: number
  defenseLevel100: number
  healPowerLevel1: number
  healPowerLevel100: number
  defPenetrateLevel1: number
  defPenetrateLevel100: number
  ammoCount: number
  ammoCost: number
  range: number
  moveSpeed: number
  streetMood: string
  outdoorMood: string
  indoorMood: string
}

export interface Terrain {
  urban: Urban
  outdoor: Outdoor
  indoor: Indoor
}

export interface Urban {
  DamageDealt: string
  ShieldBlockRate: string
}

export interface Outdoor {
  DamageDealt: string
  ShieldBlockRate: string
}

export interface Indoor {
  DamageDealt: string
  ShieldBlockRate: string
}

export interface Skills {
  ex: Ex[][]
  normal: Normal[][]
  passive: Passive[][]
  sub: Sub[][]
}

export interface Ex {
  id: number
  name: string
  description: string
}

export interface Normal {
  id: number
  name: string
  description: string
}

export interface Passive {
  id: number
  name: string
  description: string
}

export interface Sub {
  id: number
  name: string
  description: string
}
