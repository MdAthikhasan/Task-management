import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const Child = ({ item, deleteHandler, editHandler, updateHandler, index }) => {
  const { name, isTrue } = item;

  const [newInput, setNewinput] = useState(name);
  return (
    <li>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          marginTop: "12px",
        }}
      >
        {isTrue ? (
          <input
            style={{
              background: "#FFECD6",
              width: "400px",
              height: "35px",
              borderRadius: "8px",
              border: "black",
            }}
            type="text"
            value={newInput}
            onChange={(e) => setNewinput(e.target.value)}
          />
        ) : (
          <p>{name}</p>
        )}
        <div style={{ display: "flex" }}>
          {!isTrue ? (
            <FaRegEdit
              style={{ marginRight: "10px", fontSize: "25px" }}
              onClick={() => editHandler(index)}
            />
          ) : (
            <FaSave
              style={{ marginRight: "10px", fontSize: "25px" }}
              onClick={() => updateHandler(index, newInput)}
            />
          )}
          <MdDelete
            style={{ fontSize: "20px" }}
            onClick={() => deleteHandler(index)}
          />
        </div>
      </div>
    </li>
  );
};

export default Child;
