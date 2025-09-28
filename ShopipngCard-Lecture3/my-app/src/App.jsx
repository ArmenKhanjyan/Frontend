import { useState } from "react"
import { ProductList } from "./components/product-list"
import { ProductItem } from "./components/product-item"

export default function App() {
        const [products, setProducts] = useState([
       { id: 101, title: "psychology", price: 28, picture: "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg" },
       { id: 102, title: "history", price: 128, picture: "https://bookazine.com.hk/cdn/shop/products/68fa1af4cb73f919f620253ca990118e.jpg?v=1589010646" },
       { id: 103, title: "ando", price: 228, picture: "https://images.penguinrandomhouse.com/cover/9780593966815" },
       { id: 104, title: "economics", price: 238, picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgzGGL68bVd9GpeNrgkDx4nJJEhsiVYR6fmg&s" },
       { id: 105, title: "politics", price: 228, picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YdSG3x6SfRRMbLj5LUPkr5za8bLLkwRlPg&s" },
       { id: 106, title: "astronomy", price: 528, picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRSkGu8oA5MGrH0EUhnx6qotBECypD5yGLQ&s" },
       { id: 107, title: "biology", price: 8, picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvkg9vhrnPximqHUkbsMcFUQsPe-DXv_ueQA&s" },
       { id: 108, title: "design", price: 285, picture: "https://images.thenile.io/r1000/9780241225998.jpg" }
     ])
     const [basket,setBasket] = useState([])

     const handleAddProduct = (product) => {
         const fs = basket.find(p => p.id === product.id)
         if(fs) {
          setBasket(basket.map(p => p.id === product.id ?{...p,quantity:p.quantity +1}:p))
         } else {
          setBasket([...basket, { ...product, quantity: 1 }]);
         }
     }
     const handleMinus = id =>{
       setBasket(basket.map(item => item.id === id && item.quantity > 1? {...item,quantity:item.quantity - 1}:item))
     }
   const handleDelete = (id) => {
    setBasket(basket.filter(item => item.id !== id));
   }
    const handlePlus = id =>  {
     setBasket(basket.map(item => item.id === id ? {...item,quantity:item.quantity + 1}:item))
   }
   const handleSort = () => {
     setBasket([...basket].sort((a,b) => b.price - a.price))
   }
  
  return <div className="row">
        <ProductList products={products} onAdd={handleAddProduct}/>
        <ProductItem basket={basket} onMinus={handleMinus} onPlus={handlePlus} onDelete={handleDelete} onSort={handleSort}/>

    </div>
}
