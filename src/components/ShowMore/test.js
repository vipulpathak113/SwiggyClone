import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import ShowMore from './index.js'

describe('<ShowMore /> spec', () => {
    it('renders the component', () => {
        let container = render(<ShowMore/>)
        expect(container.firstChild).toMatchSnapshot()
    })
    it('assert there are 12 Show More Tiles', () => {
        render(<ShowMore remainingItems="12"/>)
 
        expect(document.querySelectorAll('.show-more-title span').length).toBe(1)
        expect(document.querySelector('.show-more-title span').innerHTML).toBe("+12 More")
    })
})
