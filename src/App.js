import "./App.css";
import MenuBar from "./components/MenuBar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Red roses bouquet",
      url: "https://cdn.shopify.com/s/files/1/0524/5006/6595/products/RedRosesBouquet_1_1440x.jpg?v=1614360567",
      description:
        "A bouquet made of red roses is a classic and timeless floral arrangement. Red roses symbolize love, passion, and romance, making them a popular choice for romantic occasions such as anniversaries, valentine's day, or as a heartfelt gesture of love. The bouquet is composed of velvety, deep red roses.",
      price: 59.99,
      amount: 0,
    },
    {
      id: 2,
      title: "Orchid bouquet",
      url: "https://www.flowerzila.com/wp-content/uploads/2021/02/19.jpg",
      description:
        "A bouquet made of orchids is a stunning and exotic floral arrangement. Orchids are known for their intricate and delicate blooms, which come in a range of colors, from pure white to vibrant pinks, purples, and yellows. The bouquet is composed of these elegant and graceful flowers, carefully arranged.  ",
      price: 79.89,
      amount: 0,
    },
    {
      id: 3,
      title: "Sunflower bouquet",
      url: "https://image.floranext.com/instances/designhouseofflowers_com/catalog/product/m/a/madison-sunflower-bouquet-by-farm-florist-singapore_1.jpg?w=800&h=800&gen=1",
      description:
        "A bouquet made of sunflowers is a cheerful and bright floral arrangement. Sunflowers symbolize happiness, positivity, and optimism, making them a popular choice for celebratory occasions such as weddings, birthdays, and graduations. The bouquet is composed of large, sunny blooms.",
      price: 49.95,
      amount: 0,
    },
    {
      id: 4,
      title: "Gerbera bouquet",
      url: "https://www.knots.ph/images/default-source/flowers/hand-bouquets-2022/bq2124b_1200e4a1b0a8350a62b6a920ff0000e4902b.jpg?sfvrsn=2",
      description:
        "A bouquet made of gerberas is a lively and vibrant floral arrangement. Gerberas, also known as African daisies, come in a range of bright and cheerful colors, including red, yellow, orange, pink, and more. The bouquet is composed of these bold and beautiful blooms.",
      price: 45.99,
      amount: 0,
    },
    {
      id: 5,
      title: "Hydrangea bouquet",
      url: "https://www.flowersonnortonst.com.au/images/products/large/7ipc6kk1vz.jpg",
      description:
        "A bouquet made of hydrangeas is a beautiful and lush floral arrangement. Hydrangeas are known for their large, round clusters of delicate flowers, which come in shades of blue, pink, purple, and white. The bouquet is composed of these stunning blooms.",
      price: 76.85,
      amount: 0,
    },
    {
      id: 6,
      title: "Lilly bouquet",
      url: "https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/20_27234_30J_01ex.jpg",
      description:
        "A bouquet made of lilies is a fragrant and elegant floral arrangement. Lilies are known for their large, trumpet-shaped blooms, which come in a range of colors, including white, pink, yellow, orange, and more. The bouquet is composed of these beautiful and graceful flowers.",
      price: 99.54,
      amount: 0,
    },
  ]);

  function refreshCart() {
    let newProducts = products.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }
  function addProduct(title, id) {
    setCartNum(cartNum + 1);
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
      }
    });
    refreshCart();
  }
  function removeProduct(title, id) {
    products.forEach((prod) => {
      if (prod.id === id) {
        if (prod.amount > 0) {
          prod.amount--;
          setCartNum(cartNum - 1);
        }
      }
    });
    refreshCart();
  }

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route
          path="/shop"
          element={
            <>
              <MenuBar cartNum={cartNum} isHome={0} isShop={1} />,
              <Shop
                products={products}
                onAdd={addProduct}
                onRemove={removeProduct}
              />
            </>
          }
        />
        <Route path="/" element={<MenuBar cartNum={cartNum} isHome={1} />} />
        <Route
          path="/cart"
          element={
            <>
              <MenuBar cartNum={cartNum} isHome={0} />,
              <Cart products={cartProducts} onRemove={removeProduct} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
