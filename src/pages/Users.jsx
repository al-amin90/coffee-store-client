import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { baseURL } from "../utilits/url";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure that you want to delete it?",
            icon: "warning",
            confirmButtonColor: "#E64942",
            confirmButtonText: "OK"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${baseURL}/user/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Good Luck !!!!",
                                text: "Deleted coffee details",
                                icon: "success"
                            });
                        }
                    })
            }
        });


    }

    return (
        <div className="w-[80%] mx-auto my-24">
            <h2>Users</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>LastLogged At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.createdAt}</td>
                                <td>{user?.lastLoggedAt}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;