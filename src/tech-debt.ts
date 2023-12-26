/*
 * Everything in this file should eventually be replaced with a solution that's well-supported.
 */

// I think `JSX.Element` should usually work, but it's not for some reason?
// For now, we just use the `any` type. We're not doing anything fancy with it yet
// to need the rigorous type checking.
export type JSXChildren = any;

