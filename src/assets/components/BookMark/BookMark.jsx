import PropTypes from 'prop-types';
const BookMark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='p-5 bg-white rounded-md'>
            <h2 className='text-xl font-semibold'>{title}</h2>
        </div>
    );
};

BookMark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default BookMark;