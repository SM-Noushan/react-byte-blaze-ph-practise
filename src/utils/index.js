import toast from 'react-hot-toast';

// load data
export const getBlogs = () => {
    const blogs = localStorage.getItem('blogs');
    if (blogs)
        return JSON.parse(blogs);
    return [];
}

// store data
export const saveBlog = blog => {
    const blogs = getBlogs();
    const isExists = blogs.find(b => b.id === blog.id);
    if (isExists)
        return toast.error('Already Bookmarked!')
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    return toast.success('Successfully Bookmarked!');
}
// delete data
export const deleteBlog = id => {
    const blogs = getBlogs();
    const remainingBlogs = blogs.filter(b => b.id !== id);
    localStorage.setItem('blogs', JSON.stringify(remainingBlogs));
    return toast.success('Blog  Removed!');
}