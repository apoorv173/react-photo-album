import React from "react";
import Error from "./error";
import { shallow, mount } from "enzyme";

describe("Error component Component", () => {

    const onClose = jest.fn();

    it("Should render the error message", () => {
        const tree = shallow(<Error />)
        expect(tree).toMatchSnapshot();
    });

    it('should render all the components isnide the error component and its heading', () => {
        const wrapper = mount(<Error error={'No data found'}/>);
        expect(wrapper.find('h1').length).toBe(1);
    });

});