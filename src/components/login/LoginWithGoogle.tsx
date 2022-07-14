import firebase from "firebase/compat";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import {useAppDispatch} from "../../redux/app/store";
import {useNavigate} from "react-router-dom";
import {auth} from "../../../firebaseConfig";
import {signInWithPopup} from "firebase/auth";
import {Button} from "@mantine/core";
import * as React from "react";
import {IUser} from "../../types/IUser";
import {loginUser, setLoginError} from "../../redux/features/loginSlice";

const providerGoogleAuth = new GoogleAuthProvider();

interface IProps {

}

const LoginWithGoogle: React.FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const signInWithGoogleButton = () => {
        const HOME = '/'
        signInWithPopup(auth, providerGoogleAuth)
            .then((result) => {
                const user = result.user;
                const userToDispatch: IUser= {
                    name: user.displayName!,
                    email: user.email!,
                    uid: user.uid,
                    photoURL: user.photoURL!,
                }
                dispatch(loginUser(userToDispatch))
                navigate(HOME)
            }).catch((error) => {
            console.log(error)
            dispatch(setLoginError(error.message))

        });
    }

    return <div>
        <Button onClick={signInWithGoogleButton} variant="gradient" gradient={{from: 'orange', to: 'red'}}>Google log in</Button>
    </div>
}
export default LoginWithGoogle