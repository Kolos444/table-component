import styles from "./Table.module.css"
import data from "../../dummyData/Persons.json";
import {Person} from "../../types";
import {FunctionComponent, ReactComponentElement, ReactFragment, ReactHTMLElement, useState} from "react";

export default function Table() {

	//Beispiel Daten
	const persons: Person[] = data;

	//Ein JSX Array in dem die einzelnen Tabellenreihen gespeichert werden
	const rows: JSX.Element[] = [];

	for (let person of persons) {
		rows.push(
			<tr className={styles.tableRow}>
				<td className={styles.tableField}>{person.firstName}</td>
				<td className={styles.tableField}>{person.lastName}</td>
				<td className={styles.tableField}>{person.age}</td>
			</tr>
		)
	}


	return (
		<>
			<table className={styles.table}>
				<thead className={styles.tableHeader}>
				<tr>
					<th className={styles.tableHead}>
						Vorname
					</th>
					<th className={styles.tableHead}>
						Nachname
					</th>
					<th className={styles.tableHead}>
						Alter
					</th>
				</tr>
				</thead>
				<tbody className={styles.tableBody}>
				{rows}
				</tbody>
			</table>
		</>
	)
}