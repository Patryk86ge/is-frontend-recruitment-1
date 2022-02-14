// eslint-disable-next-line jsx-a11y/href-no-hash
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,  Modal,  Table} from "react-bootstrap";
import {BsTrash, BsPencil} from "react-icons/bs";
import FormEdit from "./helpers/FormEdit";

const UserApp = () => {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const [userId, setUserId] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
      setShow(true)
      setUserId(id)
    }

    useEffect(() => {
      getUsers();
    }, []);

    function getUsers() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          data.sort((a, b) => a.name.localeCompare(b.name))
          setUsers(data);
          console.log(data);
        });
    }

    const deleteUser = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/users/:${id}`, {
        method: 'DELETE'
      })
        .then((res) => {
          res.json()
            .then((res) => {
              console.log(res);
              setUsers(prev => prev.filter(el => el.id !== id))
            })
        })
    }

  const editUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'PUT'
    })
      .then((res) => {
        res.json()
          .then((res) => {
            console.log("______________________________");
            console.log(res);
          })
      })
  }

    return (
      <>
        <div className="section__user">
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>Nr</th>
              <th>Name</th>
              <th>User name</th>
              <th>email</th>
              <th>address</th>
              <th>phone</th>
              <th>Website</th>
              <th>company</th>
              <th>actions</th>
            </tr>
            </thead>
            {
              users.map((el, index) => {
                return (
                  <tbody key={el.id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{el.name}</td>
                    <td>{el.username}</td>
                    <td>{el.email}</td>
                    <td>{el.address.street}{el.address.suite}{el.address.city}{el.address.zipcode}{el.address.geo.lat}{el.address.geo.lng}</td>
                    <td>{el.phone}</td>
                    <td>{el.website}</td>
                    <td>{el.company.name}{el.company.catchPhrase}{el.company.bs}</td>
                    <td>
                      <div className="btn__table">
                        <Button className="mt-2" onClick={() => handleShow(el.id)} variant="danger"><BsTrash/></Button>
                        <Button className="mt-2" onClick={null} variant="primary"><BsPencil/></Button>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                )
              })
            }
          </Table>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure you want to delete?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button onClick={() => {
                deleteUser(userId);
                handleClose()
              }} variant="danger">Delete</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  }
;

export default UserApp;


