import { type FC } from "react";

interface IProps {
  tag: string;
}

const VenueTag: FC<IProps> = ({ tag }) => {
  return (
    <span>
      {tag}
    </span>
  );
};

export default VenueTag;