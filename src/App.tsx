// import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
    // return <div><Message/></div>

    let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
    return <div><ListGroup items={items} heading="Cities"/></div>;
}

export default App;