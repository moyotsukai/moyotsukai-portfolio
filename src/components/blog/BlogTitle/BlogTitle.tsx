import * as s from './BlogTitleStyle'

type Props = {
  title: string,
  date?: string
}

const BlogTitle: React.FC<Props> = ({ title, date }) => {
  return (
    <div css={s.blogTitleContainerStyle}>
      <h1 css={s.blogTitleStyle}>{title}</h1>
      <p css={s.blogDateStyle}>{date}</p>
    </div>
  )
}

export default BlogTitle