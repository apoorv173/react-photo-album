import React, { lazy } from "react";
import {MemoryRouter} from "react-router-dom";
import { shallow, mount } from "enzyme";
import { AlbumPage } from "../album-page-container";
import albums from '../../data/more-albums.json';
import { history } from "../../configureStore";

const AlbumList = lazy(() => import("../components/album-list/album-list"));
const DataTable = lazy(() => import("../components/data-table/data-table"));
const Pagination = lazy(() => import("../../components/pagination/pagination"));

describe("Album List Component", () => {

    const onNextClick = jest.fn();
    const onPrevClick = jest.fn();

    it("Should render the loader component only with its snapshot", () => {
        const tree = shallow(<MemoryRouter><AlbumPage loading={true} /></MemoryRouter>)
        expect(tree).toMatchSnapshot();
    });

    it("Should render the error component only with its snapshot", () => {
        const tree = shallow(<MemoryRouter><AlbumPage error="no results found" /></MemoryRouter>)
        expect(tree).toMatchSnapshot();
    });

    it("Should return null if albums doesnt exist, and no eror is there", () => {
        const tree = shallow(<MemoryRouter><AlbumPage loading={false} error="" albumsData={[]} /></MemoryRouter>)
        expect(tree).toMatchSnapshot();
    });
    
    it('rendered lazily', async()=> {
        const historyMock = { location: jest.fn(), push: jest.fn() };
        const fetchAlbums = jest.fn();
        const wrapper = mount(
            <MemoryRouter>
                <AlbumPage  albumsData={albums} loading={false} error='' history={history} fetchAlbums={fetchAlbums} >
                </AlbumPage>
            </MemoryRouter>
        );
    
        await AlbumList;
        await DataTable;
        await Pagination;

        wrapper.setProps({ albumsData: albums, loading: false });
        wrapper.find('.next-btn').simulate('click');
        expect(history.location.search).toEqual('?size=20&page=2');
      })

});