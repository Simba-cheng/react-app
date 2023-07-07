// interface Props {
//     text: string;
// }
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

function Alter({children}: Props) {
    return (
        <div className="alert alert-primary">{children}</div>
    );
}

export default Alter;