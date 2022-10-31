import './Home.scss'
import Card from './../../components/card/Card';

const Home = (): JSX.Element  => {
  return <>
    <article className="home-container">
      <Card>
        <h3>React 토이 프로젝트.</h3>
        <h3>훈수 받지 않습니다. 들어도 몰라요</h3>
      </Card>
      <Card>
        <h3>코드 개판이네.</h3>
      </Card>
      <Card>
        <h3>TS - React 처음 써봅니다.</h3>
      </Card>
    </article>
  </>
}

export default Home;