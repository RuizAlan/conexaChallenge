import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

const columnas=[
    {
        title:"User Id",
        field:"userId"
    },
    {
        title:"Id",
        field:"id"
    },
    {
        title:"Title",
        field:"title"
    },
    {
        title:"Body",
        field:"body"
    }
]

const PostsScreen = () => {
    const [posts, setPosts] = useState([]);
    const obtenerPosts = async () => {
        const res = await axios.get('http://localhost:3000/api/posts');
        const posteos = await res.data;
        console.log(posteos);
        setPosts(posteos);
    };
    useEffect(() => {
        obtenerPosts();
    }, []);

    return (
        <div>
            <MaterialTable
            columns={columnas}
            data={posts}
            title="Posts list"
            options={{
                search:false,
            }}
            />
            
            {/* <h2>Lista de Posts</h2>
            <div>
                <table className='table table-bordered table-hover'>
                    <thead className='table-primary'>
                        <tr>
                            <th>UserId</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    {posts.map((post) => (
                        <tbody>
                            <tr>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div> */}
        </div>
    );
};

export default PostsScreen;
