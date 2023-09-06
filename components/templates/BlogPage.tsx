import { css } from "@emotion/react"
import { BlogPost } from "../../types/BlogPost.type"
import BlogCard from "../blog/BlogCard"
import BlogTitle from "../blog/BlogTitle"
import BackNavigation from "../ui/BackNavigation"

const posts: BlogPost[] = [
  {
    href: "/blog/eternity",
    title: "無限について",
    image: "/tech/cycle.jpeg",
    date: "2023/09/07"
  }
]


const BlogPage: React.FC = () => {
  return (
    <div>
      <BackNavigation href="/">
        Home
      </BackNavigation>
      <BlogTitle
        title="ブログ"
      />
      <div css={postsContainerStyle}>
        {posts.map((post, index) => (
          <BlogCard
            post={post}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogPage

const postsContainerStyle = css`
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px 0;

  @media(max-width: 500px) {
    justify-content: center;
  }
`