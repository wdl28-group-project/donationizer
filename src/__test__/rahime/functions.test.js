const donationReducer = require('../../redux/reducers/donationReducer');
import {getDonationInfo} from './functions';

//TEST FOR REDUCER

describe('donationReducer should be able to update the initial state of the reducer as well as perform get requests',()=>{
    test(`"donationReducer.getDonations" function should update donations in the the state of the reducer`, () => {
        expect(donationReducer.getDonations().type).toBe('GET_DONATIONS')
    })
    test(`"donationReducer.getDonationsByCategory" function should update donations in the state of the reducer`, () => {
        expect(donationReducer.getDonationsByCategory().type).toBe('GET_DONATIONS_BY_CATEGORY')
    })
});

//TEST FOR AXIOS REQUEST

test("get donation detail", async ()=>{
    expect.assertions(1);
    const data = await  getDonationInfo(2);
    expect(data).toBeDefined();
})
