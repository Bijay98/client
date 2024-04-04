
import { useEffect, useState } from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponents';
import User from './components/Users';
import { Container,Row,Col,Spinner } from 'react-bootstrap';
import axios from 'axios';
import NewUser from './components/Newuser';

function App() {
  // const users=[
  //   {
  //     "id": 7,
  //     "email": "michael.lawson@reqres.in",
  //     "first_name": "Michael",
  //     "last_name": "Lawson",
  //     "avatar": "https://reqres.in/img/faces/7-image.jpg"
  // },
  // {
  //     "id": 8,
  //     "email": "lindsay.ferguson@reqres.in",
  //     "first_name": "Lindsay",
  //     "last_name": "Ferguson",
  //     "avatar": "https://reqres.in/img/faces/8-image.jpg"
  // },
  // {
  //     "id": 9,
  //     "email": "tobias.funke@reqres.in",
  //     "first_name": "Tobias",
  //     "last_name": "Funke",
  //     "avatar": "https://reqres.in/img/faces/9-image.jpg"
  // },
  // {
  //     "id": 10,
  //     "email": "byron.fields@reqres.in",
  //     "first_name": "Byron",
  //     "last_name": "Fields",
  //     "avatar": "https://reqres.in/img/faces/10-image.jpg"
  // },
  // {
  //     "id": 11,
  //     "email": "george.edwards@reqres.in",
  //     "first_name": "George",
  //     "last_name": "Edwards",
  //     "avatar": "https://reqres.in/img/faces/11-image.jpg"
  // },
  // {
  //     "id": 12,
  //     "email": "rachel.howell@reqres.in",
  //     "first_name": "Rachel",
  //     "last_name": "Howell",
  //     "avatar": "https://reqres.in/img/faces/12-image.jpg"
  // }
  // ]
  const[users,setUsers]=useState([]);
  const[newUser,setNewUser]=useState(
   {
    FirstName:'',
    LastName:'',
    Email:'',
    Avatar:''
   }
  )
  const[errors,setErrors]=useState({
    FirstName:'',
    LastName:'',
    Email:'',
    Avatar:''
  });
  useEffect(()=>{
      fetchUser();

  },[]);
 
  function fetchUser(){
    axios.get("http://localhost:4000/users")
    .then((res)=>setUsers(res.data.data))
    .catch((err)=>console.log(err))
  }

  function createUser(e){
    axios.post("http://localhost:4000/users",newUser)
    .then((res)=>fetchUser())
    .catch((err)=>console.log(err))
    e.preventDefault();
    let isError=false;
        if (newUser.FirstName.trim().length === 0) {
            setErrors((prev) => {
                return {
                    ...prev,
                    FirstName: "FirstName Required",
                };
            });
            isError=true;
        } else {
            setErrors((prev) => {
                return {
                    ...prev,
                    FirstName: "",
                };
            });
        }
        if (newUser.LastName.trim().length === 0) {
          setErrors((prev) => {
              return {
                  ...prev,
                  LastName: "LastName Required !!!",
              };
          });
          isError=true;
      } else {
          setErrors((prev) => {
              return {
                  ...prev,
                  LastName: "",
              };
          });
      }
      if (newUser.Email.trim().length === 0) {
        setErrors((prev) => {
            return {
                ...prev,
                Email: "Email Required !!!",
            };
        });
        isError=true;
    } else {
        setErrors((prev) => {
            return {
                ...prev,
                Email: "",
            };
        });
    }
    if (newUser.FirstName.trim().length === 0) {
      setErrors((prev) => {
          return {
              ...prev,
              Avatar: "link required !!!",
          };
      });
      isError=true;
  } else {
      setErrors((prev) => {
          return {
              ...prev,
              Avatar: "",
          };
      });
  }
  }
  return (
    <div className="App">
      <NavbarComponent/>
      <Container>
        <Row>
          {users.length ?
            users.map((users,index) =>
            <Col md={4} key={index}>
                <User users={users}/>
            </Col>
            
            ): <div style={{textAlign:'center',marginTop:'4em'}}><Spinner animation="border" role="status"/></div>
          }
        </Row>
        <NewUser newUser={newUser} setNewUser={setNewUser} createUser={createUser} errors={errors} setErrors={setErrors}/>
      </Container>
    </div>
  );
}

export default App;
