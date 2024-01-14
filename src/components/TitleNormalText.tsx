import {type JSXChildren} from "@root/tech-debt";

interface Props {
    readonly children: JSXChildren;
}

export default function Latex({children}: Props) {
    return <span style="font-size: initial;">{children}</span>;
}

