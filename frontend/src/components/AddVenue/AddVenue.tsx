import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { toggleActions } from "@/src/redux/slices/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/src/hooks";

import styles from "./AddVenue.module.css";

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
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name={"name"} />
          </div>
          <div>
            <label htmlFor="photo">Photo</label>
            <input type="file" name={"photo"} />
          </div>
          <div>
            <label htmlFor="schedule">Work Schedule</label>
            <input type="text" name={"schedule"} />
          </div>
          <div>
            <label htmlFor="contacts">Contact information</label>
            <input type="text" name={"contacts"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVenue;