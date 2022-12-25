import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { blogsData } from '../data';
const Blog = () => {
    const location = useLocation();
    const {title} = useParams();
    // const [data,setData] = useState('');
    // useEffect(() => {
    //     const blogData = blogsData.filter((blog) => blog.title == title);
    //     setData(blogData[0].body);
    // }, [])
    const {id,body} = location.state;
  return (
    <>
        <div>{title} Pages</div>
        <p>{body}</p>
    </>
  )
}

export default Blog