import React, { useEffect } from 'react';
import styled from 'styled-components';

import ShowEpisodeItem from 'components/ShowEpisodeItem';

const Wrapper = styled.div``;

let lazyImages = [];
let active = false;

const handleLazyLoadImages = () => {
  if (!active) {
    const { innerHeight } = window;
    active = true;

    setTimeout(() => {
      lazyImages.forEach(lazyImage => {
        if (
          lazyImage.getBoundingClientRect().top <= innerHeight + 50 &&
          lazyImage.getBoundingClientRect().bottom >= -50
        ) {
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove('lazy-load');

          lazyImages = lazyImages.filter(image => image !== lazyImage);

          if (lazyImages.length === 0) {
            window.removeEventListener('scroll', handleLazyLoadImages);
            window.removeEventListener('resize', handleLazyLoadImages);
            window.removeEventListener(
              'orientationchange',
              handleLazyLoadImages
            );
          }
        }
      });

      active = false;
    }, 200);
  }
};

const ShowEpisodes = ({ episodes }) => {
  useEffect(() => {
    lazyImages = Array.from(document.querySelectorAll('.lazy-load'));

    window.addEventListener('scroll', handleLazyLoadImages);
    window.addEventListener('resize', handleLazyLoadImages);
    window.addEventListener('orientationchange', handleLazyLoadImages);

    return () => {
      window.removeEventListener('scroll', handleLazyLoadImages);
      window.removeEventListener('resize', handleLazyLoadImages);
      window.removeEventListener('orientationchange', handleLazyLoadImages);
    };
  }, []);

  const episodeList = episodes.map((episode, index) => (
    <ShowEpisodeItem key={episode.id} episode={episode} index={index} />
  ));

  return <Wrapper>{episodeList}</Wrapper>;
};

export default ShowEpisodes;
