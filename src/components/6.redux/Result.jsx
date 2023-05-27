import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Selamat Datang {user.name}</h1>
      <div>
        <ul>
          <li>Nama : {user.name}</li>
          <li>Email :{user.email}</li>
          <li>No Hp : {user.nohp}</li>
          <li>Bootcamp : {user.bootcamp}</li>
          <li>Tempat lahir : {user.tmpatLahir}</li>
          <li>Tanggal Lahir : {user.tglLahir}</li>
          <li>Alamat : {user.alamat}</li>
          <li>Password : {user.password}</li>
          <li>Confirm Password : {user.confirmPassword}</li>
        </ul>
      </div>
    </div>
  );
};

export default Result;
