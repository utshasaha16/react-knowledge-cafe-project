import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookmark, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-stone-100 text-center space-y-5 p-5">
            <div className='bg-purple-50 p-3 rounded-xl border-2'>
                <h2 className='text-2xl font-bold text-blue-400'>Reading Time: {readingTime}</h2>
            </div>
            <h3 className="text-2xl font-bold">Bookmarked Blogs: {bookmark.length}</h3>
            {
                bookmark.map((bookmark, idx) => <BookMark key={idx} bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes = {
    bookmark: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}

export default BookMarks;