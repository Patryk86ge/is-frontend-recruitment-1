// eslint-disable-next-line jsx-a11y/href-no-hash
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from "react-bootstrap";
import {BsTrash, BsPencil} from "react-icons/bs";
import DeleteModal from "./helpers/deleteModal";
import {deleteUser, getUsers} from './helpers/fetchApi'


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
      getUsers(setUsers);
    }, []);

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
          <DeleteModal
            show={show}
            onHide={handleClose}//handleClose
            deleteUser={() => deleteUser(setUsers,userId)}
            handleClose={handleClose}

          />
        </div>
      </>
    );
  }
;

export default UserApp;


