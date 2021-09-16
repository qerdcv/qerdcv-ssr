import style from 'styles/dynamicShadow.module.scss';

export default function DynamicShadow({ children }) {
  return (
    <div className={style.dynamicShadow}>
      {children}
    </div>
  )
}
