import React from 'react';
import axios from 'axios';
import AddPostForm from './components/AddPostForm'; 

const baseUrl = 'https;//localhost4000';

function AddPost ({userInformation}) {
    function submitForm() {
        e.preventDefault();

        const text = e.currentTarget.text.value; 
        const imageSrc = e.currentTarget.imageSrc.value;
        const imageAlt = e.currentTarget.imageAlt.value; 
        const userId = userInformation.uid; 
        const userName = userInformation.userName;

        console.log({text, imageSrc, imageSrc, userId, displayName})

        const url = `${baseUrl}/create?text=${text}&imageSrc=${imageSrc}&imageAlt=${imageAlt}&userId=${userId}&userName=${userName}`
         axios
           .get(url)
           .then(function (response) {
               console.log({response})
                setCanvases(response.data);
                navigate('/', { replace: true });
           })
           .catch(function (error) {
             console.warn(error);
           });
       }

        return(
        <div className="PageWrapper">
            <h1>Add Post</h1>
        </div>
    )

}