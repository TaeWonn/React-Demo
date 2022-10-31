import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import PostList from '../../components/post/PostList';
import { PostListDto } from '../../types/PostType';
import './PostListPage.scss'

const PostListPage = (): JSX.Element => {
  const [posts, setPosts] = useState<PostListDto[]>([])
  const navigate = useNavigate()

  const createButtonClick = () => {
    navigate('/posts/create')
  }

  const requestPosts = () => {
    axios.get('http://localhost:3001/posts')
    .then((res) => {
      setPosts(res.data)
    })
  }

  useEffect(() => {
    requestPosts()
  }, [])

  const renderPosts = (): JSX.Element[] => {
    return posts.map((post: PostListDto) => (
      <PostList key={post.id} 
        id={post.id} 
        title={post.title} 
        createdAt={post.createdAt}/>
    ))
  }

  return <>
    <div className="button-container">
      <button onClick={createButtonClick}>Create</button>
    </div>
    { renderPosts() }
  </>
}

export default PostListPage;