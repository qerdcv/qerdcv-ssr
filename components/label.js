import style from 'styles/label.module.scss';

export default function Label({ children, type }) {
  return (
    <span className={`${style.label} ${style[type]}`}>
      {children}
    </span>
  )
}
