import Avatar from "./Avartar";
function UserInfo(props) {
  return (
    <div className="userInfo">
      <Avatar user={props.user} />
      <div className="userInfo-name">
        {props.user.name}
      </div>
    </div>
  );
};
export default UserInfo;
