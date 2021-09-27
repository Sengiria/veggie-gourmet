import './blog-item.styles.scss';
import { FaRegHeart } from "react-icons/fa";

const BlogItem = ({ imageUrl, date, title, text }) => {
    return (
        <div className="blog-item">
            <div className="blog-img">
                <img src={imageUrl} />
                <span><FaRegHeart /></span>
            </div>
            <div className="blog-text">
                <span>{date}</span>
                <h2>{title}</h2>
                <p>{text}</p>
                <a href="#">Read More</a>
            </div>
        </div>
    );
}

export default BlogItem;