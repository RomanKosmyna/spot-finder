import { type FC } from "react";
import { type Venue } from "@/src/interfaces";
import { apiService } from "@/src/services";
import GeneralButton from "@/src/components/GeneralButton/GeneralButton";
import VenueBadge from "@/src/components/VenueBadge/VenueBadge";

import styles from "./VenueListItem.module.css";

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
            <GeneralButton text={"View details"} id={venue.id} />
          </div>
        </div>
        <div className={styles.tags}>
          {venue.tags.map(
            (tag, index) =>
              <VenueBadge key={index} tag={tag} index={index} />,
          )}
        </div>
      </section>
    );
  }
;

export default VenueListItem;