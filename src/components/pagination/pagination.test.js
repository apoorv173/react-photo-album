import React from "react";
import Pagination from "./pagination";
import { shallow, mount } from "enzyme";

describe("Pagination comnponent", () => {

    const onPrevClick = jest.fn();
    const onNextClick = jest.fn();
    it("Should render the Pagination with both the buttons enabled", () => {
        const tree = shallow(<Pagination onPrevClick={onPrevClick} onNextClick={onNextClick} ></Pagination>)
        expect(tree).toMatchSnapshot();
    });

    it("Should render the Pagination with both the buttons disabled", () => {
        const tree = shallow(<Pagination 
                onPrevClick={onPrevClick} 
                onNextClick={onNextClick} 
                prevDisabled={true}
                nextDisabled={true}
            ></Pagination>)
        expect(tree).toMatchSnapshot();
    });

    it('should render all the components isnide the pagination component', () => {
        const wrapper = mount(<Pagination onPrevClick={onPrevClick} onNextClick={onNextClick} ></Pagination>);
        expect(wrapper.find('.pagination').length).toBe(1);
        expect(wrapper.find('.left').length).toBe(1);
        expect(wrapper.find('.right').length).toBe(1);
    });

    it('should call the on on previous and on next event', () => {
        const wrapper = mount(<Pagination onPrevClick={onPrevClick} onNextClick={onNextClick}></Pagination>);

        wrapper.find(".prev-btn").simulate("click");
        expect(onPrevClick).toHaveBeenCalled();

        wrapper.find(".next-btn").simulate("click");
        expect(onNextClick).toHaveBeenCalled();
    });
});