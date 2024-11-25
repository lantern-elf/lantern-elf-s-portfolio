import { useRef } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";
import './home.css';

const Home = () => {
    const explore = useRef(null)
    return (
        <>
            <Helmet>
                <title>{`Lantern Elf`}</title>
            </Helmet>
            <Navbar
                menuState1={true}
                menuState2={false}
                menuState3={false}
                menuState4={false}
            />
            <main>
                <div className="hero">
                    <div className="overlay"></div>
                    <div className="title">
                        <div className="info">
                            <label className="name">lantern elf</label>
                            <label className="headline">2D Artist & Programmer</label>
                        </div>
                        <div className="interactBtn">
                            <button onClick={() => explore.current?.scrollIntoView()}>Explore</button>
                        </div>
                    </div>
                </div>
                <div ref={explore}>
                    {/* aaa */}
                </div>
            </main>
        </>
    );
};

export default Home;
