// interface Props {
//     text: string;
// }
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

function Alter({children, onClose}: Props) {
    return (
        <div className="alert alert-primary alert-dismissible">
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}/>
        </div>

    );
}

export default Alter;