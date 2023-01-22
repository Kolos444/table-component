import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Table from "../components/Table/table";

export default function Home() {
	return(
		<main className={styles.container}>
			<Table/>
		</main>
	)
}