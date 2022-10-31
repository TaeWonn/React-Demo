import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";

function ShowPage() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  const getPost = (id) => {
    axios.get(`http://localhost:3001/posts/${id}`)
      .then((res) => setPost(res.data))
      .then(() => setLoading(false))
  }

  const printDate = (createdAt) => {
    return new Date(createdAt).toLocaleString();
  }

  useEffect(() => {
    getPost(id)
  }, [id])

  if (loading) {
    return <LoadingSpinner/>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <small className="text-muted">
        Created At: {printDate(post.createdAt)}
      </small>
      <hr/>
      <p>{post.body}</p>
    
    </div>
  )
}

export default ShowPage;