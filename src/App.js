import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container, Typography } from "@mui/material";

import TopUsers from "./components/TopUsers";
import TrendingPosts from "./components/TrendingPosts";
import Feed from "./components/Feed";

const App = () => {
    return (
        <Router>
            <AppBar position="static" sx={{ backgroundColor: "#1976D2" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6">Social Media Analytics</Typography>
                    <div>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/top-users">Top Users</Button>
                        <Button color="inherit" component={Link} to="/trending-posts">Trending Posts</Button>
                        <Button color="inherit" component={Link} to="/feed">Feed</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 4 }}>
                <Routes>
                    <Route path="/" element={<Typography variant="h4">Welcome to Social Media Analytics</Typography>} />
                    <Route path="/top-users" element={<TopUsers />} />
                    <Route path="/trending-posts" element={<TrendingPosts />} />
                    <Route path="/feed" element={<Feed />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
