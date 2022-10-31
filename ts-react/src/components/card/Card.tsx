import { ReactNode } from 'react';
import './Card.scss';

interface CardProp {
  children: ReactNode
}

const Card = ({ children }: CardProp): JSX.Element => {
  return <>
    <article className="card-article">
      { children }
    </article>
  </>
}

export default Card;