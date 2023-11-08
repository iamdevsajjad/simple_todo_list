import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import image from "../../assets/todo.png";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (!inputData) {
      setError("Please write your todo");
    } else {
      setItems([...items, inputData]);
      setError("");
      setInputData("")
    }
  };

  const deleteItem = (id) => {
    console.log(id);
    const updatedItems = items.filter((elem, index) => id !== index);
    setItems(updatedItems)
  }

  console.log(items);

  return (
    <div className="fullTodo bg-blue-900 min-h-screen">
      <div className="todo  w-80 mx-auto p-5">
        <div className="img_container w-40 mx-auto">
          <img className="w-1/2 mx-auto" src={image} alt="" />
        </div>
        <div className="texts text-white text-center">
          <h1 className="text-xl font-sans">Add Your List Here ✌️</h1>
        </div>
        <form onSubmit={addItem} className="input my-4 relative">
          <input
            className="w-full p-3 rounded-sm outline-none "
            placeholder="✍️ add something ..."
            type="text"
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            type="submit"
            className="absolute top-3 right-3 text-2xl hover:text-green-500 transition-all text-black"
          >
            <AiOutlinePlus />
          </button>
          {error && <small className="text-red-400">{error}</small>}
        </form>
        <div className="mb-3 space-y-1">
          {items.map((item, index) => (
            <div
              className="bg-indigo-500 text-white px-2 py-2 rounded flex justify-between"
              key={index + 1}
            >
              <p>{item}</p>
              <button
              onClick={() => deleteItem(index)}
              className="p-1 text-lg">
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>
        <div className="buttonDiv  flex justify-center ">
          <button className="bg-white text-black py-1 rounded-sm px-2 hover:bg-black hover:text-white transition-all">
            Check List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
