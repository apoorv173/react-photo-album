import React, { Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Loader, Error } from '../components';
import { fetchAllAlbums } from '../actions/album-actions';
import { getAlbumDetails } from '../selectors/selectors';

const AlbumList = lazy(() => import("../components/album-list/album-list"));
const DataTable = lazy(() => import("../components/data-table/data-table"));
const Pagination = lazy(() => import("../components/pagination/pagination"));

const AlbumPage = ({ albumsData, fetchAlbums, history, match, loading, error }) => {

	const getQueryParams = queryString.parse(history.location.search);
	const getSizeFromURL = parseInt(getQueryParams["size"], 10) || 20;
	const getPageFromURL = parseInt(getQueryParams["page"]) || 1;

	const albumCount = parseInt((albumsData ? albumsData.length : 0), 10);
	
	useEffect(() => {
		fetchAlbums(getPageFromURL, getSizeFromURL);
	}, [match]);
	
	const onCountChange = (value) => {
		history.push({
			pathname: `/albums`,
			search: `?size=${value}&page=1`
		});
	}

	const onPrevClick = () => {
		if(getPageFromURL > 1) {
			const page = getPageFromURL-1;
			history.push({
				search: `?size=${getSizeFromURL}&page=${page}`
			});
		}
	}

	const onNextClick = () => {
		const page = getPageFromURL+1;
		history.push({
			search: `?size=${getSizeFromURL}&page=${page}`
		});
	}
	switch(true) {
		case (error && error !== ''):
			return <Error error={error} />;

		case (albumsData && albumsData.length >= 0):
			return (
				<div className="">
					<h1>All albums</h1>
					<Suspense fallback={ <Loader />} >
						<Pagination 
							prevDisabled={(getPageFromURL <= 1)}
							nextDisabled={albumCount < getSizeFromURL}
							onPrevClick={onPrevClick}
							onNextClick={onNextClick}
						/>
						<DataTable 
							rowCount={getSizeFromURL}
							onCountChange={onCountChange}
						/>
						<AlbumList 
							albums={albumsData}
						/>
					</Suspense>
				</div>
			);
		default: 
			return null;
	}
};

const mapStateToProps = state => {
    return {
		albumsData: getAlbumDetails(state),
		error: state.albums.error,
		loading: state.albums.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAlbums: (size, limit) => {
          dispatch(fetchAllAlbums(size, limit));
        }
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
