import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Users from '../Users/Users';
import Pagination from '../Pagination/Pagination';

const GithubUserControl = () => {

    // get github user states 
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);


    useEffect(() => {
        const fetchUse = async () => {
            setLoading(true);
            const res = await axios.get('https://api.github.com/users');
            setPosts(res.data);
            setLoading(false);
        }
        fetchUse();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);



    

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    };

    return (
        <div className="cuserArea  py-5">
            <div className="container">
                
                <Users currentUser={currentPosts} loading={loading}></Users>
                <Pagination postPerpage={postsPerPage} totalUser={posts.length} paginate={paginate} />
            </div>
        </div>
    );
};

export default GithubUserControl;