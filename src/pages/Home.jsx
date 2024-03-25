import Hero from "../components/Hero";
import wave from "../assets/wave.svg";
const Home = () => {
    return (
        <div className="relative min-h-[calc(100vh-116px)] flex flex-col items-center justify-center">
            <Hero />
            <img className="absolute bottom-0 w-full" src={wave} alt="wave-img" />
        </div>
    );
};

export default Home;