import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, teste, category, details, photoURL } = coffee;

    const handleUpdatedCoffee = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const teste = form.teste.value
        const category = form.category.value
        const details = form.details.value
        const photoURL = form.photoURL.value
        const updatedCoffee = { name, quantity, supplier, teste, category, details, photoURL }
        console.log(updatedCoffee)

        //send data to the server
        fetch(`https://coffee-store-server-iq8ivk8kb-rebekas-projects-68bf097b.vercel.app/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            });
        }
        return (
            <div className="bg-red-200 p-5">
                <h1>Update a New Coffee: {name}</h1>

                <form onSubmit={handleUpdatedCoffee}>
                    {/* form-name */}
                    <div className="flex justify-center items-center gap-5">
                        <label className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text-alt"> Coffee Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full " />
                        </label>
                        <label className="form-control  md:w-1/2 ">
                            <label className="label">
                                <span className="label-text-alt">Quantity</span>
                            </label>
                            <input type="text" defaultValue={quantity} name="quantity" placeholder="quantity" className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* form-Suppliere */}
                    <div className="flex justify-center items-center gap-5">
                        <label className="form-control  md:w-1/2 ">
                            <label className="label">
                                <span className="label-text-alt">Suppliere</span>
                            </label>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full " />
                        </label>
                        <label className="form-control  md:w-1/2 ">
                            <label className="label">
                                <span className="label-text-alt">Teste</span>
                            </label>
                            <input type="text" name="teste" defaultValue={teste} placeholder="Teste" className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* form-Category/Details */}
                    <div className="flex justify-center items-center gap-5">
                        <label className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text-alt">Category</span>
                            </label>
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full " />
                        </label>
                        <label className="form-control  md:w-1/2 ">
                            <label className="label">
                                <span className="label-text-alt">Details</span>
                            </label>
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* form-photo url now*/}
                    <div className="">
                        <label className="form-control  w-full ">
                            <label className="label">
                                <span className="label-text-alt">Photo</span>
                            </label>
                            <input type="text" name="photoURL" defaultValue={photoURL} placeholder="photo URL" className="input input-bordered w-full " />
                        </label>

                    </div>
                    <div className=" w-full">
                        <label className="form-control mt-5 ">
                            <input type="submit" value="Update Coffee" className="input input-bordered w-full btn btn-primary " />
                        </label>

                    </div>

                </form>
            </div>

        );
    };


    export default UpdateCoffee;