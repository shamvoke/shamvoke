import Image from "next/image"

type FeaturedImageProps = {
  imageFilename: string
  alt: string
  sizes: string
  priority?: boolean
  className?: string
}

export default async function FeaturedImage({
  imageFilename,
  alt,
  sizes,
  priority = false,
  className = "object-cover",
}: FeaturedImageProps) {
  const { default: image } = await import(
    `@/assets/images/featured/${imageFilename}`
  )

  return (
    <Image
      src={image}
      alt={alt}
      fill
      sizes={sizes}
      placeholder="blur"
      priority={priority}
      className={className}
    />
  )
}