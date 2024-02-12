interface Props {
  color?: string;
}
const IcCheck = (props: Props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_716)">
        <path
          d="M10.3688 15.172L19.8998 5.979L21.367 7.393L10.3688 18L3.77002 11.636L5.23618 10.222L10.3688 15.172Z"
          fill={props.color || "#FFB400"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2_716">
          <rect width="24.8852" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IcCheck;
