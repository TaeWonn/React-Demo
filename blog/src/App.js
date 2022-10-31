import React, { useState } from 'react';
import './App.css';

function App() {

  let [titles] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [likes, setLikes] = useState(0)


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      { 
        titles.map(title => (
          <div className="list">
            <h3> 
              { title } 
              <span onClick={ ()=> setLikes(likes +1) }>👍</span> {likes}
            </h3>
            <p>2/ 17</p>
            <hr />
          </div>
        ))
      }
      <Modal/>
      
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>내용</p>
    </div>
  )
}

export default App;
