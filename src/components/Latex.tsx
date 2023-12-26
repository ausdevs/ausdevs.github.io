import katex from "katex";
import "katex/dist/katex.min.css";

import {getConfig} from "@root/latex-helpers/katex-config";

interface Props {
    readonly code: string;
}

export default function Latex({code}: Props) {
    const rawHTML = katex.renderToString(code, getConfig(false));
    return <span dangerouslySetInnerHTML={{__html: rawHTML}} />;
}

