import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Post } from "../../types/Post";
import {} from "../../"
import { localDateString } from "../../utils/DateUtils";

const PostDetailPage = (): JSX.Element => {
  const { id } = useParams<'id'>() 
  const [post, setPosts] = useState<Post | null>(null)
  const navigate = useNavigate()

  const getPost = () => {
    axios.get(`http://localhost:3001/posts/${id}`)
      .then((res) => setPosts(res.data))
  }
  const prevClick = () => {
    navigate('/posts')
  }

  useEffect(() => {
    getPost()
  }, [id])

  return <>
    <article className="post-container">
      <h3>{post?.title}</h3>
      <p>{localDateString(post?.createdAt)}</p>
      <hr />
      {post?.content}
    </article>
    <section className="button-container">
      <button onClick={prevClick}>prev</button>
    </section>
  </>
}

export default PostDetailPage;