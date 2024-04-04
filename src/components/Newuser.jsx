import {Form,Button} from 'react-bootstrap';

function NewUser({newUser,setNewUser,createUser,errors,setErrors}) {
    const changeFname=(e)=>{
        setNewUser((prev)=>{
            return {
               ...prev,
                FirstName:e.target.value
            }
        })
    }
    const changeLname=(e)=>{
        setNewUser((prev)=>{
            return {
               ...prev,
                LastName:e.target.value
            }
        })
    }
    const changeEmail=(e)=>{
        setNewUser((prev)=>{
            return {
               ...prev,
                Email:e.target.value
            }
        })
    } 
    const changeAvatar=(e)=>{
        setNewUser((prev)=>{
            return {
               ...prev,
                Avatar:e.target.value
            }
        })
    }
  return (
    <Form style={{width:'30rem', margin:'6rem auto'}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" onChange={changeFname}/>
        <div className="error">{errors.FirstName}</div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text"onChange={changeLname} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={changeEmail}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Avatar</Form.Label>
        <Form.Control type="text" onChange={changeAvatar} />
      </Form.Group>
       <Button type='submit' onClick={createUser}>add user</Button>
    </Form>
  );
}

export default NewUser;