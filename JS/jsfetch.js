const username="kritikabisht";
const url='https://dummyjson.com/users?limit=3';
const pr=fetch(url);
      pr.then((res)=>{
        return res.json();
      })  
      .then((data)=>{
        console.log("Data=",data);
      })
      .catch((err)=>{
        console.error("Error",err.message);
      })
      .finally(()=>{
        console.log("inside finally");
      })