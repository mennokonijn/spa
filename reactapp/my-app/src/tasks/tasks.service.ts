export const getTasks = async () => {
    try {
        const response = await fetch('http://localhost:5000/tasks');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        // @ts-ignore
        throw new Error(`Error fetching tasks: ${error.message}`);
    }
};