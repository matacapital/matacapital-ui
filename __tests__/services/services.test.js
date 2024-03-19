import "@testing-library/jest-dom";
import { DateFormatter, NumberFormatter, StringFormatter } from "../../src/services/mod";

describe("date formatter", () => {
	it("short date", () => {
		const shortDate = DateFormatter.short(1706633838705);
		expect(shortDate).toBe("30/01/2024");
	});

	it("long date", () => {
		const longDate = DateFormatter.long(1706634202050);
		expect(longDate).toBe("30 janvier 2024");
	});

	it("short with hours and minutes", () => {
		const shortWithHoutsAndMinutes =
			DateFormatter.shortWithHoursAndMinutes(1706634106703);
		expect(shortWithHoutsAndMinutes).toBe("30/01/2024 à 18:01");
	});

	it("long with hours and minutes", () => {
		const longWithHoursAndMinutes =
			DateFormatter.longWithHoursAndMinutes(1706634166361);
		expect(longWithHoursAndMinutes).toBe("30 janvier 2024 à 18:02");
	});
});

describe("number formatter", () => {
	it("compact currency", () => {
		const compactCurrency = NumberFormatter.compactCurrency(3000000);
		expect(compactCurrency).toBe("3 M €");
	});

	it("basic currency", () => {
		const basicCurrency = NumberFormatter.basicCurrency(3000);
		expect(basicCurrency).toBe("3 000 €");
	});
});
