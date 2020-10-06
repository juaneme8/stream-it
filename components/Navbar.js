import Logo from './Logo';
import styles from '../styles/Navbar.module.css';
export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<Logo />
		</nav>
	);
}
