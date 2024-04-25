import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers);
    const [refetch, setREfetch] = useState(null)

    useEffect(() => {
        fetch('https://coffee-store-server-iq8ivk8kb-rebekas-projects-68bf097b.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)

            })
    }, [refetch])

    const handleDelete = _id => {
        // make sure delete comfrom
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

                    fetch(`https://coffee-store-server-iq8ivk8kb-rebekas-projects-68bf097b.vercel.app/users/${_id}`, {
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
                                const remaining = users.filter(user => user._id !== _id);
                                setUsers(remaining)

                            }
                        })
                }
            });

    }
    return (
        <div>
            <h2>Users:{loadedUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged in</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td><button onClick={() => handleDelete(user._id)}>X</button></td>
                            </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;