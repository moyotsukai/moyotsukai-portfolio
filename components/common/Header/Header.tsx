import * as s from './HeaderStyle'
import ProfileImg from '../../../public/profile.jpeg'
import Link from 'next/link'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header css={s.headerStyle}>
      <Link href="/" css={s.linkStyle}>
        <div css={s.imageStyle}>
          <Image
            src={ProfileImg.src}
            width={36}
            height={36}
            layout="responsive"
            alt="profile image"
          />
        </div>
        <span css={s.spanStyle}>
          Shintaro Aoi Portfolio
        </span>
      </Link>
    </header>
  )
}

export default Header