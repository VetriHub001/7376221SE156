import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/api";

const samplePosts = [
    {
        id: 1,
        username: "tech_guru",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        content: " Just explored React 18! The new concurrent rendering features are game-changing.",
        image: "https://source.unsplash.com/600x400/?technology,code",
        likes: 120,
        comments: 45,
        timestamp: "2 hours ago"
    },
    {
        id: 2,
        username: "sci_person",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        content: "Elon musk is the richest person in the world.",
        image: "https://source.unsplash.com/600x400/?laptop,developer",
        likes: 95,
        comments: 30,
        timestamp: "3 hours ago"
    },
    {
        id: 3,
        username: "frontend_wizard",
        avatar: "https://randomuser.me/api/portraits/men/50.jpg",
        content: "Dark mode or light mode? I can’t decide! What do you prefer?",
        image: "https://source.unsplash.com/600x400/?design,ui",
        likes: 200,
        comments: 80,
        timestamp: "5 hours ago"
    },
    {
        id: 4,
        username: "Jacks Parrow",
        avatar: "https://randomuser.me/api/portraits/men/60.jpg",
        content: "Where Is My Ship🛳️🤔",
        image: "https://source.unsplash.com/600x400/?css,design",
        likes: 75,
        comments: 25,
        timestamp: "6 hours ago"
    },
    {
        id: 5,
        username: "js_ninja",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        content: "Just mastered async/await!  Here's a simple guide for beginners. ",
        image: "https://source.unsplash.com/600x400/?javascript,coding",
        likes: 130,
        comments: 50,
        timestamp: "7 hours ago"
    }
];

const Feed = () => {
    const [posts, setPosts] = useState(samplePosts); 
    useEffect(() => {
        const getFeed = async () => {
            try {
                const fetchedPosts = await fetchPosts();
                setPosts(fetchedPosts.reverse()); // Newest first
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        getFeed();

        // Auto-refresh every 10 seconds
        const interval = setInterval(getFeed, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2>📢 Latest Posts</h2>
            {posts.map(post => (
                <div key={post.id} style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "15px",
                    marginBottom: "15px",
                    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)"
                }}>
                    {/* User Info */}
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                        <img src={post.avatar} alt="avatar" style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }} />
                        <div>
                            <strong>{post.username}</strong> <br />
                            <small style={{ color: "#888" }}>{post.timestamp}</small>
                        </div>
                    </div>

                    {/* Post Content */}
                    <p>{post.content}</p>
                    
                    {/* Post Image */}
                    {post.image && <img src={post.image} alt="post" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />}

                    {/* Likes & Comments */}
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#555" }}>
                        <span>👍 {post.likes} Likes</span>
                        <span>💬 {post.comments} Comments</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Feed;
