import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import TabComponentContext from "../context/TabComponentContext";

const UsersLister = () => {
  const { users } = useContext(TabComponentContext);
  let columnName;
  if (users && users.length > 0) {
    columnName = Object.keys(users[0]);
  }

  return (
    <>
      {users && users.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              {columnName.map((column) => {
                return <th key={column}>{column.toUpperCase()}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user.id}>
                  {Object.values(user).map((value, index) => {
                    return (
                      <td key={index}>
                        {typeof value === "object"
                          ? JSON.stringify(value)
                          : value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UsersLister;
