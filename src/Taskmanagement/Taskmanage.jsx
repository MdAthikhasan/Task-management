import { useState } from "react";
import Child from "./Child";

const Taskmanage = () => {
  const [input, setInput] = useState({
    name: "",
    isTrue: false,
  });

  const [tasks, setTask] = useState([]);

  const inputHandle = (event) => {
    setInput((pre) => {
      return {
        ...pre,
        name: event.target.value,
      };
    });
  };

  const todoHandler = () => {
    input.name ? setTask([...tasks, input]) : alert("Please write a task");

    setInput({
      name: "",
    });
  };

  const deleteHandler = (id) => {
    const filterd = tasks.filter((tas, index) => index !== id);
    setTask(filterd);
  };

  const editHandler = (id) => {
    const res = tasks.map((tas, index) => {
      if (index === id) {
        return {
          ...tas,
          isTrue: true,
        };
      }
      return {
        ...tas,
      };
    });
    console.log(res)
    setTask(res);
  };

  const updateHandler = (id, newInput) => {
    const res = tasks.map((tas, index) => {
      if (index === id) {
        return {
          ...tas,
          name: newInput,
          isTrue: false,
        };
      }
      return {
        ...tas,
      };
    });
    setTask(res);
  };
  // <div>
  //     <div className="flex justify-center items-center bg-gray-300 min-h-screen">
  //       <div className="h-auto md:w-1/2 px-2 w-96 bg-white rounded-lg">
  //         <div className="input_text relative"></div>
  return (
    <div>
      <div
        style={{ background: "#4CB9E7" }}
        className=" flex justify-center items-center bg-gray-300 min-h-screen"
      >
        <div className="h-auto md:w-1/2 px-2 w-96 bg-white rounded-lg">
          <div className="input_text relative">
            <input
              className="text-sm h-12 w-full my-4 pr-20 md:pr-28 outline-none pl-8"
              type="text"
              onChange={inputHandle}
              value={input.name}
              placeholder="Write a new task"
              required
            />

            <button
              onClick={todoHandler}
              className="add_task text-sm transition-all hover:bg-blue-700 cursor-pointer text-white bg-blue-400 rounded-lg h-10 w-16 md:w-24 absolute right-1 top-[20px]"
            >
              Add Task
            </button>

            <i className="absolute top-[27px] text-gray-600 text-xl left-2 fa fa-pencil-square"></i>
          </div>

          {tasks.length > 0 ? (
            <ul className="all_tasks">
              {tasks &&
                tasks.map((item, index) => (
                  <Child
                    key={index}
                    item={item}
                    deleteHandler={deleteHandler}
                    updateHandler={updateHandler}
                    editHandler={editHandler}
                    index={index}
                    // setInput={setInput}
                    input={input}
                  />
                ))}
            </ul>
          ) : (
            <div style={{ textAlign: "center", padding: "15px" }}>
              <h1>NO TASK ADDED</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Taskmanage;
