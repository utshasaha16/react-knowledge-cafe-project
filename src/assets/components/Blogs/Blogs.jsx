import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleToAddBookMark, handleMarksAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl">Blogs: {blogs.length}</h1>
            {/* send data to blog component*/}
            {
                blogs.map(blog => <Blog
                     key={blog.id}
                    blog={blog}
                    handleToAddBookMark={handleToAddBookMark}
                    handleMarksAsRead={handleMarksAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleToAddBookMark: PropTypes.func.isRequired,
    handleMarksAsRead: PropTypes.func.isRequired
}

export default Blogs;