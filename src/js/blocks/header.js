import { headerBlock } from "./blocks";

export default function Header() {
    let count = 0;

    const display = headerBlock.find("#display");
    const btnUp = headerBlock.find("#header-btn-up");
    const btnDown = headerBlock.find("#header-btn-down");

    display.text(count);

    btnUp.bind('click', () => {
        count++;
        display.text(count);
    })

    btnDown.bind('click', () => {
        count--;
        display.text(count);
    })
}
