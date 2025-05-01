import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../../redux/actions/photoActions';
import profileImg from '../../assets/img/profile-img.jpg';
import Loader from '../shared/Loader';
import { useInView } from 'react-intersection-observer';

const PHOTOS_PER_PAGE = 12;

const Photo = () => {
  const dispatch = useDispatch();
  const { photos, loading, error } = useSelector((state) => state.photo);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const indexOfLastPhoto = currentPage * PHOTOS_PER_PAGE;
  const indexOfFirstPhoto = indexOfLastPhoto - PHOTOS_PER_PAGE;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const totalPages = Math.ceil(photos.length / PHOTOS_PER_PAGE);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="text-white p-4 bg-[#0F172A] min-h-screen">
      <h2 className='text-white mb-6 text-[2rem] font-bold text-center'>Photos</h2>

      {loading && <Loader />}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>

          <div className="flex justify-center space-x-4 mb-50">
            <button onClick={goToPreviousPage} disabled={currentPage === 1} className={`px-4 py-2 rounded-md bg-[#0d1525] text-white font-medium hover:bg-[#0d1525] disabled:bg-gray-500 transition cursor-pointer`} >
              Previous
            </button>

            <span className="text-white self-center font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button onClick={goToNextPage} disabled={currentPage === totalPages} className={`px-4 py-2 rounded-md bg-[#0d1525] text-white font-medium hover:bg-[#0d1525] disabled:bg-gray-500 transition cursor-pointer`}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const PhotoCard = ({ photo }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`bg-[#1E293B] rounded-xl overflow-hidden shadow-lg border border-[#2d3a5a] hover:shadow-lg transition duration-300 transform ${ inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all ease-in-out duration-700`}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <img src={profileImg} alt="User" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
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
