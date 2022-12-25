import React,{ useState } from 'react'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';

import { blogsData } from '../data'

const Blogs = () => {

    const [blogs,setBlogs] = useState(blogsData);
    const trucateString = (str,num) =>{
      if(str.length > num){
        return str.slice(0,num) + " ...";
      }else{
        return str;
      }
    } 
  return (
    <div>
        <h1>Blogs Page</h1>
        <section>
            {blogs.map((blog) => {
                const {id,title,body} = blog;
                    return (
                    <article key={id}>
                            <h3>{title}</h3>
                            <p>{trucateString(body,100)}</p>
                            <Link to={title} state={{ id,title,body }}>Learn More</Link>
                    </article>
                    )
            })}
        </section>
    </div>
  )
}

export default Blogs