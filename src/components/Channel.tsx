/*
 * Used for referencing Discord channels.
 */

import {channel_refs} from "@root/constants";

interface Props {
    readonly name: string;
    readonly href?: string;
}

export default function Channel(props: Props) {
    const {name} = props;
    const href = props.href || channel_refs[name];
    if (!href) {
        throw new Error("Please add a `href` prop, or update `constants.ts` to add the particular channel.");
    }
    return <a target="_blank" href={href}><code>#{name}</code></a>;
}

