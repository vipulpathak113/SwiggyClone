import React from "react";

import LeftSidebar from '../Sidebar'
import RestaurantList from '../RestaurantList'
import data from '../../data/data.json'
import "./index.css";

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data,
      selected:'popular brands',
      disableScrollEvent: false
    }
    this.childGroupDomRef = []
    this.timer= '';

    this.addChildRef = this.addChildRef.bind(this)
    this.updateSelected = this.updateSelected.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  addChildRef (childRef) {
    // using ref from child to parent
    this.childGroupDomRef.push(childRef)
  }

  handleScroll (e) {
    // using debounce so that it does not call very fast and does not show flicker on scroll
    clearTimeout(this.timer)

    this.timer = setTimeout(() => {
     // for handling issue in case of scroll on right side and scroll if category is clicked on left side
      if(this.state && !this.state.disableScrollEvent) {
        // get nearest group
        let fallback = '';
        let found = this.childGroupDomRef.find((ref) => {
          var top = ref.domRef.current.getBoundingClientRect().top;
          var height = ref.domRef.current.getBoundingClientRect().height;

          // category name should be visible on top of right side if we click on category on left sidebar

          // we can also do this using intersection observer
          if(top < 0 && top + height > window.innerHeight) {
            fallback = ref;
          }

          return top + 1 > 0 && top < window.innerHeight
        })

        found = found || fallback
        if(found) {
          this.setState((prevState) => {
            return {
              ...prevState,
              selected: found.title,
            };
          });  
        }
      }
    }, 200)

  }

  updateSelected(item) {
    if(item != 'See All') {
      let found = this.childGroupDomRef.find((ref) => {
        return item == ref.title
      })
      this.setState((prevState) => {
        return {
          ...prevState,
          disableScrollEvent:true
        };
      }, () => {
        // if RestaurantList component is not Unmounted - By clicking on Select All
        if(found.domRef.current) {
          // move scroll to current selected category
          window.scrollTo(0,found.domRef.current.offsetTop)
          this.setState((prevState) => {
            return {
              ...prevState,
              disableScrollEvent:false
            };
          })
        } else {
          // RestaurantList was unmounted
          // We need update domRef
          // 1. flush all prev Ref
          this.childGroupDomRef.splice(0)
          // Reset state - This will re-render child and we will
          // get new dom ref
          this.setState((prevState) => {
            return {
              ...prevState,
              selected: found.title
            };
          }, () => {
            this.updateSelected(found.title)
          })
        }
      })
    } else {
      // move scroll to top
      window.scrollTo(0,0)
      this.setState((prevState,) => {
        return {
          ...prevState,
          selected: item,
          disableScrollEvent:true
        };
      })

    }

  }

  render() {
    return (
      <home>
          <LeftSidebar data={data} selected={this.state.selected} updateSelected={this.updateSelected}></LeftSidebar>
          <RestaurantList data={data} selected={this.state.selected} addChildRef={this.addChildRef}></RestaurantList>
      </home>
    );
  }
};
export default Home;
