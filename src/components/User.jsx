import { useAuth } from "../context/fakeAuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./User.module.css";

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function User() {
  const { logout } = useAuth();
  const user = FAKE_USER;
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img
        src={user.avatar}
        alt={user.name}
      />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

/*
CHALLENGE




4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`

*/
