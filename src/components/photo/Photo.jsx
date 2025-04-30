import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../../redux/actions/photoActions';
import profileImg from '../../assets/img/profile-img.jpg';
import Loader from '../shared/Loader';
import { useInView } from 'react-intersection-observer';

const Photo = () => {
  const dispatch = useDispatch();
  const { photos, loading, error } = useSelector((state) => state.photo);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const photosByAlbum = photos.reduce((acc, photo) => {
    if (!acc[photo.albumId]) {
      acc[photo.albumId] = [];
    }
    acc[photo.albumId].push(photo);
    return acc;
  }, {});

  return (
    <div className="text-white p-4 bg-[#0F172A]">
      <h2 className='text-white mb-3 text-[2rem] font-bold text-center'>Photo's</h2>

      {loading && <Loader />}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && Object.entries(photosByAlbum).map(([albumId, albumPhotos]) => (
        <div key={albumId} className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albumPhotos.slice(0, 6).map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const PhotoCard = ({ photo }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <div ref={ref} className={`bg-[#1E293B] rounded-xl overflow-hidden shadow-lg border border-[#2d3a5a] hover:shadow-lg transition duration-300 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transition-all ease-in-out duration-700`} >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <img src={profileImg} alt="User" className="w-10 h-10 rounded-full object-cover border-2 border-white"/>

          <div>
             <p className="text-sm font-medium">Album #{photo.albumId}</p>
            <p className="text-xs text-gray-400">Photo ID: {photo.id}</p>
          </div>
        </div>
      </div>

      <img src={photo.url} alt={photo.title} className="w-full h-64 object-cover" />

      <div className="px-4 py-3">
        <p className="text-sm text-gray-300">
          <span className="font-semibold text-white">Caption:</span> {photo.title}
        </p>
      </div>
    </div>
  );
};

export default Photo;
