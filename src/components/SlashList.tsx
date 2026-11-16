import { Fragment } from 'react'

type SlashListProps = {
  items: string[]
  slash?: string
  separator?: '/' | '·' | '→'
}

function SlashList({ items, slash = 'text-ink-soft', separator = '·' }: SlashListProps) {
  return (
    <>
      {items.map((item, index) => (
        <Fragment key={item}>
          {index > 0 ? (
            <>
              {' '}
              <span aria-hidden="true" className={`px-[0.1em] ${slash}`}>
                {separator}
              </span>{' '}
            </>
          ) : null}
          {item}
          {index < items.length - 1 ? <span className="sr-only">, </span> : null}
        </Fragment>
      ))}
    </>
  )
}

export default SlashList
