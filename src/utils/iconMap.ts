import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi'
import { SiTryhackme } from 'react-icons/si'
import type { IconType } from 'react-icons'

const iconMap: Record<string, IconType> = {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  SiTryhackme,
}

export const getIconComponent = (name: string) => iconMap[name] ?? FiExternalLink
