import { FaRegBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({blog, handleToAddBookMark}) => {
    const {title, cover, hashtags, reading_time, author_img, author, posted_date} = blog;
    return (
        <div className='space-y-6 py-10 border-b-2'>
            <img className='w-full rounded-xl' src={cover} alt={`Cover picture of the title ${title}`} />
            {/* author information */}
            <div className='flex justify-between items-center'>
                <div className='flex space-x-6'>
                    <div className='bg-center'>
                    <img className='w-12 h-12 rounded-full bg-cover overflow-hidden' src={author_img} alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center space-x-3'>
                    <p><span>{reading_time} min read</span></p>
                    <button onClick={() => handleToAddBookMark(blog)}><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>

           <div>
           <h2 className='text-4xl font-bold mb-6'>{title}</h2>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
           </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleToAddBookMark: PropTypes.func
}

export default Blog;