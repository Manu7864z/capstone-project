import Form from "../components/Form/index.js";
import useLocalStorageState from "use-local-storage-state";

export default function ActivitiesPage() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  return <Form setActivities={setActivities} activities={activities}></Form>;
}
