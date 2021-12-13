import React, { useCallback } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import CreateUserForm from "../components/CreateUserForm";

function CreateUser({ setErrors, setLoggedIn, setUserInformation }) {
  const signUpUser = useCallback(
    (e) => {
      e.preventDefault();

      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      //const displayName = e.currentTarget.displayName.value;
      
      console.log({email, password});
      
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

        //   user.updateProfile ({
        //       displayName: username
        //   }).then(function(){
        //       //
        //   }, function(error) {
        //     //
        //   });
        
          setLoggedIn(true);
          setUserInformation({
            email: user.email,
            //displayName: user.displayName,
            uid: user.uid,
            accessToken: user.accessToken,
          });
          setErrors();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ error, errorCode, errorMessage });
        });
    },
    [setLoggedIn, setUserInformation]
  );
  return (
    <div className="PageWrapper">
      <CreateUserForm signUpUser={signUpUser}/> 
    </div>
  );
}

export default CreateUser;