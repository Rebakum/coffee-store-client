
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard/CoffeeCard'
import { useEffect, useState } from 'react'

function App() {
  const loadedCoffees = useLoaderData();
 //delete
  const [coffees, setCoffees] = useState(loadedCoffees);
  const [refetch, setREfetch] = useState(null)

  useEffect(()=>{
    fetch('https://coffee-store-server-iq8ivk8kb-rebekas-projects-68bf097b.vercel.app/coffees')
    .then(res=>res.json())
    .then(data=>{
      setCoffees(data)
    })
  },[refetch])
  return (
    <>

      <div className=''>
        <h1 className='text-3xl text-center'>HOT HOT COLD COFFEES: {coffees.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
          {
            coffees.map(coffee =>
              <CoffeeCard
               key={coffee._id}
                coffee={coffee}
                //delete
                coffees = {coffees}
                setCoffees ={setCoffees}
                setREfetch={setREfetch}
              ></CoffeeCard>)
          }

        </div>
      </div>
    </>
  )
}

export default App
