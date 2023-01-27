import { useRef, useContext } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
  const newPasswordHandler = useRef();
  const authCtx = useContext(AuthContext);

  const newPassFunc = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC2aWDHltsNHS2_AoE5WAwW53OyqeItl4g",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPasswordHandler.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        }
      }).then((res)=> {
        if(res.ok){
          return res.json()
        }
      })
    }
  return (
    <form className={classes.form} onSubmit={newPassFunc}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordHandler} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
