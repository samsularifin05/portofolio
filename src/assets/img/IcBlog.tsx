interface Props {
  color?: string;
}
const IcBlog = ({ color }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_604)">
        <path
          d="M15.75 1.5C4.5 1.5 3 12 2.25 16.5H3.7485C4.248 14.0002 5.49825 12.6255 7.5 12.375C10.5 12 12.75 9.375 13.5 7.125L12.375 6.375L13.125 5.625C13.875 4.875 14.628 3.75 15.75 1.5Z"
          fill={color || "#767676"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2_604">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IcBlog;
