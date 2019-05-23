import React from "react";
import PhotoList from "./photo-list";
import { shallow, mount } from "enzyme";
import photos from '../../data/photos.json';

describe("Photo List Component", () => {

    const onPhotoClick = jest.fn();

    it("Should render photos with user data", () => {
        const tree = shallow(<PhotoList photos={photos} />)
        expect(tree).toMatchSnapshot();
    });

    it('should render all the components', () => {
        const wrapper = mount(<PhotoList photos={photos} onPhotoClick={onPhotoClick} />);
        expect(wrapper.find('.row').length).toBe(1);
        expect(wrapper.find('.thumbnail').length).toBe(2);
        expect(wrapper.find('.thumbnail-img').length).toBe(2);
        expect(wrapper.find('.thumbnail-heading').length).toBe(2);
        expect(wrapper.find('.layer').length).toBe(2);
    });

    it('should call the on click event to load the modal', () => {
        const wrapper = mount(<PhotoList photos={photos} onPhotoClick={onPhotoClick} />);
        expect(wrapper.find('.row').length).toBe(1);
        wrapper.find(".row .thumbnail-wrapper").at(0).simulate("click");
        expect(onPhotoClick).toHaveBeenCalled();
    });
});