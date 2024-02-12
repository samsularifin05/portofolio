interface Props {
  color?: string;
}
const IcClose = (props: Props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2_726)">
        <path
          d="M12.4425 10.5862L17.5751 5.63623L19.0412 7.05023L13.9086 12.0002L19.0412 16.9502L17.5751 18.3642L12.4425 13.4142L7.30991 18.3642L5.84375 16.9502L10.9763 12.0002L5.84375 7.05023L7.30991 5.63623L12.4425 10.5862Z"
          fill={props.color || "#767676"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2_726">
          <rect width="24.8852" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IcClose;
