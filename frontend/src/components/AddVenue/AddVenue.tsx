import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { toggleActions } from "@/src/redux/slices/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/src/hooks";

import styles from "./AddVenue.module.css";
import VenueForm from "@/src/components/VenueForm/VenueForm";

const AddVenue = () => {
  const dispatch = useAppDispatch();
  const { toggleAddVenue } = useAppSelector(state => state.toggleReducer);

  const closeAddVenue = () => {
    return dispatch(toggleActions.toggleAddVenue(!toggleAddVenue));
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.closeModal}>
          <button className={styles.closeBtn} onClick={closeAddVenue}>
            <CloseRoundedIcon className={styles.closeIcon} />
          </button>
        </div>
        <h2 className={styles.modalName}>Add Venue</h2>
        <VenueForm />
      </div>
    </div>
  );
};

export default AddVenue;