import { useState, useEffect } from 'react';
import UserItem from '../../components/modules/UserItem';

export default function UserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users`)
      .then((response) => response.json())
      .then((result) => setUserList(result.data));
  }, []);

  return (
    <div className="container main">
      <ul className='wrap-content wrap user-list'>
        {userList.map((user => {
          return (
            <UserItem user={user} key={user.id}/>
          )
        }))}
      </ul>
    </div>
  )
}
