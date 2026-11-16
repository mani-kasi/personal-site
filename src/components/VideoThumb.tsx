import { useState } from 'react'
import { isExternal, youtubeId } from '../lib/media'

type VideoThumbProps = {
  href?: string
  thumbnail?: string
  alt: string
  label: string
  aspectClass: string
}

function PlayButton() {
  return (
    <span className="grid h-12 w-12 place-items-center bg-blue text-paper transition-colors duration-200 group-hover:bg-paper group-hover:text-blue sm:h-16 sm:w-16">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 translate-x-px sm:h-6 sm:w-6" fill="currentColor">
        <path d="M7 4.5v15l13-7.5z" />
      </svg>
    </span>
  )
}

function VideoThumb({ href, label, aspectClass }: VideoThumbProps) {
  const [playing, setPlaying] = useState(false)
  const id = youtubeId(href)
  // Embedded player (YouTube links only)
  if (id && playing) {
    return (
      <div className={`relative overflow-hidden bg-ink ${aspectClass}`}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={label}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    )
  }

  const inner = (
    <div className={`relative overflow-hidden bg-ink ${aspectClass}`}>
      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
      </div>
      <div className="absolute inset-0 grid place-items-center bg-ink/10 transition-colors duration-200 group-hover:bg-ink/25">
        <PlayButton />
      </div>
      {href ? null : (
        <span className="absolute right-3 top-3 bg-paper px-2 py-1 font-mono text-[11px] font-medium text-ink">
          Video link pending
        </span>
      )}
    </div>
  )

  if (!href) return <div className="group">{inner}</div>

  // YouTube: play in place. Anything else (e.g. a Vimeo or Drive link): open in a new tab as before.
  if (id) {
    return (
      <button type="button" onClick={() => setPlaying(true)} aria-label={`Play: ${label}`} className="group block w-full text-left">
        {inner}
      </button>
    )
  }

  return (
    <a
      href={href}
      target={isExternal(href) ? '_blank' : undefined}
      rel={isExternal(href) ? 'noreferrer noopener' : undefined}
      aria-label={`${label} (opens in a new tab)`}
      className="group block"
    >
      {inner}
    </a>
  )
}

export default VideoThumb