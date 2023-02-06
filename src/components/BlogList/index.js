import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.fetchBlogList()
  }

  fetchBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      topic: eachData.topic,
    }))

    this.setState({blogList: updatedData, isLoading: false})
  }

  renderBlogList = blogList => (
    <ul className="blog-list">
      {blogList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogItem={eachBlog} />
      ))}
    </ul>
  )

  render() {
    const {blogList, isLoading} = this.state

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      this.renderBlogList(blogList)
    )
  }
}

export default BlogList
