import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/api";

const sampleTrendingPosts = [
    {
        id: 1,
        username: "tech_guru",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        content: "🚀 React Server Components are the future! What do you think? 🤔 #React #WebDev",
        image: "https://source.unsplash.com/600x400/?technology,server",
        likes: 300,
        comments: 150,
        timestamp: "1 hour ago"
    },
    {
        id: 2,
        username: "dev_jane",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        content: "AI-generated code: Helpful or scary? 😳 #AI #Future",
        image: "https://source.unsplash.com/600x400/?ai,robot",
        likes: 250,
        comments: 120,
        timestamp: "2 hours ago"
    }
];

const TrendingPosts = () => {
    const [trendingPosts, setTrendingPosts] = useState(sampleTrendingPosts);

    useEffect(() => {
        const getTrending = async () => {
            try {
                const fetchedPosts = await fetchPosts();
                const maxComments = Math.max(...fetchedPosts.map(post => post.comments));
                const trending = fetchedPosts.filter(post => post.comments === maxComments);
                setTrendingPosts(trending);
            } catch (error) {
                console.error("Error fetching trending posts:", error);
            }
        };

        getTrending();
    }, []);

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2>🔥 Trending Posts</h2>
            {trendingPosts.map(post => (
                <div key={post.id} style={{
                    border: "1px solid #ddd", borderRadius: "10px",
                    padding: "15px", marginBottom: "15px",
                    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)"
                }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                        <img src={post.avatar} alt="avatar" style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }} />
                        <div>
                            <strong>{post.username}</strong> <br />
                            <small style={{ color: "#888" }}>{post.timestamp}</small>
                        </div>
                    </div>
                    <p>{post.content}</p>
                    {post.image && <img src={post.image} alt="post" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />}
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#555" }}>
                        <span>👍 {post.likes} Likes</span>
                        <span>💬 {post.comments} Comments</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrendingPosts;
