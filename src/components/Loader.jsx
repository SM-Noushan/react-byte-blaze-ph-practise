import { PropagateLoader } from 'react-spinners';
const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <PropagateLoader color="#F92FD3" size={30} />
        </div>
    );
};

export default Loader;