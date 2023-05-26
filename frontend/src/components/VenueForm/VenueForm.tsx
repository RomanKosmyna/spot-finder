import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./VenueForm.module.css";

const VenueForm = () => {
  const [tags, setTags] = useState<object[]>([]);
  const [chosenTags, setChosenTags] = useState<string[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/venue/getTags").then((response) => {
      setTags(response.data);
    })
      .catch((error) => {
        console.log(error.messages);
      });
  }, []);

  const chooseTag = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: string) => {
    e.preventDefault();
    if (!chosenTags.includes(data)) {
      setChosenTags((prevState) => [...prevState, data]);
    } else {
      setChosenTags((prevState) => prevState.filter(tag => tag !== data));
    }
  };

  return (
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
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" name={"description"} />
      </div>
      <div>
        <label htmlFor="">Tags</label>
        <div>
          <h3>Categories</h3>
          {tags.categories?.map((category: string, index: number) => (
            <button type="submit" key={index} onClick={(event) => {
              chooseTag(event, category);
            }} className={`${chosenTags.includes(category) && styles.green}`}>{category}</button>
          ))}
        </div>
        <div>
          <h3>Cuisine</h3>
          {tags.cuisine?.map((cuisine: string, index: number) => (
            <button type="submit" key={index} onClick={(event) => {
              chooseTag(event, cuisine);
            }} className={`${chosenTags.includes(cuisine) && styles.green}`}>{cuisine}</button>
          ))}
        </div>
        <div>
          <h3>Features</h3>
          {tags.features?.map((feature: string, index: number) => (
            <button type="submit" key={index} onClick={(event) => {
              chooseTag(event, feature);
            }} className={`${chosenTags.includes(feature) && styles.green}`}>{feature}</button>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <button>
          Add
        </button>
      </div>
      {JSON.stringify(chosenTags)}
    </form>
  );
};

export default VenueForm;