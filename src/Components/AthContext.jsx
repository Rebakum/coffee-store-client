// import { Children, createContext, useContext, useEffect, useState } from "react";

// export const dataContext=createContext(null)



// const AthContext = ({Children}) => {
//     const [coffees, setCoffees] = useState([]);
//     useEffect(()=>{
//         fetch('https://coffee-store-server-iq8ivk8kb-rebekas-projects-68bf097b.vercel.app/coffees')
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data)
//             setCoffees(data)
//         })
//     },[])
//     const value = {coffees, setCoffees}

//     return (
//         <dataContext.Provider value={value}>
//             {Children}
//         </dataContext.Provider>
//     );
// };

// export default AthContext;