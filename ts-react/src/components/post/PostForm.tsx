import React, { ChangeEvent, useState } from 'react'
import './PostForm.scss'
import axios from 'axios';
import { useNavigate } from 'react-router';

const PostForm = (): JSX.Element => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const navigate = useNavigate()

  const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const post = {
      title,
      content,
      createdAt: Date.now()
    }
    axios.post('http://localhost:3001/posts', post)
      .then(() => navigate('/posts'))
  }

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return <>
    <article className="post-container">
      <h1>Post Create</h1>
      <hr />
      <form className="form-container">
        <label className="form-label" htmlFor="title">title</label>
        <input type="text" name="title" onChange={onTitleChange} value={title}/>

        <label className="form-label" htmlFor="content">Content</label>
        <textarea name="content" rows={20} onChange={onContentChange} value={content}/>

        <div className="button-container">
          <input type="submit" value="post" onClick={onSubmit}/>
        </div>
      </form>
    </article>
  </>
}

export default PostForm;