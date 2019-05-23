import React from "react";
import ModalWindow from "./modal-window";
import { shallow, mount } from "enzyme";

describe("Modal window component Component", () => {

    const onClose = jest.fn();

    it("Should render the modal window", () => {
        const tree = shallow(<ModalWindow ><p>Modal window</p></ModalWindow>)
        expect(tree).toMatchSnapshot();
    });

    it('should render all the components isnide the modal and its children', () => {
        const wrapper = mount(<ModalWindow ><p>Modal window</p></ModalWindow>);
        expect(wrapper.find('.modal').length).toBe(1);
        expect(wrapper.find('.modal-parent').length).toBe(1);
        expect(wrapper.find('.modal-container').length).toBe(1);
        expect(wrapper.find('.modal-close').length).toBe(1);
    });

    it('should call the on close event on click of the close button', () => {
        const wrapper = mount(<ModalWindow onClose={onClose}><p>Modal window</p></ModalWindow>);
        wrapper.find(".modal .modal-close").simulate("click");
        expect(onClose).toHaveBeenCalled();
    });
});