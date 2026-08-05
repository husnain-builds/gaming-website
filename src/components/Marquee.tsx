export function Marquee() {
  const text = 'PLATFORM DEVELOPMENT — GAME DEVELOPMENT — GAME ART — '
  return (
    <div className="relative -my-2 rotate-[-2deg] overflow-hidden bg-gradient-to-r from-violet to-violet-deep py-4 shadow-xl shadow-violet/30">
      <div className="marquee whitespace-nowrap font-display text-sm font-bold uppercase tracking-[0.25em] text-white sm:text-base">
        <span>{text.repeat(6)}</span>
        <span aria-hidden="true">{text.repeat(6)}</span>
      </div>
    </div>
  )
}
