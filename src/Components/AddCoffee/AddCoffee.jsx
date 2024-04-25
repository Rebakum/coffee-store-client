import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const teste = form.teste.value
        const category = form.category.value
        const details = form.details.value
        const photoURL = form.photoURL.value
        const newCoffee = { name, quantity, supplier, teste, category, details, photoURL }
        console.log(newCoffee)

        //send data to the server
        fetch('https://coffee-store-server-iq8ivk8kb-rebekas-projects-68bf097b.vercel.app/coffees', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
         
        })
       
    }
    return (
        <div className="bg-gray-200 p-5">
            <h1>Add a New Coffee</h1>

            <form onSubmit={handleAddCoffee}>
                {/* form-name */}
                <div className="flex justify-center items-center gap-5">
                    <label className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text-alt">Coffee Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control  md:w-1/2 ">
                        <label className="label">
                            <span className="label-text-alt">Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="quantity" className="input input-bordered w-full " />
                    </label>
                </div>

                {/* form-Suppliere */}
                <div className="flex justify-center items-center gap-5">
                    <label className="form-control  md:w-1/2 ">
                        <label className="label">
                            <span className="label-text-alt">Suppliere</span>
                        </label>
                        <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control  md:w-1/2 ">
                        <label className="label">
                            <span className="label-text-alt">Teste</span>
                        </label>
                        <input type="text" name="teste" placeholder="Teste" className="input input-bordered w-full " />
                    </label>
                </div>

                {/* form-Category/Details */}
                <div className="flex justify-center items-center gap-5">
                    <label className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text-alt">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control  md:w-1/2 ">
                        <label className="label">
                            <span className="label-text-alt">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full " />
                    </label>
                </div>

                {/* form-photo url now*/}
                <div className="">
                    <label className="form-control  w-full ">
                        <label className="label">
                            <span className="label-text-alt">Photo</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="photo URL" className="input input-bordered w-full " />
                    </label>

                </div>
                <div className=" w-full">
                    <label className="form-control mt-5 ">
                        <input type="submit" value="Add Coffee" className="input input-bordered w-full btn btn-primary " />
                    </label>

                </div>

            </form>
        </div>

    );
};

export default AddCoffee;