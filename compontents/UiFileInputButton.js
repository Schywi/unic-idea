import React, {useState} from 'react';

 







const UiFileInputButton = (props) => {
    const fileInputRef = React.useRef(null);
    const formRef = React.useRef(null);
 
   

    const onClickHandler =  () => {
   
      fileInputRef.current?.click();
    };
  
    const onChangeHandler =  (event) => {
     
      if (!event.target.files?.length) {
        return;
      }
  
      const formData = new FormData();
  
      Array.from(event.target.files).forEach((file) => {
        formData.append(event.target.name, file);
      
      });
       
      props.onChange(formData);
  
      formRef.current?.reset();
     
    };
  
    return (
      
      <form ref={formRef}>
        <button type="button" onClick={onClickHandler}>
          {props.label}
        </button>
        <input
          accept="application/pdf,application/jpg,application/png"
          multiple={true} 
          name={props.uploadFileName}
          onChange={onChangeHandler}
          ref={fileInputRef}
          style={{ display: 'none' }}
          type="file"
          id="upload"
        />
      
      </form>
      
      
    );
  };
  
  UiFileInputButton.defaultProps = {
    acceptedFileTypes: '',
    allowMultipleFiles: true,
  };
 
  export default UiFileInputButton;