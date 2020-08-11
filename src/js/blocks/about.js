import "../../css/about.scss";
import { aboutBlock } from "./blocks";
import { TERMINAL_TEXT, INITIAL_TERMINAL_DELAY } from "../constants";

export default function About() {
    const terminal = aboutBlock.find("#about-terminal");
    const btnRepeat = aboutBlock.find("#about-btn-repeat");

    function writeToTerminal() {
        terminal.text("");
        btnRepeat.css({ "display": "none" });

        for (let i = 0; i < TERMINAL_TEXT.length; i++) {

            const promise = new Promise((resolve) => {
                setTimeout(() => resolve(TERMINAL_TEXT[i]), i * INITIAL_TERMINAL_DELAY);
            })

            promise.then((char) => {
                const prepareText = terminal.text() + char;
                terminal.text(prepareText);

                if (terminal.text().length === TERMINAL_TEXT.length) {
                    btnRepeat.css({ "display": "inline" });
                }
            });
        }
    }

    btnRepeat.bind('click', () => writeToTerminal());

    writeToTerminal();
}