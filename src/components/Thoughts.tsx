import {type JSXChildren} from "@root/tech-debt";

import "./Thoughts.css";

interface Props {
    readonly user: string;
    readonly date: string;
    readonly children: JSXChildren;
}

export default function Thoughts({user, date, children}: Props) {
    if (!user) throw new Error("`user` prop must be non-empty.");
    if (!date) throw new Error("`date` prop must be non-empty.");
    return <span class="thoughts"><span class="thoughts-title">[{date}] {user} says:</span> {children}</span>
}

