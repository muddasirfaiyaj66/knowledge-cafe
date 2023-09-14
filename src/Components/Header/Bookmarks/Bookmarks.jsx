import PropTypes from 'prop-types';
import Bookmark from '../../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3 bg-gray-400 mx-4 mt-16 rounded-lg'>
            <h2 className='text-3xl text-center p-4 '>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks :PropTypes.array
}
export default Bookmarks;



