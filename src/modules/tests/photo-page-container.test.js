import React, { lazy } from "react";
import {MemoryRouter} from "react-router-dom";
import { shallow, mount } from "enzyme";
import { PhotoPage } from "../photo-page-container";
import photos from '../../data/more-photos.json';
import { history } from "../../configureStore";

const PhotoList = lazy(() => import("../components/photo-list/photo-list"));
const DataTable = lazy(() => import("../components/data-table/data-table"));
const Pagination = lazy(() => import("../../components/pagination/pagination"));

describe("Photo List Component", () => {

    const onNextClick = jest.fn();
    const onPrevClick = jest.fn();

    it("Should render the loader component only with its snapshot", () => {
        const tree = shallow(<MemoryRouter><PhotoPage loading={true} /></MemoryRouter>)
        expect(tree).toMatchSnapshot();
    });

    it("Should render the error component only with its snapshot", () => {
        const tree = shallow(<MemoryRouter><PhotoPage error="no results found" /></MemoryRouter>)
        expect(tree).toMatchSnapshot();
    });

    it("Should return null if albums doesnt exist, and no eror is there", () => {
        const tree = shallow(<MemoryRouter><PhotoPage loading={false} error="" albumsData={[]} /></MemoryRouter>)
        expect(tree).toMatchSnapshot();
    });
    
    it('rendered lazily', async()=> {
        const fetchAllPhotos = jest.fn();
        const match = {
            params: {
                albumId: '1'
            }
        }
        const wrapper = mount(
            <MemoryRouter>
                <PhotoPage  photosData={photos} match={match} loading={false} error='' history={history} fetchAllPhotos={fetchAllPhotos} >
                </PhotoPage>
            </MemoryRouter>
        );
    
        await PhotoList;
        await DataTable;
        await Pagination;

        wrapper.setProps({ photosData: photos, loading: false });
        wrapper.find('.next-btn').simulate('click');
        expect(history.location.pathname).toEqual('/albums/1/photos');
        expect(history.location.search).toEqual('?size=20&page=2');
      })

});