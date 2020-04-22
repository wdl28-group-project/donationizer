import React from 'react';
import {render,fireEvent} from '@testing-library/react';
import Categories from '../../components/Categories';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../../redux/store';
import { act} from 'react-dom/test-utils';


//TEST FOR RENDERING CATEGORIES COMPONENT
let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

})
afterEach(() => {
    document.body.removeChild(container);
    container = null;
})
it('It renders categories component and category list', () => {
  act(() => {
    ReactDOM.render(<Provider store={store}><Categories/></Provider>, container);
  });
  const categories = container.querySelectorAll("p");
  expect(categories.length).toBe(10);
  const categoryName = container.querySelector("p");
  expect(categoryName.textContent).toContain("All");
});


//TEST FOR INPUT CHANGE
test('checks input changes', () => {
    const handleChange = jest.fn()
    const { container } = render(<input type="text" onChange={handleChange} />)
    const input = container.firstChild
    fireEvent.change(input, { target: { value: 'test' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(input.value).toBe('test')
  })

