interface Props {
  color?: string;
}
const IcHome = ({ color }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_588)">
        <path
          d="M15 14.9999C15 15.1989 14.921 15.3896 14.7803 15.5303C14.6397 15.6709 14.4489 15.7499 14.25 15.7499H3.75C3.55109 15.7499 3.36032 15.6709 3.21967 15.5303C3.07902 15.3896 3 15.1989 3 14.9999V8.24994H0.75L8.49525 1.20894C8.63333 1.0833 8.81331 1.01367 9 1.01367C9.18669 1.01367 9.36667 1.0833 9.50475 1.20894L17.25 8.24994H15V14.9999Z"
          fill={`${color || "#2B2B2B"}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_2_588">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IcHome;
