let User = {
  findRecent(){
    return new Promise( (resolve, reject) => {
      let uri = "http://localhost:3000/activeUsers";
      let request = new XMLHttpRequest();
      
      request.open("GET", uri, true); // 'true' async, won't block
      request.onload = () => {
        if(request.status >= 200 && request.status < 400){
          resolve(JSON.parse(request.response));
        }
      };
      
      request.onerror = () => {
        reject( new Error("Something went wrong with API") );
      };
      
      request.send();
    } );    
  }  
};

export default User;