// ! Typescript

{
	const name: String = "Nguyen Hoang";
	const age: Number = 20;
	const students: String[] = ["Nhung", "Tien", "Quan", "Trang"];
	const isMarried: Boolean = true;

	const myInfor = {
		name,
		age,
		students,
		isMarried,
	};
	// Object literal

	type Product = {
		id?: number | string;
		name: String;
		price: number;
	};

	type Client = {
		isMarried: Boolean | String;
	};

	const client: Client = {
		isMarried: true,
	};

	const product1: Product = {
		id: undefined,
		name: "san pham 1",
		price: 200,
	};

	console.log(product1.id);

	const products: Product[] = [
		{ id: 1, name: "San pham A", price: 200 },
		{ id: 2, name: "San pham B", price: 200 },
		{ id: 3, name: "San pham C", price: 200 },
	];

	type User = {
		name: String;
		phoneNumber: String;
		email: String;
		age: Number;
		isMarried: Boolean;
	};
	const myStudent: User = {
		name: "Ha",
		phoneNumber: "0123456789",
		email: "ha@gmail.com",
		age: 20,
		isMarried: true,
	};
}

/**
 * Cac kieu du lieu:
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. Array
 * 5. Object
 * 6. Undefined
 * 7. Null
 */
