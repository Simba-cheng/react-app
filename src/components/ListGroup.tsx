import {useState} from "react";

interface Props {
    items: string[],
    heading: string
}

function ListGroup(props: Props) {
    // 告诉 react, 此参数会动态变化.
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>List Group</h1>
            {props.items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {props.items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                        }}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;