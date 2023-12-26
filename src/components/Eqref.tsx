/*
 * This is just a useful utility component for clearly marking an equation reference.
 * Intended to be used similarly to the `\eqref{}` command in LaTeX.
 */

import {type JSXChildren} from "@root/tech-debt";

interface Props {
    readonly children: JSXChildren;
}

export default function Latex({children}: Props) {
    return <b>({children})</b>;
}

