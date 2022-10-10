import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/formUsers.css";

const defaultValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: "",
};

const FormUsers = ({
  createNewUser,
  updateUser,
  updateUserById,
  setUpdateUser,
  handleModal,
}) => {
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (updateUser) {
      reset(updateUser);
    }
  }, [updateUser]);

  const submit = (data) => {
    if (updateUser) {
      updateUserById(updateUser.id, data);
      setUpdateUser();
    } else {
      createNewUser(data);
    }

    reset(defaultValues);
  };
  const resetModal = () => {
    handleModal();
    reset(defaultValues);

    setUpdateUser();
  };

  return (
    <>
      <button onClick={resetModal} className="modal__close">
        x
      </button>
      <form onSubmit={handleSubmit(submit)} className="form">
        <h2 className="container__title">
          {updateUser ? "Edit User" : "New user"}
        </h2>
        <div className="container__inputs">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Place Email"
          />
        </div>
        <div className="container__inputs">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Place Password"
          />
        </div>
        <div className="container__inputs">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            {...register("first_name")}
            placeholder="Place First Name"
          />
        </div>
        <div className="container__inputs">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            {...register("last_name")}
            placeholder="Place Last Name"
          />
        </div>
        <div className="container__inputs">
          <label htmlFor="birthday">Birthday</label>
          <input type="date" id="birthday" {...register("birthday")} />
        </div>
        <button className="btn__form" onClick={handleModal}>
          {updateUser ? "UPDATE USER" : "CREATE USER"}
        </button>
      </form>
    </>
  );
};

export default FormUsers;
