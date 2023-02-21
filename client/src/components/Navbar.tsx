import * as React from "react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import Button from "./buttons/Button";

const Navbar = () => {
    const { setIsLoggedIn, userData } = useContext(LoginContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            localStorage.removeItem("user");
            setIsLoggedIn(false);
            navigate("/auth/login");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className={"w-full bg-amber-300 min-h-[50px] flex flex-row items-center pl-6 pr-6"}>
                Navbar - {userData && userData.username}
                <Button background={"info"} className={"ml-auto"} onClick={() => handleLogout()} type={"button"}>
                    Logout
                </Button>
            </div>
        </>
    );
};

const withNavbarComponent = (Component: any) => (props: any) => {
    return (
        <>
            <Navbar />
            <Component {...props} />
        </>
    );
};

export default withNavbarComponent;
