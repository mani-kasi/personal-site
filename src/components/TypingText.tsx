import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type TypingTextProps = {
  phrases: string[]
}

function TypingText({ phrases }: TypingTextProps) {
  const shouldReduceMotion = useReducedMotion()
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (phrases.length === 0 || shouldReduceMotion) {
      return undefined
    }

    const currentPhrase = phrases[phraseIndex] ?? ''
    const isFinishedTyping = displayText === currentPhrase
    const isFinishedDeleting = displayText === ''

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (isFinishedTyping) {
            setIsDeleting(true)
            return
          }

          setDisplayText(currentPhrase.slice(0, displayText.length + 1))
          return
        }

        if (isFinishedDeleting) {
          setIsDeleting(false)
          setPhraseIndex((currentIndex) => (currentIndex + 1) % phrases.length)
          return
        }

        setDisplayText(currentPhrase.slice(0, displayText.length - 1))
      },
      isFinishedTyping ? 1350 : isDeleting ? 45 : 85,
    )

    return () => window.clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex, phrases, shouldReduceMotion])

  const visibleText = shouldReduceMotion ? phrases[0] ?? '' : displayText

  return (
    <p className="flex min-h-10 items-center text-lg font-medium tracking-[0.02em] text-accent-soft sm:text-xl">
      <span>{visibleText}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-7 w-px animate-pulse bg-accent-soft"
      />
    </p>
  )
}

export default TypingText
