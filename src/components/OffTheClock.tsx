import type { OffTheClockContent } from '../data/siteContent'
import Reveal from './Reveal'
import VideoThumb from './VideoThumb'

type OffTheClockProps = {
  content: OffTheClockContent
}

function OffTheClock({ content }: OffTheClockProps) {
  const { video } = content
  const [lead, highlight] = ['What I do outside of', 'software.']

  return (
    <section id="off-the-clock" aria-labelledby="off-the-clock-title" className="scroll-mt-14 border-t border-ink/15">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-12 items-start gap-x-6 gap-y-8 lg:gap-x-12">
          <Reveal className="col-span-12 lg:col-span-5">
            <h3 className="max-w-[18ch] font-display text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.03em]">
              {lead}{' '}
              <span className="box-decoration-clone bg-soft px-1.5 [-webkit-box-decoration-break:clone]">
                {highlight}
              </span>
            </h3>
            <p className="mt-5 max-w-[30rem] text-base leading-relaxed text-ink/85">{content.description}</p>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-7">
            <figure>
              <div className="bg-soft p-2.5 sm:p-3">
                <VideoThumb
                  href={video.href}
                  thumbnail={video.thumbnail}
                  alt="Thumbnail from Mani’s New York City travel montage"
                  label={`Watch “${video.title}”`}
                  aspectClass="aspect-video"
                />
              </div>
              <figcaption className="mt-4 grid gap-x-6 gap-y-1 sm:grid-cols-[auto_1fr]">
                <h4 className="font-display text-lg font-bold tracking-[-0.02em]">{video.title}</h4>
                <div className="sm:col-start-1 sm:col-span-2">
                  <p className="max-w-[36rem] text-[0.9375rem] leading-relaxed text-ink/80">{video.description}</p>

                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default OffTheClock
