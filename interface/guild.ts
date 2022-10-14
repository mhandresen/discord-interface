export interface Guild {
  id: string
  name: string
  icon: string | null
  description: string | null
  splash: string
  discoverySplash: string | null
  approximateMemberCount: number
  approximatePresenceCount: number
  features: string[]
  emojis: Emoji[]
  banner: string
  ownerId: string
  applicationId: string | null
  region: string | null
  afkChannelId: string | null
  afkTimeout: number
  systemChannelId: string | null
  widgetEnabled: boolean
  widgetChannelid: string | null
  verificationLevel: number
  roles: Role[]
  defaultMessageNotification: number
  mfaLevel: number
  explicitContentFilter: number
  maxPresences: string | null
  maxMembers: number
  maxVideoChannelUsers: number
  vanityUrlCode: string
  premiumTier: number
  premiumSubscriptionCount: number
  systemChannelFlags: number
  preferredLocale: string
  rulesChannelId: string | null
  publicUpdatesChannelId: string | null
}

export interface Emoji {
  name: string
  roles: Role[]
  id: string
  requireColons: boolean
  managed: boolean
  animated: boolean
  available: boolean
}

export interface Role {
  id: string
  name: string
  permissions: string
  position: number
  color: number
  hoist: boolean
  managed: boolean
  mentionable: boolean
}
