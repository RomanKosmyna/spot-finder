"use client";

import { apiService } from "@/src/services";
import { type FC } from "react";
import Image from "next/image";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

import styles from "./VenueDetail.module.css";
import VenueBadge from "@/src/components/VenueBadge/VenueBadge";

interface IProps {
  venue: object;
}

interface IVenue {
  name: string;
  photo: string;
  schedule: string;
  contact: string;
  description: string;
  tags: object;
}

const VenueDetail: FC<IProps> = ({ venue }) => {
  const { name, photo, contact, schedule, description, tags } = venue as IVenue;
  const venuePhoto: string = photo.split("/")[1];
  const photoUrl = `${apiService}/${venuePhoto}`;

  return (
    <div className={styles.mainVenueContainer}>
      <div className={styles.imgWrapper}>
        <Image
          src={photoUrl}
          alt={"Venue photo"}
          fill
          sizes={"max-width: 760px"}
          priority={true}
        />
      </div>
      <div className={styles.venueDetailsWrapper}>
        <div className={styles.venueDetailsTop}>
          <div className={styles.venueDetailsScheduleFavourite}>
            <span className={styles.schedule}>{schedule}</span>
            <FavoriteBorderRoundedIcon
              className={styles.favouriteIcon}
              fontSize={"medium"}
            />
          </div>
          <h1 className={styles.nameHeading}>{name}</h1>
        </div>

        <section className={styles.contact}>
          <h2 className={styles.contactHeading}>Contacts</h2>
          <p>{contact}</p>
        </section>

        <div className={styles.description}>
          <h2 className={styles.descriptionHeading}>About this venue</h2>
          <div className={styles.descriptionTextWrapper}>
            <p className={styles.descriptionText}>{description}</p>
          </div>
        </div>

        <div className={styles.tags}>
          <h2 className={styles.tagsHeading}>Tags</h2>
          {tags.map((tag: string, index: number) => (
            <VenueBadge key={index} tag={tag} index={index} />
          ))}
        </div>

        <div className={styles.comments}>

        </div>
      </div>


    </div>
  );
};

export default VenueDetail;