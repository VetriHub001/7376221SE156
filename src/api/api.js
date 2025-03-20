import axios from "axios";

const BASE_URL = "http://20.244.56.144/test";

const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return null; 
    }
};

export const fetchUsers = () => fetchData("users");
export const fetchPosts = () => fetchData("posts");
export const fetchComments = () => fetchData("comments");

// Fetch Everything in One Go (Reduces API Calls)
export const fetchAllData = async () => {
    try {
        const [users, posts, comments] = await Promise.all([
            fetchUsers(),
            fetchPosts(),
            fetchComments()
        ]);
        return { users, posts, comments };
    } catch (error) {
        console.error("Error fetching all data:", error);
        return { users: [], posts: [], comments: [] }; 
    }
};
