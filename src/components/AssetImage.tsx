import { useState } from 'react'

type AssetImageProps = {
  src?: string
  fallbackSrc?: string
  alt: string
  tone?: 'light' | 'dark'
  eager?: boolean
  className?: string
}


function AssetImage({ src, fallbackSrc, alt, tone = 'light', eager = false, className = '' }: AssetImageProps) {
  const [failed, setFailed] = useState<string[]>([])
  const current = [src, fallbackSrc].find(
    (candidate): candidate is string => !!candidate && !failed.includes(candidate),
  )

  if (!current) {
    const palette = tone === 'dark' ? 'bg-[#23252b] text-paper/80' : 'bg-mist text-ink/80'

    return (
      <div
        role="img"
        aria-label={`Image placeholder: ${alt}`}
        className={`relative flex h-full w-full flex-col justify-between gap-6 overflow-hidden p-4 sm:p-5 ${palette}`}
      >
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-25"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
        <span className="relative self-start bg-blue px-2 py-1 font-mono text-[11px] font-medium text-paper">
          Asset placeholder
        </span>
      </div>
    )
  }

  return (
    <img
      key={current}
      src={current}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed((previous) => [...previous, current])}
      className={`h-full w-full object-cover ${className}`}
    />
  )
}

export default AssetImage
