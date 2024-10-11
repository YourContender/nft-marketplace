import { FC } from 'react';
import img from "../../img/rocket.png";
import img2 from "../../img/promo/promo.png";
import img3 from "../../img/promo/ava.png";
import "./promo.scss";

export const Promo: FC = () => {
    return (
        <div className="promo">
            <div className="promo_title">
                <div className="promo_title-block">
                    <h1>Discover digital art & Collect NFTs</h1>
                    
                    <span>
                        NFT marketplace UI created with Anima for 
                        Figma. Collect, buy and sell art from more 
                        than 20k NFT artists.
                    </span>

                    <button className="promo_title-block-btn">
                        <img src={img} alt="logo" />
                        <span>Get Started</span>
                    </button>

                    <div className="promo_title-block-info">
                        <div className="promo_title-block-info-item">
                            <h2>240k+</h2>
                            <span>Total Sale</span>
                        </div>
                        <div className="promo_title-block-info-item">
                            <h2>100k+</h2>
                            <span>Auctions</span>
                        </div>
                        <div className="promo_title-block-info-item">
                            <h2>240k+</h2>
                            <span>Artists</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="promo_example">
                <div className="promo_example-photo">
                    <img src={img2} alt="photo" />
                </div>

                <div className="promo_example-author">
                    <h2>Space Walking</h2>
                    <span>
                        <img src={img3} alt="avatar" />
                        Animakid
                    </span>
                </div>
            </div>
        </div>
    )
}
 