import UiFileInputButton from './UiFileInputButton';
import axios from 'axios';
import {useState} from 'react';
 import GetFile from './getFile'
const IndexPage = (props) => {
 
  const [files,setFiles] = useState({})

  const getData = async () => {
      try {
          const response = await axios.get('/api/uploads').then(resp => {
       
              setFiles(resp.data)
              console.log("newData", files)
              console.log("get" , resp.data);
          });
      } catch (err){
          console.log("the response was not loaded yet", err)
          setFiles({data: undefined})
      }
     
   
  }
    console.log("teste", files)
 
 
    const deleteData = async () => {
      try {
        const response = await axios.put('/api/uploads').then(resp => {
     
            
            console.log("dekete", resp.data)
           
        });
        const getResponse = await getData();
        console.log("resp2", getResponse)
    } catch (err){
        console.log("the response was not loaded yet", err)
    }
    }



    const onChange = async (formData) => {
      
      const config = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (event) => {
          console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
        },
      };
  
      const response = await axios.post('/api/uploads', formData, config);
      const getResponse = await getData();
      console.log('response', response.data);
      console.log("fet2", getResponse)
    };
  
    return (
      <>
      <UiFileInputButton
        label="Upload Single File"
        uploadFileName="theFiles"
        onChange={onChange}
      />
        <GetFile props={files}/>
        <button onClick={deleteData}> Deletar dados</button>
</>
    );
  };

export default IndexPage;