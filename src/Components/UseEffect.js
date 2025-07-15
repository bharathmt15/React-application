import React, {useState, useEffect} from "react";

export default function UseEffect() {
    const [name] = useState("Users List app Using UseEffect Hook");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((result) => result.json())
            .then((data) => setUsers(data));
    }, []);

    const deluser = (userId) => {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
    };

    return (
        <>
            <h2 className="text-center my-2">{name}</h2>
            <table className="table table-striped table-hover my-4 table-success">
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button className="btn btn-primary ms-3">
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger ms-3"
                                    onClick={() => deluser(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
