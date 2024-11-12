import { FC } from 'react';
import { category } from "../../data.tsx";
import "./category.scss";

export const Category:FC = () => {
    return (
        <div className="category">
            <div className="category_title">
                <h2>Browse Categories</h2>
            </div>

            <div className="category_list">
                {
                    category.map((item, index) => {
                        return (
                            <div className="category_list-item" key={index}>
                                <div className="category_list-item-photo">
                                    <img src={item.img} alt="" />
                                </div>
          
                                <div className="category_list-item-text">
                                    <span>{item.text}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    ) 
}
