import React, {useState, useEffect, FormEvent} from 'react';
import "./users.scss";
import {addUser, getUsers} from "./user.service";

export interface UserObject {
    users: User[]
}

export interface User {
    id: number;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    verified: boolean;
    age: number;
}

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getRecentUsers()
    }, []);

    const [newUser, setNewUser] = useState<User>({
        id: 0,
        username: '',
        email: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        verified: false,
        age: 0
    });

    const addNewUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const startProcessingTime = performance.now();

        try {
            const response = await addUser(newUser);
            console.log('User added successfully:', response);

            setNewUser({
                id: users.length + 1,
                username: '',
                email: '',
                createdAt: new Date(),
                updatedAt: new Date(),
                verified: false,
                age: 0,
            });
            getRecentUsers();

            const endProcessingTime = performance.now(); // Mark the end time
            const processingTime = endProcessingTime - startProcessingTime;
            console.log('addNewUser Processing Time:', processingTime, 'ms');
        } catch (error) {
            console.error(error);
        }
    };

    const formatDate = (date: Date) => {
        const pad = (n: number) => (n < 10 ? `0${n}` : n);

        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1); // Months are zero-based
        const day = pad(date.getDate());
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    const getRecentUsers = (): void => {
        getUsers()
            .then((data) => {
                setUsers(data.users);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            <form onSubmit={addNewUser} className="user-form-container">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={newUser.username}
                        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={newUser.age}
                        onChange={(e) => setNewUser({ ...newUser, age: Number(e.target.value) })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="verified">Verified</label>
                    <input
                        type="checkbox"
                        id="verified"
                        name="verified"
                        checked={newUser.verified}
                        onChange={(e) => setNewUser({ ...newUser, verified: e.target.checked })}
                    />
                </div>
                <button type="submit">Add User</button>
            </form>
            <div className="list">
                {users.map((user) => (
                    <div className="list__item" key={user.id}>
                        <div className="left-content">
                            <div className="id">{user.id}</div>
                            <div className="name">{user.username}</div>
                            <div className="mail">{user.email}</div>
                        </div>
                        <div className="right-content">
                            <div className="date">{formatDate(new Date(user.createdAt))}</div>
                            <div className="date">{formatDate(new Date(user.updatedAt))}</div>
                            <div className="age">{user.age}</div>
                            <input type="checkbox" checked={user.verified} readOnly />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;