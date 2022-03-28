import React from 'react';

const ChangeModal = () => {

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
    <div>

    </div>
  );
};

export default ChangeModal;