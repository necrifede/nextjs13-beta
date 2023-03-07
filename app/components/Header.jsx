import Link from 'next/link';
import styles from './Header.module.css';

const links = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Posts', route: '/posts' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles['header-items']}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
