import ListGroup from "./components/ListGroup";

function App() {
    const handleSelectItem = (item: string) => {
        console.log(item);
    }
    let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
    return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
}

export default App;