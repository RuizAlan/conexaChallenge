import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

const columnas=[
    {
        title:"Album Id",
        field:"albumId"
    },
    {
        title:"Id",
        field:"id"
    },
    {
        title:"Title",
        field:"title"
    },
    {
        title:"Url",
        field:"url"
    },
    {
        title:"ThumbnailUrl",
        field:"thumbnailUrl"
    }
]

const PhotosScreen = () => {
    const [photos, setPhotos] = useState([]);
    const obtenerPhotos = async () => {
        const res = await axios.get('http://localhost:3000/api/photos');
        const photos = await res.data;
        console.log(photos);
        setPhotos(photos);
    };
    useEffect(() => {
        obtenerPhotos();
    }, []);

    return (
        <div>
            <MaterialTable
            columns={columnas}
            data={photos}
            title="Photos list"
            options={{
                search:false,
            }}
            />

            {/* <h2>Lista de Photos</h2>
                <div>
                    <table className="table table-bordered table-hover">
                        <thead className="table-primary">
                            <tr>
                                <th>AlbumId</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Url</th>
                                <th>ThumbnailUrl</th>
                            </tr>
                        </thead>
                        {photos.map((photos) => (
                        <tbody>
                            <tr>
                                <td>{photos.albumId}</td>
                                <td>{photos.id}</td>
                                <td>{photos.title}</td>
                                <td>{photos.url}</td>
                                <td>{photos.thumbnailUrl}</td>
                            </tr>
                        </tbody>
                        ))}
                    </table>
                </div> */}
        </div>
    );
};

export default PhotosScreen;
