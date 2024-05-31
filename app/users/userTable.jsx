import React from 'react';
import { sort } from 'fast-sort';
import Link from 'next/link';
export default async function UserTable({sortBy}) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
  const sortedUsers =   sort(users).asc(sortBy=='email'?user=>user.email:user=>user.id);
    return (
        <div className="users-container">
            <h1>Users</h1>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th> <Link href='/users?orderBy=name'>Name</Link></th>
                        <th><Link href='/users?orderBy=email'> Email</Link></th>
                        <th>Website</th>
                        <th>City</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>{user.address.city}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
