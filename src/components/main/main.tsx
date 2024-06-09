import s from './main.module.scss'
export const Main = () => {
  return (
    <div className={s.container}>
      <div>
        <img alt={'photo'} className={s.img} src={'src/assets/img/dima.jpg'} />
      </div>
      <div className={s.box}>
        <div className={s.labelBox}>
          <label className={s.label}>Я великий программист</label>
        </div>
        <div>
          <input className={s.input} />
        </div>
      </div>
    </div>
  )
}
