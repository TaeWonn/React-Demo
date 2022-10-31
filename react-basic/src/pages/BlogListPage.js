import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useNavigate } from 'react-router'
import LoadingSpinner from './../components/LoadingSpinner'

function BlogListPage() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const getPosts = () => {
    axios.get('http://localhost:3001/posts')
      .then(res => setPosts(res.data))
      .then(() => setLoading(false))
  }
  const cardEdit = (id) => {
    navigate(`/blogs/${id}`)
  }
  const cardDelete = (e, postId) => {
    e.stopPropagation()

    axios.delete(`http://localhost:3001/posts/${postId}`).then(() => {
      setPosts(prevPosts => prevPosts.filter(post => post.id !== postId))
    })
  }

  const renderBlogList = () => {
    if (loading) {
      return (<LoadingSpinner/>)
    }

    if (posts.length === 0) {
      return 'No blog posts'
    }

    return posts.map(post => (
      <Card key={post.id} title={post.title} onClick={() => {cardEdit(post.id)}}>
        <div>
          <button className="btn btn-danger" onClick={(e) => { cardDelete(e, post.id) }}>Delete</button>
        </div>
      </Card>
    ))
  }


  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Blogs</h1>
        <div>
          <Link to="/blogs/create" className="btn btn-success">
            Create new
          </Link>
        </div>
      </div>

      {renderBlogList()}
    </div>
  )
}

export default BlogListPage;