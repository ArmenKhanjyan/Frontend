

export const ProductItem = ({basket,onPlus,onMinus,onDelete,onSort}) => {

  return  <div className="col-md-4">
    
    <h2>Basket</h2>
    <div className="col-md-3" >
       <table className="table table-dark table-bordered">
          <thead>
         <tr>
           <th onClick={onSort}>product</th>
           <th onClick={onSort}>price</th>
           <th onClick={onSort}>quantity</th>
           <th onClick={onSort}>subtotal</th>
           <th onClick={onSort}>action</th>
         </tr>
      </thead>
       <tbody> 
         { 
          basket.map(item => (
            <tr key={item.id}>
               <th>{item.title}</th>
               <th>{item.price}$</th>
               <th>{item.quantity}x</th>
               <th>{item.price * item.quantity}USD</th>
               <th>
               <td>
                 <button className="btn btn-outline-danger btn-sm" onClick={() => onPlus(item.id)} >+</button>
                  <button className="btn btn-outline-success btn-sm" onClick={() => onMinus(item.id)}>-</button>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(item.id)}>x</button>
               </td>
               </th>
            </tr>
          ))
        }
         
     </tbody>  
       </table>
    </div>
   </div>
  
}