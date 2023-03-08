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
      ></List>
    </>
  );
}
