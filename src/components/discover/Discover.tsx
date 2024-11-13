import { FC } from 'react';
import eye from "../../img/eye.png";
import { discover } from "../../data.jsx";
import "./discover.scss";

export const Discover: FC = () => {
    return (
        <div className="discover">
            <div className="discover_title">
                <div className="discover_title-section">
                    <h2>Discover More NFTs</h2>
                    <span>Explore new trending NFTs</span>
                </div>
                <div className="discover_btn">
                    <button>
                        <img src={eye} alt="" />
                        <span>See All</span>    
                    </button>
                </div>
            </div>

            <div className="discover_content">
                {
                    discover.map((item, index) => {
                        return (
                            <div className="discover_content-item" key={index}>
                                <div className="discover_content-item-photo">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="discover_content-item-descr">
                                    <div className="discover_content-item-descr-title">
                                        <h4>{item.title}</h4>
                                        <div className="discover_content-item-descr-title-user">
                                            <img src={item.photo} alt="" />
                                            <span>{item.author}</span>
                                        </div>
                                    </div>
                                    <div className="discover_content-item-descr-price">
                                        <div className="discover_content-item-descr-price-current">
                                            <p>Price: </p>
                                            <span>{item.price}</span>
                                        </div>
                                        <div className="discover_content-item-descr-price-high">
                                            <p>Highest Bid: </p>
                                            <span>{item.high}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
