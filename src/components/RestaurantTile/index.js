import React from "react";

import "./index.css";

const RestaurantTile = ({ restaurant }) => {
    return (
        <div className="restaurant-tile">
            <a href="#" className="restaurant-tile-outer">
                <div className="restaurant-tile-body">
                    <div className="">
                        <div className="restaurant-tile-body-image-outer"><img className="" alt="image" width="250" height="160" src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60" /></div>
                        <div className="restaurant-tile-body-title-outer">
                            <div className="restaurant-tile-body-title">{restaurant.name}</div>
                            <div className="restaurant-tile-body-subtitle" title={restaurant.food_types.join(', ')}>{restaurant.food_types.join(', ')}</div>
                        </div>
                        <div className="restaurant-tile-body-desc-outer">
                            <div className="restaurant-tile-body-desc-ratings"><span className="star">&#9734;</span><span>{restaurant.ratings || "N/A"}</span></div>
                            <div>•</div>
                            <div>{restaurant.delivery_time}</div>
                            <div>•</div>
                            <div className="">₹{restaurant.price_for_two} FOR TWO</div>
                        </div>
                        <div className="restaurant-tile-body-quick-view">
                            <span role="button" aria-label="Open" className="restaurant-tile-body-quick-view-title">Quick View</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
};
export default RestaurantTile;
