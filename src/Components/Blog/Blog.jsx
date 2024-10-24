import PropTypes from 'prop-types';
import { FaBeer } from 'react-icons/fa';
import {IoBookmark } from "react-icons/io5";

const Blog = ({ blog ,handleAddToBookmark}) => {
    const {title, cover,author,author_img,post_date,hashtags,reading_time,} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex mb-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div>
                        <span>{reading_time} min read</span>
                        <button onClick={handleAddToBookmark} className='ml-2 text-2xl align-text-bottom text-red-600 '><IoBookmark></IoBookmark></button>
                </div>
                
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p >
                {
                    hashtags.map((hash, idx)=> <span key={idx}><a href="">{hash}</a></span> )
                }
            </p>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;