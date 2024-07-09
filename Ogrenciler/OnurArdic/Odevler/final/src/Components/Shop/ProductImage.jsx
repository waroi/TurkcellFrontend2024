import { useLocale } from 'next-intl'
import Link from 'next/link'

const ProductImage = ({ category, item }) => {
  const locale = useLocale()
  return (
    <Link href={`/${locale}/details/${category}/${item.id}`}>
      <div className="img">
        <img src={`/${item.img}`} alt={item.title} />
      </div>
    </Link>
  )
}

export default ProductImage
