import { useContext } from "react";
import Card from "./Card";
import { PostList} from "../store/post-list-store";

const Cards = () => {
  const { postList } = useContext(PostList);
  return (
    <>
      {postList.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </>
  );
};

export default Cards;