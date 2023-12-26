import {type JSXChildren} from "@root/tech-debt";
import "./_Centered.css";

interface Props {
    readonly children: JSXChildren;
}

export default function Centered({children}: Props) {
    return <div className="component-centered">{children}</div>;
}

