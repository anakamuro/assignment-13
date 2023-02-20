import {logout, selectUser} from "./features/userSlice";
import {useDispatch} from "react-redux"

const Signout = () => {
    const user = userSelector(selectUser)

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDeafult();

        dispatch(logout());
    };

    return(
        <div className="logout">
            <h1>
            Welcome <span className="user__name">Name</span>
            </h1>{" "}
            <button className="logout_button" onClick={(e) => handleLogout(e)}>
            </button>
        </div>
    )
}

export default Signout;