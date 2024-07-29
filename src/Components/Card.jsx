import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";
function Card({ post }) {
  const { deletePost }  = useContext(PostList);
  return (
      <div className="card card-width card-body">
        <span className=" btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={ () => deletePost(post.id)}>
          <AiFillDelete />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>{" "}
        <div className="d-flex">
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
        </div>
      </div>
  )
}

export default Card;