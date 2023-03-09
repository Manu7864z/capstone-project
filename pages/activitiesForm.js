import Form from "../components/Form/index.js";
import List from "@/components/List/List.js";
import { useState } from "react";

export default function ActivitiesPage({ activities, setActivities }) {
  const [editing, setEditing] = useState(false);

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
