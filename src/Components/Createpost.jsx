import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function Createpost() {
  const { addPost } = useContext(PostList);
  const UserIdElement = useRef();
  const titleElement = useRef();
  const descElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = UserIdElement.current.value;
    const title = titleElement.current.value;
    const desc = descElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    UserIdElement.current.value = "";
    titleElement.current.value = "";
    descElement.current.value = "";
    tagsElement.current.value = "";
    addPost(userId, title, desc, tags);
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <div className="mb-3">
        <label for="UserID" className="form-label">
          UserID
        </label>
        <input
          type="text"
          className="form-control"
          id="UserID"
          ref={UserIdElement}
        />
      </div>
      <div className="mb-3">
        <label for="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          ref={titleElement}
          id="title"
        />
      </div>
      <div className="mb-3">
        <label for="body" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="body"
          rows={4}
          ref={descElement}
        />
      </div>
      <div className="mb-3">
        <label for="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Createpost;
