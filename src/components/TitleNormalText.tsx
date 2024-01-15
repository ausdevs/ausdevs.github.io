import {type JSXChildren} from "@root/tech-debt";

interface Props {
    readonly children: JSXChildren;
}

export default function TitleNormalText({children}: Props) {
    return <span style="font-size: initial;">{children}</span>;
}

