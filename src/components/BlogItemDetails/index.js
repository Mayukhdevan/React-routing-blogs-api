import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.fetchBlogDetails()
  }

  fetchBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }

    this.setState({blogDetails: updatedData, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blogDetails} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogDetails

    return (
      <div className="blog-details">
        <h1 className="blog-details-title">{title}</h1>
        <div className="author-wrapper">
          <img className="avatar" src={avatarUrl} alt="avatar" />
          <p className="author-blog-details">{author}</p>
        </div>
        <img className="list-image" src={imageUrl} alt={title} />
        <p className="blog-description">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      this.renderBlogDetails()
    )
  }
}

export default BlogItemDetails
