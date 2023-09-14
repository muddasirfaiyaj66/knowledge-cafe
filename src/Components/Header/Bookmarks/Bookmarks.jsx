import PropTypes from 'prop-types';
import Bookmark from '../../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 mx-4 mt-5 rounded-xl  bg-gray-400  '>
            <div className='bg-white text-red-400'>
                <h3 className='text-4xl text-center p-4'> Reading Time: {readingTime}min</h3>
                </div>
           
            <h2 className='text-3xl text-center p-4 '>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
            }
            
            
            
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks :PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired
}
export default Bookmarks;



