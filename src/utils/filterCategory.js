export default function filterData(data) {
    let swiggyOnly = [];
    let categories = data.map((item) => {
      item.restaurantList.map((restaurant) => {
        
        if(restaurant.isExlusive) {
          swiggyOnly.push(restaurant);
        }
      })
      return item
    })
    categories.push({
      category: 'Only on Swiggy',
      restaurantList: swiggyOnly
    })
    return categories;
  }