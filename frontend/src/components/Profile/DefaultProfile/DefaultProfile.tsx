import { useAppDispatch, useAppSelector } from "@/src/hooks";
import Image from "next/image";

import styles from "./DefaultProfile.module.css";
import { toggleActions } from "@/src/redux/slices/toggleSlice";

const DefaultProfile = () => {
  const dispatch = useAppDispatch();
  const {toggleAddVenue} = useAppSelector(state => state.toggleReducer);

  const openAddVenue = () => {
    return dispatch(toggleActions.toggleAddVenue(!toggleAddVenue));
  }

  return (
    <>
      <div className={styles.photoContainer}>
        <Image
          src={"/img/mobileNav.jpg"}
          fill={true}
          alt={"Profile photo"}
          sizes={"fill"}
          priority={true}
        />
      </div>

      <div className={styles.profileContainer}>
        <span>About Profile</span>
        <div className={styles.actionContainer}>
          <ul className={styles.actionList}>
            <li className={styles.action}>Email</li>
            <li className={styles.action}>Username</li>
            <li className={styles.action}>Password</li>
          </ul>
        </div>
      </div>

      <div className={styles.venuesContainer}>
        <span>About Venues</span>
        <div className={styles.actionContainer}>
          <ul className={styles.actionList}>
            <li className={styles.action}>
              <button onClick={openAddVenue}>Add Venue</button>
            </li>
            <li className={styles.action}>Edit Venue</li>
            <li className={styles.action}>Delete Venue</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DefaultProfile;