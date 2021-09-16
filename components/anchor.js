import style from 'styles/anchor.module.scss';

export default function Anchor(props) {
  return (
    <>
      <a href={`#${props.id}`} className={style.anchor}>
        <h2 id={props.id} className={style.anchorTitle}>{props.title} &para;</h2>
      </a>
      {props.children}
    </>
  )
}
