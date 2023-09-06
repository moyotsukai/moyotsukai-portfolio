import Link from 'next/link'
import { BlogPost } from '../../../types/BlogPost.type'
import * as s from './BlogCardStyle'
import Image from 'next/image'
import TextRight from '../../ui/TextRight'

type Props = {
  post: BlogPost
}

const BlogCard: React.FC<Props> = ({ post }) => {
  return (
    <div css={s.blogCardStyle}>
      <Link href={post.href}>
        <div css={s.blogCardImageContainer}>
          <Image
            src={post.image}
            width={400}
            height={200}
            layout="responsive"
            alt="blog post"
            css={s.blogCardImageStyle}
          />
        </div>
        <div css={s.blogCardTextContainerStyle}>
          <div css={s.blogCardTitleStyle}>{post.title}</div>
          <TextRight>{post.date}</TextRight>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard