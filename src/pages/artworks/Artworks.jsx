import { Helmet } from "react-helmet";
import Masonry from "react-masonry-css";
import Navbar from "../../components/navbar/Navbar";
import './artworks.css'
import artworkData from "../../data/artworks.json";

const Artworks = () => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 3,
        500: 2
    }

    return(
        <>
            <Helmet>
                <title>{`Lantern Elf | Artworks`}</title>
            </Helmet>
            <Navbar
                menuState1={false}
                menuState2={true}
                menuState3={false}
                menuState4={false}
            />
            <div className="gallery-wrapper">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {
                        artworkData.map((image) => (
                            <div key={image.id} className="pin">
                                <img className="artwork-img" src={image.url} />
                                <span>{image.caption}</span>
                            </div>
                        ))
                    }
                </Masonry>
            </div>
        </>
    )
}

export default Artworks