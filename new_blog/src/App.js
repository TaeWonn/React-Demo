import './App.css';
import React, { useState } from 'react'
import List from './list/List'
import Modal from './modal/Modal'

const App = () => {
  let [title] = useState(['남자 코트 추천', '강남우동맛집', '파이썬독학'])
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {
        title.map(t => {
          return (
            <List name={t}/>
          )
        })
      }
      <Modal/>
    </div>
  );
}

export default App;
