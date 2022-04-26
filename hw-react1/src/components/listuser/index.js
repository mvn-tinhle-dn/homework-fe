import { useEffect, useState } from "react";
import './style.scss';
export default function UserList() {
  const [user, setState] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((response) => response.json())
      .then((result) => setState(result.data));
  }, [page]);

  return (
    <>
      <div className="user-list">
        {user.map((item) => {
          return (
            <div key={item.id} className="user-item">
              <img src={item.avatar} alt="" />
              <p>{item.email}</p>
              <p>{item.first_name + " " + item.last_name}</p>
            </div>
          );
        })}
      </div>
      <div className="btn-page">
        <button onClick={() => setPage(page === 1 ? 1 : page - 1)}>Prev</button>
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(page === 2 ? 2 : page + 1)}>Next</button>
      </div>
    </>
  );
}
