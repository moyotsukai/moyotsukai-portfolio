import * as s from './HeaderStyle'
import ProfileImg from '../../../public/profile.jpeg'

const Header: React.FC = () => {
  return (
    <header css={s.headerStyle}>
      <a href="/" css={s.linkStyle}>
        <div css={s.imageStyle}>
          <img src={ProfileImg.src} width={36} height={36} />
        </div>
        <span css={s.spanStyle}>
          Shintaro Aoi Portfolio
        </span>
      </a>
    </header>
  )
}

export default Header