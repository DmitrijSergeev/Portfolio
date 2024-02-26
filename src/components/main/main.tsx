import s from './main.module.scss'
export const Main = () => {
  return (
    <div className={s.container}>
      <img alt={'photo'} className={s.img} src={'src/assets/img/dima.jpg'} />
      <span>Я великий программист</span>
    </div>
  )
}
