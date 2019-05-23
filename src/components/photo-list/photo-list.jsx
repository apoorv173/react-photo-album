import React from "react";

const PhotoList = ({photos, onPhotoClick}) => {
    
    return (
        <div className="row">
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

