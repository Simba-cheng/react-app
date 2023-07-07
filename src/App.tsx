// import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
    // return <div><Message/></div>

    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

    return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
}

export default App;