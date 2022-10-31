import React, {useState} from 'react'
import './List.css'

const List = (props) => {
    let [like, setLike] = useState(0)

    const likeButtonClick = () => {
      setLike(like + 1)
    }
    return (
      <div className="list">
        <h4>{ props.name } <span onClick={likeButtonClick}>👍</span> {like}</h4>
        <p>2/17</p>
      </div>
    )
}

export default List;