import { FC } from 'react';
import { data } from "../../data.tsx";
import "./collection.scss";

export const Collection:FC = () => {
    return (
        <div className="collection">
            <div className="collection_title">
                <h2>Trending Collection</h2>
                <span>Checkout our weekly updated trending collection.</span>
            </div>

            <div className="collection_content">
                {
                    data.map(item => {
                        return (
                            <div className={item.className} key={item.id}>
                                <div className="collection_content-item-images">
                                    <img src={item.first} alt="" />
                                    <div className="collection_content-item-images-bottom">
                                        <img src={item.second} alt="" />
                                        <img src={item.third} alt="" />
                                        <div className="collection_content-item-images-more">
                                            +1025
                                        </div>
                                    </div>
                                </div>

                                <div className="collection_content-item-author">
                                    <h3>{item.title}</h3>
                                    <div className="collection_content-item-author-name">
                                        <img src={item.logo} alt="" />
                                        <span>{item.author}</span>
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
