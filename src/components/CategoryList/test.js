import React from 'react'
import { render } from '@testing-library/react'
import CategoryList from '../CategoryList/index.js'


describe('<CategoryList /> spec', () => {
    let categories = [
        {
           "category": "popular brands",
           "count": 12
        },
        {
           "category": "offers near you",
           "count": 20
        },
        {
           "category": "Express delivery",
           "count": 18
        },
        {
           "category": "Gourmet",
           "count": 52
        },
        {
           "category": "Only on Swiggy",
           "count": 32
        },
        {
           "category": "See All",
           "count": 22
        }
     ]
    
    it('renders the component', () => {
        let selected = "popular brands"
        let container = render(<CategoryList categories={categories}  selected={selected}></CategoryList>)
        expect(container.firstChild).toMatchSnapshot()
    })

    it('renders the list', () => {
        let selected = "popular brands"
        render(<CategoryList categories={categories}  selected={selected}></CategoryList>)

        expect(document.querySelector('.category-list').innerHTML).toBe('<li class="active"><div class="title">popular brands</div><div class="desc">12 Items</div></li><li class="item"><div class="title">offers near you</div><div class="desc">20 Items</div></li><li class="item"><div class="title">Express delivery</div><div class="desc">18 Items</div></li><li class="item"><div class="title">Gourmet</div><div class="desc">52 Items</div></li><li class="item"><div class="title">Only on Swiggy</div><div class="desc">32 Items</div></li><li class="item"><div class="title">See All</div><div class="desc">22 Items</div></li>')
    })

    it('renders the active item', () => {
        let selected = "popular brands"
        render(<CategoryList categories={categories}  selected={selected}></CategoryList>)

        expect(document.querySelector('.active').innerHTML).toBe('<div class="title">popular brands</div><div class="desc">12 Items</div>')
    })
})
