export default function UserItem({ user }) {
  return (
    <li className="col-2-5 user-item">
      <img src={user.avatar} alt="" />
      <p className='user_name'>{`${user.first_name} ${user.last_name}`}</p>
      <p className='user_email'>{user.email}</p>
    </li>
  )
}
