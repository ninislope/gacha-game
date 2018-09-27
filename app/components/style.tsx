import * as FreeStyle from "free-style";
export const Style = FreeStyle.create();

export const scene = Style.registerStyle({
    position: "relative",
    width: "100%",
    height: "100%",
});

export interface CenterProps {
    width?: number | string;
    height: number | string;
    top?: number | string;
    left?: number | string;
    bottom?: number | string;
    right?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    unit?: string;
}

export const makeWithUnit = (unit: string) => (num?: number | string) => typeof num === "number" ? num + unit : num;

export function center(props: CenterProps, addStyles?: {[name: string]: any}) {
    const maxWidth = props.maxWidth || "100%";
    const maxHeight = props.maxHeight || "100%";
    const withUnit = makeWithUnit(props.unit || "%");
    if (props.width == null) props.width = "100%";

    const style = {
        width: withUnit(props.width),
        height: withUnit(props.height),
        textAlign: "center",
    } as any;
    if (props.left != null) style.left = `calc(${withUnit(props.left)} - ${withUnit(props.width)} / 2)`;
    if (props.right != null) style.right = `calc(${withUnit(props.right)} - ${withUnit(props.width)} / 2)`;
    if (props.left == null && props.right == null) style.left = `calc(${withUnit(maxWidth)} / 2 - ${withUnit(props.width)} / 2)`;
    if (props.top != null) style.top = `calc(${withUnit(props.top)} - ${withUnit(props.height)} / 2)`;
    if (props.bottom != null) style.bottom = `calc(${withUnit(props.bottom)} - ${withUnit(props.height)} / 2)`;
    if (props.top == null && props.bottom == null) style.top = `calc(${withUnit(maxHeight)} / 2 - ${withUnit(props.height)} / 2)`;

    return {...style, ...addStyles};
}

export function centerPx(props: CenterProps) {
    // const main = document.getElementById("main") as HTMLMainElement;
    return center({unit: "px", ...props});
}
