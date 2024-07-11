import { useLocale } from 'next-intl'
import Link from 'next/link'

const CustomButton = ({ text }) => {
  const locale = useLocale()
  return (
    <Link href={`${locale}/shop`} className="custom-btn">
      {text}
    </Link>
  )
}

export default CustomButton
