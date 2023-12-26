import {type JSXChildren} from "@root/tech-debt";

interface Props {
    readonly children: JSXChildren;
}

export default function Latex({children}: Props) {
    return <span style="color: red; font-style: italic;">TODO: {children}</span>;
}

