import { countries } from "./constants/translation/countries";

export class SorterCountries {
	/**
	 * Sort countries by alphabetic order, for a `select` element.
	 */
	public static sort() {
		let France: { label: string; value: string }[] = [];
		const countriesRef = countries;

		const restOfTheWorld = countriesRef
			.filter((country) => {
				if (country.label === "France") France = [country];
				return country.label !== "France";
			})
			.sort((a, b) => a.label.localeCompare(b.label));

		return [...France, { value: "", label: "------------" }, ...restOfTheWorld];
	}
}
