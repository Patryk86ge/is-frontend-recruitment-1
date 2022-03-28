// import React, { useState } from 'react';
// import {Form, Row, Col, Modal, Button} from "react-bootstrap";
//
// const FormEdit = () => {
//   const [showMessage, setShowMessage] = useState(false);
//   const [values, setValues] = useState({
//     inputNameId: "",
//     inputUserNameId:'',
//     inputEmailId: "",
//     inputCompanyNameId:"",
//   });
//   const [formErrors, setFormErrors] = useState({});
//   console.log(showMessage);
//
//
//   const handleChangeForm = (e) => {
//     e.preventDefault();
//     setValues((values) => ({
//       ...values,
//       [e.target.name]: e.target.value,
//
//     }));
//     console.log(e.target.value);
//
//   }
//   const validate = () => {
//     let errors = {}
//     if(values.inputNameId.length <= 2){
//       errors.inputNameId = "Full name is required,more than 2 sains";
//     }
//     if(!values.inputUserNameId){
//       errors.inputUserNameId = "User Name is required";
//     }
//     if (!values.inputEmailId) {
//       errors.inputEmailId = "Email address is required";
//     } else if (!/\S+@\S+\.\S+/.test(values.inputEmailId)) {
//       errors.inputEmailId = "Email address is invalid";
//     }
//     if(values.inputCompanyNameId.length <= 2){
//       errors.inputCompanyNameId = "Company Name is should have more than 2 sains";
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   }
//   const handleSubmit = (e) => {
//     if (e) e.preventDefault();
//     setShowMessage(true)
//     if (validate(values)) {
//       setShowMessage(true);
//     } else {
//       setShowMessage(false);
//     }
//   };
//
//   return (
//     <>
//
//       <Row>
//         <Col sm={6}>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="inputNameId">
//               <Form.Label/>
//               <Form.Control
//                 type="text"
//                 name="inputNameId"
//                 value={values.inputNameId}
//                 required
//                 placeholder="Name"
//                 onChange={handleChangeForm}
//               />
//               {formErrors.inputNameId && (
//                 <p className="text-warning">{formErrors.inputNameId}</p>
//               )}
//             </Form.Group>
//             <Form.Group controlId="inputUserNameId">
//               <Form.Label/>
//               <Form.Control
//                 type="text"
//                 name="inputUserNameId"
//                 value={values.inputUserNameId}
//                 required
//                 placeholder="User Name"
//                 onChange={handleChangeForm}
//               />
//               {formErrors.inputUserNameId && (
//                 <p className="text-warning">{formErrors.inputUserNameId}</p>
//               )}
//             </Form.Group>
//
//             <Form.Group controlId="inputEmailId">
//               <Form.Label/>
//               <Form.Control
//                 type="email"
//                 name="inputEmailId"
//                 value={values.inputEmailId}
//                 required
//                 placeholder="Email"
//                 onChange={handleChangeForm}
//               />
//               {formErrors.inputEmailId && (
//                 <p className="text-warning">{formErrors.inputEmailId}</p>
//               )}
//             </Form.Group>
//
//             <Form.Group controlId="inputCompanyNameId">
//               <Form.Label/>
//               <Form.Control
//                 type="text"
//                 name="inputCompanyNameId"
//                 value={values.inputCompanyNameId}
//                 required
//                 placeholder="Company Name"
//                 onChange={handleChangeForm}
//               />
//               {formErrors.inputCompanyNameId && (
//                 <p className="text-warning">{formErrors.inputCompanyNameId}</p>
//               )}
//             </Form.Group>
//           </Form>
//         </Col>
//         <button onClick={handleChangeForm} >send</button>
//       </Row>
//       <p>{values.inputCompanyNameId}</p>
//       <p>{values.inputEmailId}</p>
//       <p>{values.inputNameId}</p>
//       <p>{values.inputUserNameId}</p>
//     </>
//   );
// }
//
// export default FormEdit;




