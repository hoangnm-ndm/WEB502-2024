{
	const name: String = "Hoang";
	const age: Number = 18;
	const skills: String[] = ["Python", "Ruby", "PHP", "JS", "TS"];
	const isMarried: Boolean = true;

	type Infor = { name: String; age: Number; skills: String[]; isMarried: Boolean };

	const myInfor: Infor = {
		name,
		age,
		skills,
		isMarried,
	};

	const HaInfor: Infor = {
		name: "Ha",
		age: 10,
		skills: ["JS", "TS"],
		isMarried: false,
	};

	// object literal
	console.log(myInfor);
}
