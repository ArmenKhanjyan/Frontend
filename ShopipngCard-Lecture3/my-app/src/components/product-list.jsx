
 
 
export const ProductList = ({products,onAdd}) => {

   return  <div className="col-md-8">
      <h1>Shoping Card</h1>
       <h2>Books</h2>
       <div className="row">
         {products.map(item => (
           <div key={item.id} className="col-md-3">
             <img
               src={item.picture}
               style={{ width: "160px", height: "200px"}}
             />
             <p>{item.title}</p>
             <p className="text-danger">{item.price} USD$</p>
              <button className="btn btn-outline-danger" onClick={() => onAdd(item)}>+</button>
           </div>
         ))}
       </div>
     </div>
}