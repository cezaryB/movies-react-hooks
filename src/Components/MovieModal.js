import React from 'react';

function MovieModal({ movieData, closeModal }) {
  return (
    <div className='movie-modal'>
      This will be my movie modal
      <h2>{movieData.original_title}</h2>
      <button className='movie-modal__close' onClick={closeModal}>
        close modal
      </button>
    </div>
  );
}

export default MovieModal;