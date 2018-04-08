import { css } from 'react-emotion';

export const buttonLink = css`
  text-decoration: none;
  display: inline-block;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: #fff;
  box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12),
    0 10px 36px -4px rgba(152, 152, 152, 0.3);
  background: linear-gradient(to top, #000000, #434343);
  letter-spacing: 0.5px;
  border: none;
  width: 200px;
  transition: all 0.2s ease-in-out;
  font-family: inherit;
  &:hover {
    opacity: 0.8;
    box-shadow: 0 10px 15px -1px rgba(0, 0, 0, 0.1),
      0 25px 50px -4px rgba(238, 238, 238, 0.3);
  }
`;

export const textLink = css`
  color: inherit;
  font-size: inherit;
  font-weight: 600;
  text-decoration: none;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid #ccc;
  box-shadow: inset 0 -2px 0px 0px #ccc;
  &.gatsby-resp-image-link {
    box-shadow: none;
    border-bottom: transparent;
  }
  &:hover {
    background: #ccc;
  }
`;
