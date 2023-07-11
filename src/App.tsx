import ListGroup from "./components/ListGroup";
import Alter from "./components/Alter";
import {Button} from "./components/Button";

// function App() {
//     const handleSelectItem = (item: string) => {
//         console.log(item);
//     }
//     let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
//     return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
// }

// function App() {
//     return (
//         <div>
//             <Alter>
//                 Hello <h6>World</h6>
//             </Alter>
//         </div>
//     );
// }

function App() {
    return (
        <div>
            <Button onClick={() => console.log('Clicked')}>click it</Button>
        </div>
    );
}

export default App;