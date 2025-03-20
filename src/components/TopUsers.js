import React, { useEffect, useState } from "react";
import { fetchUsers } from "../api/api";

const sampleUsers = [
    { id: 1, username: "tech_guru", avatar: "https://randomuser.me/api/portraits/men/32.jpg", postCount: 50 },
    { id: 2, username: "dev_jane", avatar: "https://randomuser.me/api/portraits/women/45.jpg", postCount: 45 },
    { id: 3, username: "frontend_wizard", avatar: "https://randomuser.me/api/portraits/men/50.jpg", postCount: 40 },
    { id: 4, username: "css_master", avatar: "https://randomuser.me/api/portraits/women/22.jpg", postCount: 38 },
    { id: 5, username: "js_ninja", avatar: "https://randomuser.me/api/portraits/men/60.jpg", postCount: 35 }
];

const TopUsers = () => {
    const [users, setUsers] = useState(sampleUsers);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const fetchedUsers = await fetchUsers();
                const sortedUsers = fetchedUsers.sort((a, b) => b.postCount - a.postCount);
                setUsers(sortedUsers.slice(0, 5)); // Get top 5 users
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        getUsers();
    }, []);

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2>🏆 Top Users</h2>
            {users.map(user => (
                <div key={user.id} style={{
                    display: "flex", alignItems: "center",
                    padding: "10px", borderBottom: "1px solid #ddd"
                }}>
                    <img src={user.avatar} alt="avatar" style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "15px" }} />
                    <strong>{user.username}</strong>
                    <span style={{ marginLeft: "auto", color: "#888" }}>📌 {user.postCount} Posts</span>
                </div>
            ))}
        </div>
    );
};

export default TopUsers;
