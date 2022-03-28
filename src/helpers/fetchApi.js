// eslint-disable-next-line jsx-a11y/href-no-hash
export function getUsers(setUsers) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      data.sort((a, b) => a.name.localeCompare(b.name))
      setUsers(data);
    });
}

export function deleteUser(setUsers, id) {
  fetch(`https://jsonplaceholder.typicode.com/users/:${id}`, {
    method: 'DELETE'
  })
    .then((res) => {
      res.json()
        .then((res) => {
          setUsers(prev => prev.filter(el => el.id !== id))
        })
    })
    .catch(() => {
      console.log('error');
    })
}


export function editUser() {
  fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: 'PUT'
  })
    .then((res) => {
      res.json()
        .then((res) => {
          console.log("______________________________");

        })
    })
}

