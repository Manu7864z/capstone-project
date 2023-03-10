import Form from "../components/Form/index.js";
import List from "@/components/List/List.js";
import { useState } from "react";

export default function ActivitiesPage({
  activities,
  setActivities,
  onDeleteActivity,
}) {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(!editing);
  };

  return (
    <>
      <Form setActivities={setActivities} activities={activities}></Form>
      <List
        activities={activities}
        setActivities={setActivities}
        onDeleteActivity={onDeleteActivity}
        onEditing={handleEditing}
        editing={editing}
        setEditing={setEditing}
      ></List>
    </>
  );
}
