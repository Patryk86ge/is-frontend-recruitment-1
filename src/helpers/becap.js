// import React, {useState} from 'react';
// import {Button, Form, Row, Col} from "react-bootstrap";
//
// const FormAdd = () => {
//   const [showMessage, setShowMessage] = useState(false);
//   const [textInput,setTextInput] = useState('');
//   const [values, setValues] = useState({
//     inputNameId: "",
//     inputUserNameId:'',
//     inputEmailId: "",
//     inputCompanyNameId:"",
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const handleChangeTextInput = (e) => {
//     setValues({
//       inputNameId: '',
//       inputUserNameId:'',
//       inputEmailId: '',
//       inputCompanyNameId:'',
//
//     })
//   }
//   const handleClickBtnInput = (e) => {
//     e.preventDefault();
//   }
//
//   const handleChange = (e) => {
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
//     if (validate(values)) {
//       setShowMessage(true);
//     } else {
//       setShowMessage(false);
//     }
//   };
//
//   return (
//     <>
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
//                 onChange={handleChange}
//               />
//               {formErrors.inputNameId && (
//                 <p className="text-warning">{formErrors.inputNameId}</p>
//               )}
//             </Form.Group>
//
//             <Form.Group controlId="inputUserNameId">
//               <Form.Label/>
//               <Form.Control
//                 type="text"
//                 name="inputUserNameId"
//                 value={values.inputUserNameId}
//                 required
//                 placeholder="User Name"
//                 onChange={handleChange}
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
//                 onChange={handleChange}
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
//                 onChange={handleChange}
//               />
//               {formErrors.inputCompanyNameId && (
//                 <p className="text-warning">{formErrors.inputCompanyNameId}</p>
//               )}
//             </Form.Group>
//             <Button
//               type="submit"
//               variant="primary"
//               size="lg"
//               onClick={handleChangeTextInput}
//             >
//               Submit
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//       <p>{values.inputCompanyNameId}</p>
//       <p>{values.inputEmailId}</p>
//       <p>{values.inputNameId}</p>
//       <p>{values.inputUserNameId}</p>
//     </>
//   );
// }
//
// export default FormAdd;