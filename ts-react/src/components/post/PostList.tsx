import { useNavigate } from 'react-router';
import './PostList.scss';

interface PostListProp {
  id: number;
  title: string;
  createdAt: number;
}

const PostList = ({
  id,
  title,
  createdAt,
}: PostListProp): JSX.Element => {
  const navigate = useNavigate()

  const postClick = () => {
    navigate(`/posts/${id}`)
  }
  
  return <>
    <article className="post-view-container" onClick={postClick}>
      <p className="post-title">{title}</p>
      <p>{new Date(createdAt).toLocaleString()}</p>
    </article>
  </>
}

export default PostList;