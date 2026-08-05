const images = [
  '/images/portfolio-1.png',
  '/images/portfolio-2.png',
  '/images/portfolio-3.png',
  '/images/hero-bg.png',
  '/images/video-teaser.png',
  '/images/blog-1.png',
  '/images/blog-2.png',
  '/images/service-art.png',
  '/images/service-3d.png',
  '/images/collaborate.png',
]

function ImageSet({ prefix }: { prefix: string }) {
  return (
    <>
      {images.map((src) => (
        <img
          key={`${prefix}-${src}`}
          src={src}
          alt=""
          draggable={false}
          className="image-marquee-img"
        />
      ))}
    </>
  )
}

export function ImageMarquee() {
  return (
    <div className="relative overflow-hidden bg-navy-deep py-3">
      <div className="marquee">
        <span className="image-marquee-track">
          <ImageSet prefix="a" />
        </span>
        <span className="image-marquee-track" aria-hidden="true">
          <ImageSet prefix="b" />
        </span>
      </div>
    </div>
  )
}
