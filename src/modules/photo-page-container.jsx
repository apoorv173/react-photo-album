import React, { Fragment, Suspense, useState, useEffect, lazy } from "react";
import {connect} from "react-redux";
import queryString from 'query-string';
import { fetchPhotos } from "../actions/photo-actions";
import { ModalWindow, Loader, Error } from "../components/";
import { getPhotoDetails } from '../selectors/selectors';

const PhotoList = lazy(() => import("../components/photo-list/photo-list"));
const DataTable = lazy(() => import("../components/data-table/data-table"));
const Pagination = lazy(() => import("../components/pagination/pagination"));

const PhotoPage = ({history, page, match, fetchAllPhotos, album, photosData, loading, error }) =>  {
    
    const [ show, setShow ] = useState(false);
    const [ modalData, setModalData ] = useState({});

    const getQueryParams = queryString.parse(history.location.search);
    const getSizeFromURL = parseInt(getQueryParams["size"], 10) || 20;
    const getPageFromURL = parseInt(getQueryParams["page"], 10) || 1;

    const photoCount = parseInt((photosData ? photosData.length : 0), 10);
    const albumId = parseInt(match.params.albumId, 10);
    
    useEffect(() => {
        fetchAllPhotos(albumId, getPageFromURL, getSizeFromURL);
    }, [match]);

    const onCountChange = (value) => {
		history.push({
            pathname: `/albums/${albumId}/photos`,
			search: `?size=${value}&page=${getPageFromURL}`
		});
    }

    const onPrevClick = () => {
		if(getPageFromURL > 1) {
			const page = getPageFromURL-1;
			history.push({
				pathname: `/albums/${albumId}/photos/`,
				search: `?size=${getSizeFromURL}&page=${page}`
			});
		}
	}

	const onNextClick = () => {
		const page = getPageFromURL+1;
		history.push({
			pathname: `/albums/${albumId}/photos`,
			search: `?size=${getSizeFromURL}&page=${page}`
		});
    }
    
    const onPhotoClick = (obj) => {
        setShow(true);
        setModalData(obj);
    }

    const closeModalHandler = () => {
        setShow(false);
        setModalData({});
    }

	const renderModalBody = () => {
        return (
            <Fragment>
                <div className="modal-right">
                    <img alt={modalData.title} className="thumbnail-img" src={modalData.url}/>
                </div>
                <div className="modal-left">
                    <h1 className="modal-title">{modalData.photoTitle}</h1>
                    <h2>By <span>{`   `}</span>{modalData.username}</h2>
                    <p className="modal-desc">Album: <span>{`   `}</span>{modalData.albumTitle}</p>
                </div>
            </Fragment>
        );
	}

	const renderModalWindow = () => {
		return (
			<ModalWindow
				className="modal"
				show={show}
				onClose={closeModalHandler}
			>
				{renderModalBody()}
			</ModalWindow>
		);
    }
    switch(true) {
        case (loading === true): 
            return <Loader />;

        case (error && error !== ''):
            return <Error error={error} />;

        case (photosData && photosData.length >= 0 ):
            return (
                <Suspense fallback={<Loader />} >
                    <Pagination 
                        prevDisabled={(getPageFromURL <= 1)}
                        nextDisabled={photoCount < getSizeFromURL}
                        onPrevClick={onPrevClick}
                        onNextClick={onNextClick}
                    />
                    <DataTable
                        rowCount={getSizeFromURL}
                        onCountChange={onCountChange}
                    />
                    <PhotoList 
                        album={album}       
                        photos={photosData}
                        page={page}
                        onPhotoClick={onPhotoClick}
                    />
                    {(show && modalData) && renderModalWindow()}

                </Suspense>
            )
            default: 
                return null;
    }
}

const mapStateToProps = state => {
    return {
        photosData: getPhotoDetails(state),
        error: state.photos.error,
        loading: state.photos.loading
        
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllPhotos: (albumId, page, limit) => {
          dispatch(fetchPhotos(albumId, page, limit));
        }
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);
