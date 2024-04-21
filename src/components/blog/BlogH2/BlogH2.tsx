import * as s from './BlogH2Style'

type Props = {
  children: React.ReactNode
}

const BlogH2: React.FC<Props> = ({ children }) => {
  return (
    <p>
      <span css={s.blogH2Style}>{children}</span>
    </p>
  )
}

export default BlogH2