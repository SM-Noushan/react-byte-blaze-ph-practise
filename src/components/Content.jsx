import { useLoaderData } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
const Content = () => {
    const data = useLoaderData();
    const {
        cover_image,
        published_at,
        title,
        description,
        tags,
        body_html,
        url
    } = data;
    return (
        <div rel="noopener noreferrer" className="mx-auto group border-2 border-opacity-30 p-2 hover:no-underline focus:no-underline">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || placeHolderImage} />
            <div className="flex flex-wrap py-6 gap-2 dark:border-gray-600">
                {
                    tags.map((tag, idx) => <a key={idx} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline">#{tag}</a>)
                }
            </div>
            <div className="space-y-2">
                <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                <Markdown rehypePlugins={[rehypeRaw]}>
                    {body_html}
                </Markdown>
            </div>
        </div>
    );
};

export default Content;