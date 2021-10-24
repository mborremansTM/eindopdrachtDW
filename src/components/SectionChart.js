import {useState} from "react";

export function SectionChart(props) {
    const {children, title} = props;
    const [isOpen, setIsOpen] = useState(false);

    return <div className="section">
        <h3>{title}</h3>
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close chart" : "Open chart"}</button>
        </div>
        {isOpen && children}
    </div>;
}