import Form from "../components/Form/index.js";
import useLocalStorageState from "use-local-storage-state";
import List from "@/components/List/List.js";
import { useState } from "react";

export default function ActivitiesPage() {
  const [editing, setEditing] = useState(false);
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleDeleteActivity(idToRemove) {
    setActivities(activities.filter((activity) => activity.id !== idToRemove));
  }

  const handleEditing = () => {
    setEditing(!editing);
  };

  /* // funktioniert, aber gibt jedem input den gleichen wert, aus dem Feld in dem man Enter gedrückt hat
  const handleEditDone = (event, id) => {
    console.log(event.target.value);
    if (event.key === "Enter") {
      setEditing(!editing);
      setActivities(
        activities.map((activity) => {
          console.log(activity.id, id);
          if (activity.id === id) {
            return [
              {
                ...activity,
                name: event.target.value,
                date: event.target.value,
                time: event.target.value,
              },
            ];
          } else {
            return activity;
          }
        })
      );
    }
  }; */

  return (
    <>
      <Form setActivities={setActivities} activities={activities}></Form>
      <List
        activities={activities}
        setActivities={setActivities}
        onDeleteActivity={handleDeleteActivity}
        onEditing={handleEditing}
        editing={editing}
        setEditing={setEditing}
        /* handleEditDone={handleEditDone} */
      ></List>
    </>
  );
}
