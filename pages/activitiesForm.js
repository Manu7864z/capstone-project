import Form from "../components/Form/index.js";
import { useImmerLocalStorageState } from "@/Utils/useImmerLocalStorageState.js";
import List from "@/components/List/List.js";
import { useState } from "react";

export default function ActivitiesPage() {
  const [activities, updateActivities] = useImmerLocalStorageState(
    "activities",
    {
      defaultValue: [],
    }
  );

  const [editActivity, setEditActivity] = useState(false);

  function handleDeleteActivity(idToRemove) {
    updateActivities(
      activities.filter((activity) => activity.id !== idToRemove)
    );
  }

  function handleEditActivity(idToEdit) {
    setEditActivity(!editActivity);
    const activityToEdit = activities.find(
      (activity) => activity.id !== idToEdit
    );
    console.log(activityToEdit);
  }

  return (
    <>
      <Form setActivities={updateActivities} activities={activities}></Form>
      <List
        activities={activities}
        onDeleteActivity={handleDeleteActivity}
        onEditActivity={handleEditActivity}
        editActivity={editActivity}
        updateActivities={updateActivities}
        setEditActivity={setEditActivity}
      ></List>
    </>
  );
}
