// import { response } from "express";

export default function Api_get () {
    
    // const items = [
  
    // ];
    
    
        
    return (
        <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>


            
        
        
    )
}

