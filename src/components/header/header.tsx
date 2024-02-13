import s from './header.module.scss'
export const Header = () => {
  return (
    <div className={s.header}>
      <ul className={s.box}>
        <li className={s.item}>About</li>
        <li className={s.item}>Skills</li>
        <li className={s.item}>Projects</li>
        <li className={s.item}>Contacts</li>
      </ul>
    </div>
  )
}
