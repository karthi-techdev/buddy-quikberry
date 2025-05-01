import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions/postActions';
import profileImg from '../../assets/img/profile-img.jpg';
import Loader from '../shared/Loader'; 
import { useInView } from 'react-intersection-observer';

const POSTS_PER_PAGE = 12;

const Post = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.post);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="text-white p-4 bg-[#0F172A] min-h-screen">
      <h2 className="text-white mb-6 text-[2rem] font-bold text-center">Posts</h2>

      {loading && <Loader />}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && (
        <>
          <div className="grid gap-6 mb-8">
            {currentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="flex justify-center space-x-4 mb-50">
            <button onClick={goToPreviousPage} disabled={currentPage === 1} className="px-4 py-2 rounded-md bg-[#0d1525] text-white font-medium hover:bg-[#0d1525] disabled:bg-gray-500 transition cursor-pointer">
              Previous
            </button>

            <span className="text-white self-center font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button onClick={goToNextPage} disabled={currentPage === totalPages} className="px-4 py-2 rounded-md bg-[#0d1525] text-white font-medium hover:bg-[#0d1525] disabled:bg-gray-500 transition cursor-pointer">
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const PostCard = ({ post }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`bg-[#1c2b45] p-6 rounded-2xl shadow-md border border-[#2d3a5a] hover:shadow-lg transition duration-300 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all ease-in-out duration-700`}>
      <div className="flex items-center space-x-3 mb-3">
        <img src={profileImg} alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover"/>
        <div>
          <p className="text-sm text-gray-300">User #{post.userId}</p>
          <p className="text-xs text-gray-500">Post ID: {post.id}</p>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-sm text-gray-300 whitespace-pre-line">{post.body}</p>
    </div>
  );
};

export default Post;
