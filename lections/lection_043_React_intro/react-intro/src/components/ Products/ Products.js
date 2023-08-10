import ProductItem from "./ProductItem";
const products = [
    {
        id: 1,
        title: "iPhone 9",
        description: "Apple iPhone 9 128GB Green",
        price: 549,
        brand: "Apple",
        category: "smartphones",
        picture:
            "https://jabko.ua/image/cache/cataloge-2/slider/pc-2/2-350x350.jpg.webp",
        isAvailable: true
    },
    {
        id: 2,
        title: "iPhone 10",
        description: "Apple iPhone 14 Pro Max 256GB Gold",
        price: 1549,
        brand: "Apple",
        category: "smartphones",
        picture:
            "https://jabko.ua/image/cache/cataloge-2/cat-14/photo_2022-09-07_23-43-23%20(2)-350x350.jpg.webp",
        isAvailable: true
    },
    {
        id: 3,
        title: "iPhone 11",
        description: "Apple iPhone 1 128GB Green",
        price: 2549,
        brand: "Apple",
        category: "smartphones",
        picture:
            "https://jabko.ua/image/cache/cataloge-2/cat-14/photo_2022-09-07_23-43-23-350x350.jpg.webp",
        isAvailable: true
    },
    {
        id: 4,
        title: "iPhone 12",
        description: "Apple iPhone 12 128GB Green",
        price: 2549,
        brand: "Apple",
        category: "smartphones",
        picture:
            "https://jabko.ua/image/cache/cataloge-2/baners-cat-mob/iphone-13/13-pro-max-2-350x350.jpg.webp",
        isAvailable: false
    },

    {
        id: 5,
        title: "iPhone 13",
        description: "Apple iPhone 13 128GB Green",
        price: 2549,
        brand: "Apple",
        category: "smartphones",
        picture:
            "https://jabko.ua/image/cache/cataloge-2/repair/iphone/iPhone_SE_2020-350x350.jpg.webp",
        isAvailable: false
    },

];

export default function Products() {
    const title = 'valera';

    return (
        <div className="products">
            {title}
            <ul>
                {
                    products.map((product, index) => {
                        return product.isAvailable && (
                            <ProductItem
                                key={product.id}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}