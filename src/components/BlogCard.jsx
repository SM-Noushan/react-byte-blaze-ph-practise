import { Link } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import { MdOutlineFolderDelete } from "react-icons/md";

const BlogCard = ({ data, deletable = false, handleDelete }) => {
    const {
        id,
        cover_image,
        published_at,
        title,
        description
    } = data;
    return (
        <div className="flex relative">
            <Link to={`/blog/${id}`} rel="noopener noreferrer" className="max-w-sm mx-auto group transition border-2 border-primary hover:border-secondary border-opacity-30 hover:scale-105 p-2 hover:no-underline focus:no-underline">
                <img role="presentation" className="object-cover w-full rounded h-44" src={cover_image || placeHolderImage} />
                <div className="py-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {
                deletable && (
                    <div onClick={() => handleDelete(id)} className="absolute -right-5 -top-5 bg-primary hover:bg-secondary group p-3 ml-5 rounded-full hover:scale-105 cursor-pointer">
                        <MdOutlineFolderDelete
                            size={20}
                            className="text-secondary group-hover:text-primary" />
                    </div>)
            }
        </div>
    );
};

export default BlogCard;