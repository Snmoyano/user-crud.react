import React from "react";
import { FaTrash } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillGiftFill } from "react-icons/bs";

import "./styles/userCard.css";
const UserCard = ({ user, deleteUserById, setUpdateUser, handleModal }) => {
  const handleEdit = () => {
    setUpdateUser(user);
    handleModal();
  };

  return (
    <article className="user">
      <h2 className="user__name">{`${user.first_name} ${user.last_name}`}</h2>
      <br />
      <ul className="user__list">
        <li className="user__item">
          <span className="user__span">Email: </span>
          {user.email}
        </li>
        <li className="user__item">
          <span className="user__span">Birthday: </span>
          <div className="user__item-container">
            <BsFillGiftFill />
            {user.birthday}
          </div>
        </li>
      </ul>

      <footer className="user__footer">
        <button onClick={() => deleteUserById(user.id)} className="user__btn">
          <FaTrash className="user__trash" />
        </button>
        <button onClick={handleEdit} className="user__btn">
          <BsFillPencilFill className="user__edit" />
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
