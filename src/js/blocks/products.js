import { productsBlock } from "./blocks";

export default function Products() {
    const productsList = productsBlock.find("#products-list");
    const productItem = (product) => (`
        <li>
            <em>${product.name}</em> | <b>${product.price}</b>
        </li>
    `)

    const products = [
        { name: "шоколад", price: 100 },
        { name: "зубная паста", price: 100 },
        { name: "пирог", price: 200 },
        { name: "кока кола", price: 50 },
        { name: "спрайт", price: 50 },
        { name: "хлеб", price: 30 },
    ]

    function renderProducts() {
        products.map((product) => {
            const prepareHtml = productsList.html() + productItem(product);
            productsList.html(prepareHtml);
        })
    }

    renderProducts();
}