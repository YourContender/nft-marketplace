import {FC} from 'react';
import rocket from "../../img/rocket.png";
import keepitreal from "../../img/creators/keepitreal.png";
import "./creators.scss";
import { authors } from '../../data';

export const Creators:FC = () => {
    return (
        <div className="creators">
            <div className="creators_title">
                <div className="creators_title-text">
                    <h2>Top creators</h2>
                    <span>Checkout Top Rated Creators on the NFT Marketplace</span>
                </div>
                <div className="creators_title-btn top-btn">
                    <button>
                        <img src={rocket} alt="user" />
                        <span>View Rankings</span>
                    </button>
                </div>
            </div>

            <div className="creators_authors">
                {
                    authors.map((item, index) => {
                        return (
                            <div className={item.selector}>
                                <div className="creators_authors-item-photo">
                                    <img src={item.img} alt="" />
                                </div>
                                
                                <div className="creators_authors-item-text">
                                    <h2>{item.name}</h2>
                                    <span>Total sales: {item.sales}</span>
                                </div>

                                <div className="creators_authors-item-position">
                                    <span>{index + 1}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="creators_title-btn bottom-btn">
                <button>
                    <img src={rocket} alt="user" />
                    <span>View Rankings</span>
                </button>
            </div>
        </div>
    )
}
