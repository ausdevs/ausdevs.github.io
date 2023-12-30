import {type JSXChildren} from "@root/tech-debt";
import "./Centered.css";

interface Props {
    readonly children: JSXChildren;
}

export default function Centered({children}: Props) {
    return <div className="component-centered">{children}</div>;
}

