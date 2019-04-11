import { css } from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px'
};

export const media = {
  w1920: (...args) => css`
    @media (max-width: ${size.desktop}) {
      ${css(...args)};
    }
  `,
  w1440: (...args) => css`
    @media (max-width: ${size.laptopL}) {
      ${css(...args)};
    }
  `,
  w1024: (...args) => css`
    @media (max-width: ${size.laptop}) {
      ${css(...args)};
    }
  `,
  w768: (...args) => css`
    @media (max-width: ${size.tablet}) {
      ${css(...args)};
    }
  `,
  w425: (...args) => css`
    @media (max-width: ${size.mobileL}) {
      ${css(...args)};
    }
  `,
  w375: (...args) => css`
    @media (max-width: ${size.mobileM}) {
      ${css(...args)};
    }
  `,
  w320: (...args) => css`
    @media (max-width: ${size.mobileS}) {
      ${css(...args)};
    }
  `
};
