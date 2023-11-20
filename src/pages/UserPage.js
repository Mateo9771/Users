import React from "react";
import { useUsers } from "../hooks/useUsers";


export const UserPage = () => {
    
    const { users } = useUsers ();

    return (
        <div>

            <h1 className="H1">Usuarios</h1>

            <table className="table">
                <thead className="Thead">
                    <th>ID</th>
                    <th>Mail</th>
                    <th>Name</th>
                    <th>Avatar</th>
                </thead>

                <tbody className="Tbody">
                    {
                     users.map (user => (
                        <tr key={ user.email}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.last_name} {user.last_name}</td>
                                <td>
                                    <img 
                                        src={user.avatar}
                                        className="img-thumbnail"
                                        style={{
                                            width:50
                                        }}
                                        alt={user.last_name}
                                        ></img>
                                </td>
                        </tr>
                     ))   
                    }
  
                </tbody>
            </table>
        </div>
    )
}