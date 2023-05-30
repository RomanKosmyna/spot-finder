import { type FC } from "react";
import { type Venue } from "@/src/interfaces";
import Image from "next/image";
import { apiService } from "@/src/services";

import styles from "./VenueListItem.module.css";
import GeneralButton from "@/src/components/GeneralButton/GeneralButton";

interface IProps {
  venue: Venue;
}

const VenueListItem: FC<IProps> = ({ venue }: IProps) => {
    const photo = venue.photo.split("/")[1];
    const photoUrl = `${apiService}/${photo}`;

    return (
      <section
        style={{
          backgroundImage: `url(${photoUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={styles.item}
      >
        <div className={styles.description}>
            <h2 className={styles.itemHeading}>
              {venue.name}
            </h2>
          <div className={styles.stripe}></div>
          <div className={styles.descriptionFadeIn}>
            <p className={styles.text}>{venue.description}</p>
            <GeneralButton text={"View details"} />
          </div>
        </div>
        {/* <Image */}
        {/*  src={`${photoUrl}`} */}
        {/*  alt={"Venue photo"} */}
        {/*  fill */}
        {/*  sizes={"max-width: 760px"} */}
        {/*  priority={true} */}
        {/* /> */}
        <div>{venue.tags}</div>
      </section>
    );
  }
;

export default VenueListItem;