import React from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import image from "../../assets/todo.png";
const Todo = () => {
  return (
    <div className="fullTodo bg-blue-900 min-h-screen">
      <div className="todo  w-80 mx-auto p-5">
        <div className="img_container w-40 mx-auto">
          <img className="w-1/2 mx-auto" src={image} alt="" />
        </div>
        <div className="texts text-white text-center">
          <h1 className="text-xl font-sans">Add Your List Here</h1>
        </div>
        <div className="input my-4 relative">
          <input className="w-full p-3 rounded-sm my-2  outline-none " placeholder="✍️ add something ..." type="text" />
          <button className="absolute top-5 right-3 text-2xl hover:text-green-500 transition-all text-black"><AiOutlinePlus /></button>
        </div>
        <div className="buttonDiv  flex justify-center ">
          <button className="bg-white text-black py-1 rounded-sm px-2 ">
            Check List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
