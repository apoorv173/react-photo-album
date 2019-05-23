import React from "react";
import AlbumList from "./album-list";
import { shallow, mount } from "enzyme";
import albums from '../../data/albums.json';
import { Link } from "react-router-dom";
import {MemoryRouter} from "react-router-dom";

describe("Album List Component", () => {

    const onNextClick = jest.fn();
    const onPrevClick = jest.fn();

    it("Should render albums with user data", () => {
        const tree = shallow(<MemoryRouter><AlbumList albums={albums} /></MemoryRouter>)
        expect(tree).toMatchSnapshot();
    });

    it('should render all the components', () => {
        const wrapper = mount(<MemoryRouter><AlbumList albums={albums} /></MemoryRouter>);
        expect(wrapper.find(Link).length).toBe(2);
        expect(wrapper.find('.row').length).toBe(1);
        expect(wrapper.find('.thumbnail').length).toBe(2);
        expect(wrapper.find('.thumbnail-img').length).toBe(2);
        expect(wrapper.find('.thumbnail-heading').length).toBe(2);
        expect(wrapper.find('.thumbnail-text').length).toBe(2);
        expect(wrapper.find('.layer').length).toBe(2);
    })
});