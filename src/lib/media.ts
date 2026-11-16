/**
 * Extracts the video id from common YouTube URL shapes
 * (watch?v=, youtu.be/, /shorts/, /embed/). Returns undefined for anything else.
 */
export function youtubeId(url: string | undefined): string | undefined {
  if (!url) return undefined

  try {
    const parsed = new URL(url)
    const host = parsed.hostname.replace(/^www\./, '')

    if (host === 'youtu.be') {
      return parsed.pathname.slice(1).split('/')[0] || undefined
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const fromQuery = parsed.searchParams.get('v')
      if (fromQuery) return fromQuery

      const match = parsed.pathname.match(/^\/(?:shorts|embed|live)\/([^/?]+)/)
      return match?.[1]
    }
  } catch {
    return undefined
  }

  return undefined
}

/** Best-quality thumbnail, with a guaranteed-to-exist fallback for videos without a max-res frame. */
export function youtubeThumbnails(url: string | undefined): { src?: string; fallbackSrc?: string } {
  const id = youtubeId(url)
  if (!id) return {}

  return {
    src: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    fallbackSrc: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  }
}

export function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href)
}
