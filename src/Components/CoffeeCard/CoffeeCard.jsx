import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, coffees, setcoffees, setREfetch }) => {
    const { _id, name, quantity, supplier, teste, category, details, photoURL } = coffee;
    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-iq8ivk8kb-rebekas-projects-68bf097b.vercel.app/coffees/${_id}`, {
                    method: "DELETE"                                     
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            setREfetch(Date.now())
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                                
                            }
                        ); 
                        const remaining = coffees.filter(cof=>cof._id !==_id);
                        setcoffees(remaining)

                        }
                    })
            }
        });
    }
    return (

        <div className="flex justify-between gap-5 my-20 bg-base-100 p-5 flex-1 shadow-xl ">
            <figure><img src={photoURL} alt="Movie" /></figure>
            <div className=" flex justify-between w-full items-start gap-4">
                <div className="flex  flex-col">
                    <h2 className="">Name: {name}</h2>
                    <p>Quantity:{quantity}.</p>
                    <p>{supplier}.</p>
                    <p>{teste}.</p>
                </div>

                <div className="flex justify-end  space-y-3 items-end flex-col">
                    <button className="btn btn-success">View</button>
                    <Link to={`/updateCoffee/${_id}`}>
                    <button className="btn btn-warning">Edit</button>                    
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-error">X
                    </button>
                </div>
            </div>
        </div>


    );
};

export default CoffeeCard;