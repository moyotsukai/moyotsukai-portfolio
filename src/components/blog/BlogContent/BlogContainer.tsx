import * as s from './BlogContainerStyle'

type Props = {
  children: React.ReactNode
}

const BlogContainer: React.FC<Props> = ({ children }) => {
  return (
    <div css={s.blogContainerStyle}>
      {children}
    </div>
  )
}

export default BlogContainer