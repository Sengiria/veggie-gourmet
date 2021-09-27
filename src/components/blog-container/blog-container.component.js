import './blog-container.styles.scss';
import RECIPES_DATA from '../../assets/data/recipes.data';
import BlogItem from '../blog-item/blog-item.component';

const BlogContainer = () => {
    return ( 
        <section className="blog" id="blog">
        <div className="container">
          <div className="title">
            <h2>Latest Blog</h2>
            <p>Recent recipes</p>
          </div>
          <div className="blog-content">
            {
                RECIPES_DATA.map(({id, ...otherProps}) => (
                    <BlogItem key={id} {...otherProps}  />
                ))
            }
          </div>
        </div>
      </section>

     );
}
 
export default BlogContainer;