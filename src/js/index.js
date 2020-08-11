import "../css/style.scss";

import Header from "./blocks/header";
import About from "./blocks/about";
import Products from "./blocks/products";
import Members from "./blocks/members"

// ПРИМЕР ИМПОРТА ВСЕГО СРАЗУ ИЗ ОДНОГО ФАЙЛА
import * as constants from "./constants"
constants.TERMINAL_TEXT

Header();
About();
Products();
Members();

// *.sass, *.scss