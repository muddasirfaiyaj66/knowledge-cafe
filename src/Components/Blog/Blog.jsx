import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {cover, title, author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex '>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl '>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                <span>{reading_time} min read</span>
                <button onClick={()=> handleAddToBookmark(blog)} className='ml-2 text-red-600 text-xl'><FaBookmark/></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a>#{hash}</a></span>)
                }
            </p>
            <button onClick={()=> handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline hover:text-red-400'>Mark as read</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark :PropTypes.func.isRequired  ,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;