import React, { useEffect } from 'react';
import axios from 'axios'; 

import { useParams } from 'react-router-dom'; 

const url = `http://localhost:4000`;

function Post () {
    const [singleCanvas, setSingleCanvas] = useState({}); 
    let { id } = useParams(); 

    useEffect(() => {
        axios
        .get(`${url}/canvas/${id}`)
        .then(function (response) {
          setSingleCanvas(response.data);
        })
        .catch(function (error) {
          // handle error
          console.warn(error);
        });
    }, [id]); 

}
