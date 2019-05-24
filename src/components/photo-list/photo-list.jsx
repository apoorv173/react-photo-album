import React from "react";

const PhotoList = ({photos, onPhotoClick}) => {
    const photoCount = photos.length;
    if(photoCount === 0) {
        return (
            <h3>No results found</h3>
        );
    }
    return (
        <div className="row">
            <h1>{photos[0].albumTitle}</h1>
            <h2>By  {photos[0].username}</h2>
            {photos.map((photo) => {
                return (
                    <div 
                        className="thumbnail-wrapper col-xs-12 col-sm-3" 
                        onClick={() => onPhotoClick(photo)}
                        key={photo.photoId}
                    >
                        <div className="thumbnail">
                            <div className="layer">
                                <h4 className="thumbnail-heading">{photo.photoTitle}</h4>
                            </div>
                            <img alt={photo.title} className="thumbnail-img" src={photo.thumbnailUrl}/>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
};
export default PhotoList;

