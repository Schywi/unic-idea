import axios from 'axios';
import {useState} from 'react';


 const getFile =  (files) => {
     
    console.log("nami", )

    const fileData = files.props.data; 
 

    return (
        <>
       
         { fileData === undefined ? ( <p>Adicione a imagem</p> ): (fileData.map(item => <p>{item}</p>)) }
        </>
        
      );
  
  }


export default getFile;
 