import "./App.css";

type User = {
	username: string;
};

const user: User = {
	username: "hoangnm62",
};

function App() {
	return (
		<>
			<h1>Hello</h1>
			<p>{user.username}</p>
		</>
	);
}

export default App;
