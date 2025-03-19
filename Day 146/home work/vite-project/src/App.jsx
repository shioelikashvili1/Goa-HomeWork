import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
    const [data, setData] = useState({ football: [], movies: [], users: [], messages: [], posts: [] });

    useEffect(() => {
        axios.get('http://localhost:5000/api/football').then(res => setData(prev => ({ ...prev, football: res.data.teams })));
        axios.get('http://localhost:5000/api/movies').then(res => setData(prev => ({ ...prev, movies: res.data.movies })));
        axios.get('http://localhost:5000/api/users').then(res => setData(prev => ({ ...prev, users: res.data.users })));
        axios.get('http://localhost:5000/api/messages').then(res => setData(prev => ({ ...prev, messages: res.data.messages })));
        axios.get('http://localhost:5000/api/posts').then(res => setData(prev => ({ ...prev, posts: res.data.posts })));
    }, []);

    return (
        <div className="p-5 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-4">MERN Data Fetching</h1>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-xl">Football Teams</h2>
                    <ul>{data.football.map(team => <li key={team}>{team}</li>)}</ul>
                </div>
                <div>
                    <h2 className="text-xl">Movies</h2>
                    <ul>{data.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
                </div>
                <div>
                    <h2 className="text-xl">Users</h2>
                    <ul>{data.users.map(user => <li key={user}>{user}</li>)}</ul>
                </div>
                <div>
                    <h2 className="text-xl">Messages</h2>
                    <ul>{data.messages.map(msg => <li key={msg}>{msg}</li>)}</ul>
                </div>
                <div>
                    <h2 className="text-xl">Posts</h2>
                    <ul>{data.posts.map(post => <li key={post}>{post}</li>)}</ul>
                </div>
            </div>
        </div>
    );
}
