import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookmark}) => {
    return (
        <div className="md:w-1/3 bg-stone-100 text-center space-y-5 p-5">
            <h3 className="text-2xl font-bold">Bookmarked Blogs: {bookmark.length}</h3>
            {
                bookmark.map(bookmark => <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes = {
    bookmark: PropTypes.array.isRequired
}

export default BookMarks;