
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/'>Slider</Link>
                <Link href='/modal'>Modal</Link>
                <Link href='/weather'>Weather</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav