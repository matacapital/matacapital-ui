import "@testing-library/jest-dom";
import {
	Fetcher,
	DateFormatter,
	NumberFormatter,
	Validator,
} from "../src/services/mod";

//=======================================| Fetcher |=======================================//

describe("Fetcher (test with 'dummy json api')", () => {
	it("get data", async () => {
		const res = await Fetcher.getData("https://dummyjson.com/users", "limit=1");
		
		res.ok
			? expect(res).toMatchObject({ code: 200 })
			: res.message.includes("failed")
			? expect(res).toMatchObject({ code: 500 })
			: expect(res).toMatchObject({ code: 404 });
	});

	it("post data", async () => {
		const res = await Fetcher.postData("https://dummyjson.com/users/add", {
			firstName: "John",
			lastName: "Doe",
			age: 25,
		});

		res.ok
			? expect(res).toMatchObject({ code: 200 })
			: res.message.includes("failed")
			? expect(res).toMatchObject({ code: 500 })
			: expect(res).toMatchObject({ code: 404 });
	});

	it("put data", async () => {
		const res = await Fetcher.putData("https://dummyjson.com/users/1", {
			lastName: "Doe",
		});

		res.ok
			? expect(res).toMatchObject({ code: 200 })
			: res.message.includes("failed")
			? expect(res).toMatchObject({ code: 500 })
			: expect(res).toMatchObject({ code: 404 });
	});

	it("delete data", async () => {
		const res = await Fetcher.deleteData("https://dummyjson.com/users/1");

		res.ok
			? expect(res).toMatchObject({ code: 200 })
			: res.message.includes("failed")
			? expect(res).toMatchObject({ code: 500 })
			: expect(res).toMatchObject({ code: 404 });
	});
});

//=======================================| Date formatter |=======================================//

describe("DateFormatter", () => {
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

//=======================================| Number formatter |=======================================//

describe("NumberFormatter", () => {
	it("compact currency", () => {
		const compactCurrency = NumberFormatter.compactCurrency(3000000);
		expect(compactCurrency).toMatch(/^3\s?M\s?€$/);
	});

	it("basic currency", () => {
		const basicCurrency = NumberFormatter.basicCurrency(30000);
		expect(basicCurrency).toMatch(/^30\s?000\s?€$/);
	});
});

//=======================================| Validator |=======================================//

describe("Validator", () => {
	it("'test@test.fr' is an email", () => {
		expect(Validator.isEmail("test@test.fr")).toBe(true);
	});

	it("'test' is not an email", () => {
		expect(Validator.isEmail("test")).toBe(false);
	});
});
