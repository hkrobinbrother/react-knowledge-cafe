
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Components/Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark, handleMarksAsRead }) => {
    const[blogs,setBlogs] = useState([])

    useEffect( ()=>{
        fetch('bloge.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog=> <Blog key={blog.id} blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarksAsRead={handleMarksAsRead}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleAddToBookmark: PropTypes.func,
    handleMarksAsRead: PropTypes.func
}

export default Blogs;