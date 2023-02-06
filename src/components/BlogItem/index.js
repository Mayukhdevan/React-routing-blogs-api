import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem

  return (
    <Link to={`/blogs/${id}`}>
      <li className="list-item">
        <img className="list-image" src={imageUrl} alt="blog topic" />
        <div className="content-wrapper">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-wrapper">
            <img className="avatar" src={avatarUrl} alt="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
