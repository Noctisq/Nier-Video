import {useState, useEffect} from 'react';

const useinitialState = (API) => {
    const [videos, setVideos] = useState({ //Inicializar las propiedades del json que va a llegar
        'mylist' : [],
        'trends' : [],
        'originals' : []
    });

    
    
  
    useEffect(() =>{ //Recibe dos parámetros, el segundo es para 
      fetch(API)
      .then(response =>{
          return response.json()
      })
      .then((data) => 
      {
        
        setVideos(data)
      });
      
      console.log(videos);
      
    }, []);

    return videos;
};

export default useinitialState;