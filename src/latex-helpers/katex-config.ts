// <https://katex.org/docs/options>

const katexConfig = {
    displayMode: true, // To be overwritten
    throwOnError: true,
    strict: "error",
    macros: {
        "\\Nth": "{{#1}^\\textit{#2}}",
        "\\myvec": "{\\mathbf{#1}}",
        "\\evalat": "{{\\left.#1\\right\\rvert{}}_{#2}}",

        // Hacky compatibility implementation of siunitx just so I can keep the same syntax.
        // Ideally, KaTeX should properly support some subset of the siunitx API.
        "\\qty": "{{#1}\\,{#2}}",
        "\\kilo": "{\\text{k}}",
        "\\gram": "{\\text{g}}",

        // Hacky compatibility implementation of \DeclarePairedDelimiter from mathtools
        // I still haven't figured out how to make \parens*{} and such work (with the asterisk),
        // so equations will have to be manually modified to remove the asterisk.
        "\\parens": "{\\left({#1}\\right)}",
        "\\brackets": "{\\left[{#1}\\right]}",
        "\\braces": "{\\left\\{{#1}\\right\\}}",
        "\\floor": "{\\left\\lfloor{#1}\\right\\rfloor}",

        ////////////////////////////////////////////////////////////
        // Some technical debt to figure out a better solution to //
        ////////////////////////////////////////////////////////////

        "\\dollars": "{\\${#1}}",

        // These colours must mirror those found in global.css
        // Ideally, these should be defined using \definecolor
        "\\mylightred": "#ffb3b3",
        "\\mylightgreen": "#b3ffb3",
        "\\mylightblue": "#b3b3ff",
    },
}

export function getConfig(displayMode: boolean) {
    const deepcopy = {...katexConfig, macros: {...katexConfig.macros}};
    deepcopy.displayMode = displayMode;
    return deepcopy;
}

