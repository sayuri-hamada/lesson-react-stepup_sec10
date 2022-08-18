import { FC, VFC } from "react";
type Props = {
  color: string;
  fontSize: string;
};

// FC・・・propsにchildrenを持つ関数型
// VFC・・・propsにchildrenを持たない関数型
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキスト</p>;
};
