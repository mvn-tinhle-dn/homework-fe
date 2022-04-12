import UserInfo from "./UserInfo";
function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment-text">
        {props.author.text}
      </div>
      <div className="comment-date">
        on {props.author.date}
      </div>
    </div>
  );
}
export default Comment;
