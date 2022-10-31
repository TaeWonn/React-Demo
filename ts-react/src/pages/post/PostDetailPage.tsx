import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";
import { localDateString } from "../../utils/DateUtils";
import { proxy, useSnapshot } from "valtio";
import Post from "../../model/post/Post";

const post = proxy(new Post())

const PostDetailPage = (): JSX.Element => {
  const { id } = useParams<'id'>() 
  const state = useSnapshot(post)
  const navigate = useNavigate()

  const getPost = () => {
    axios.get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        post.title = res.data.title
        post.content = res.data.content
        post.createdAt = res.data.createdAt
      })
  }
  const prevClick = () => {
    navigate('/posts')
  }

  useEffect(() => {
    getPost()
  }, [id])

  return <>
    <article className="post-container">
      <h3>{state.title}</h3>
      <p>{localDateString(state.createdAt)}</p>
      <hr />
      {state.content}
    </article>
    <section className="button-container">
      <button onClick={prevClick}>prev</button>
    </section>
  </>
}

export default PostDetailPage;