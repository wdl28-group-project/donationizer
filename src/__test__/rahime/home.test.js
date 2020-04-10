import React from 'react';
import {render,fireEvent, cleanup,waitForElement} from '@testing-library/react';
import Home from "../../components/Home";
import { getDonations } from "../../redux/reducers/donationReducer";


//TEST FOR INPUT CHANGE
test('checks input changes', () => {
    const handleChange = jest.fn()
    const { container } = render(<input type="text" onChange={handleChange} />)
    const input = container.firstChild
    fireEvent.change(input, { target: { value: 'test' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(input.value).toBe('test')
  })

//TEST FOR GET_DONATIONS FUNCTION IN DONATION REDUCER

  describe('donation reducer', () => {
    const initialState = {
      donations: [],
      details:[],
      loading: false,
    };
  
    // it('returns the initial state when an action type is not passed', () => {
    //   const reducer = getDonations(undefined, {});
    //   expect(reducer).toEqual(initialState);
    // });


    it('handles GET_DONATIONS_PENDING as expected', () => {
        const reducer = getDonations(initialState, { 
            type: "GET_DONATIONS_PENDING" });
      
        expect(reducer).toEqual({
            payload: undefined,
            type: 'GET_DONATIONS'
        });
      });



    //   it("handles GET_DONATIONS_FULFILLED as expected", () => {
    //     const reducer = getDonations(initialState, {
    //       type: "GET_DONATIONS_FULFILLED",
    //       payload: {
    //         data: [
    //           {
    //             post_date: "2020-04-09T05:00:00.000Z",
    //             donation_id: 129,
    //             donator_id: 33,
    //             donation_title: "you want it boy!!!!!!",
    //             donation_desc: "great toy for pet, don't ask where i got it.",
    //             post_location: "NewYork,NY",
    //             view_count: 0,
    //             isdonated: false,
    //             category: 6,
    //             donation_photo: "https://www.tornado-studios.com/sites/default/files/styles/slider_full/public/products/2175/gallery/human_femur_bone_01_thumbnail_square_0000.jpg?itok=sDy9gJK_"
    //           }
    //         ]
    //       }
    //     });
    
        // expect(reducer).toEqual({
        //     donations: [
        //         {
        //             post_date: "2020-04-09T05:00:00.000Z",
        //             donation_id: 129,
        //             donator_id: 33,
        //             donation_title: "you want it boy!!!!!!",
        //             donation_desc: "great toy for pet, don't ask where i got it.",
        //             post_location: "NewYork,NY",
        //             view_count: 0,
        //             isdonated: false,
        //             category: 6,
        //             donation_photo: "https://www.tornado-studios.com/sites/default/files/styles/slider_full/public/products/2175/gallery/human_femur_bone_01_thumbnail_square_0000.jpg?itok=sDy9gJK_"
        //           }
        //       ],
        //   type: 'GET_DONATIONS',
        //   details:[],
        //   loading: false,

        // });
    //   });

  });





