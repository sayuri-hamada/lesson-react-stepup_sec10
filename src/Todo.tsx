import { TodoType } from "./types/Todo";

export const Todo = (
  //  必要な型のみを抽出する場合はPickを使用する
  //  props: Pick<TodoType, "userId" | "title" | "completed">
  // 不必要な型を排除して使用する場合はOmitを使用する
  props: Omit<TodoType, "id">
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}（ユーザー：${userId}）`}</p>;
};
