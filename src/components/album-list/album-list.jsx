import React from "react";
import { Link } from "react-router-dom";

const AlbumList = ({albums}) => {
    
    return (
        <div className="row">
            {albums.map((album) => {
                const imgPath = `https://via.placeholder.com/150/${album.color}`;

                return (
                    <Link to={`/albums/${album.albumId}/photos`} key={album.albumId}>
                        <div className="thumbnail-wrapper col-xs-12 col-sm-3">
                            <div className="thumbnail">
                                <div className="layer">
                                    <h4 className="thumbnail-heading">
                                        {album.albumTitle}
                                    </h4>
                                    <p className="thumbnail-text"> By{'  '}
                                            {album.username}
                                    </p>
                                </div>
                                <img src={imgPath} alt={album.title} className="thumbnail-img" />
                            </div>
                        </div>
                    </Link>
                )
            })
            }
        </div>
    )
};
export default AlbumList;
