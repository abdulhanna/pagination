
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './component/pagination';


function App() {
  const [user,setUser]=useState([]);
  const [showPerPage,setShowPerPage] = useState(1);
  const [pagination,setPagination] = useState({
    start:0,end:showPerPage
  })

  const getData = async() => {
      const response = await axios.get(" https://reqres.in/api/users?page=2");
      
      // console.log(response.data.data);
      setUser(response.data.data);

  }

  useEffect(()=>{
      getData();
  },[])

  const onPaginationChange = (start,end) =>{

    setPagination({start:start,end:end});

  }
  return(
  
    <div className="App">
    <div className="container py-4">
      <div className="row">
        {user.slice(pagination.start,pagination.end).map((post) => (
          <div className="col-lg-12 mb-3" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h4>
                 {post.id} {post.first_name} 
                </h4>
                <img src={post.avatar} alt="imgage"/>
                <h5> Email: {post.email}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

     <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={user.length} />
    </div>
  </div>
  )
}

export default App;
