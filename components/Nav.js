
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/'>HOME</Link>
                <Link href='/modal'>Modal</Link>
                <Link href='/slide'>Slide</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav