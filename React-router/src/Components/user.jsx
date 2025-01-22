import React from 'react'


import { useLoaderData } from 'react-router-dom';


const User = () => {


        const data=useLoaderData(); 


    // const{userid}=useParams();
    // const[data,setdata]=useState([])

    // useEffect(() => {
    //   fetch('https://api.github.com/users/abhaydotcom')
    //   .then(res => res.json())
    //   .then(data =>{
    //     console.log(data)
    //     setdata(data);
    //   })
      
    // }, [])
    

  return (
    <div className='bg-teal-400 h-80' >User: Abhay Kumar Singh
    
    
    <div className='border'>
<h1>followers:{data.following}
    
<div  className='overflow-hidden size-52 border '>
<img src={data.avatar_url} alt="" />
 
</div>
</h1>
    </div>
    
    </div>
  )
}

export default User

export const userdata=async()=>{

  const response=await  fetch('https://api.github.com/users/abhaydotcom')
  return response.json();

}