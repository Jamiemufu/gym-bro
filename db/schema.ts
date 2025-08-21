import { exercisesTable } from "./tables/exercise";
import { usersTable } from "./tables/user";

export { exercisesTable, usersTable };

export const schema = {
  users: usersTable,
  exercises: exercisesTable
};
