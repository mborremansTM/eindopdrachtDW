import {useState} from "react";

export function SectionNewGame(props) {
    const {children, title} = props;
    const [isOpen, setIsOpen] = useState(false);

    return <div className="section">
        <h3>{title}</h3>
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close" : "New game"}</button>
        </div>
        {isOpen && children}
    </div>;
}