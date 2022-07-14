import React from "react";
import "./index.css";
import CategoryList from "../CategoryList";

const LeftSidebar = React.memo(({ data, ...props }) => {
  let categories = filterData(data);

  return (
    <sidebar>
      <CategoryList categories={categories} {...props}></CategoryList>
    </sidebar>
  );
});

function filterData(data) {
  let total = 0;
  let swiggyOnly = 0;
  let categories = data.map((item) => {
    total += item.restaurantList.length;

    item.restaurantList.map((restaurant) => {
      if (restaurant.isExlusive) {
        swiggyOnly++;
      }
    });
    return {
      category: item.category,
      count: item.restaurantList.length,
    };
  });
  categories = categories.concat([
    {
      category: "Only on Swiggy",
      count: swiggyOnly,
    },
    {
      category: "See All",
      count: total,
    },
  ]);
  return categories;
}

export default LeftSidebar;
