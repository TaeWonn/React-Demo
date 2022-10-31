import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";

const DATABASE_URL = 'http://localhost:3001'

function BlogFormPage() {
  const navigate = useNavigate()
  const [title, setTtile] = useState('')
  const [body, setBody] = useState('')

  const titleChange = e => {
    setTtile(e.target.value)
  }

  const bodyChange = e => {
    setBody(e.target.value)
  }

  const onSubmit = () => {
    axios.post(`${DATABASE_URL}/posts`, { 
      title, 
      body,
      createdAt: Date.now()
     })
    .then(() => navigate('/blogs'))
  }

  return <>
    <div>
      <h1>Create a blog post</h1>
      <div className="mb-3">
        <label className="form-label" htmlFor="">Title</label>
        <input className="form-control"
          type="text" value={title}
          onChange={titleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="">body</label>
        <textarea className="form-control"
          type="text"
          value={body}
          onChange={bodyChange}
          rows={20} />
      </div>
      <button className="btn btn-primary"
        onClick={onSubmit}
      >Post</button>
    </div>
  </>
}

export default BlogFormPage