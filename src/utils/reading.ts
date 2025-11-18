type RawContent = string | { default?: string }

export const getReadingStats = (rawInput: RawContent) => {
  const raw = typeof rawInput === 'string' ? rawInput : rawInput?.default ?? ''
  const words = raw.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return {
    text: `${minutes} min read` as const,
    minutes,
    words,
  }
}
