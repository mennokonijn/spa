import {User, UserObject} from "./users";

const baseUrl = 'http://localhost:5000/users';

export const getUsers = async (): Promise<UserObject> => {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        // @ts-ignore
        throw new Error(`Error fetching users: ${error.message}`);
    }
};

export const addUser = async (user: User) => {
    try {
        const response = await fetch(baseUrl + '/adduser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        // @ts-ignore
        throw new Error(`Error adding user: ${error.message}`);
    }
};