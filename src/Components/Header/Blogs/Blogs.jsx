import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ( {handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data));

    },[])
    return (
        <div className="md:w-2/3">
          <h1 className="text-4xl mb-8">Blogs:{blogs.length} </h1>  
          {
            blogs.map((blog,idx) => <Blog key={idx} blog={blog} handleAddToBookmark={handleAddToBookmark}></Blog>)
          }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark:PropTypes.func.isRequired
}
export default Blogs;