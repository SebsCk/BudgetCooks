import { useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Feed',       href: '#feed' },
  { label: 'Challenges', href: '#challenges' },
  { label: 'Categories', href: '#categories' },
  { label: 'About',      href: '#about' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          Budget<span>Cooks</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button className="btn btn-outline">Log in</button>
          <button className="btn btn-primary">Sign up</button>
        </div>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
