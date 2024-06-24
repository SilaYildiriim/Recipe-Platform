import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/style/Profile.scss";

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      const response = await axios
        .get("https://api.escuelajs.co/api/v1/auth/profile", {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).access_token
            }`,
          },
        })
        .then((response) => setProfile(response.data));
    };

    getProfile();
  }, []);

  return (
    <div className="container">
      <div className="profileCard">
        <img src={profile.avatar} alt="image" />
        <h3>PROFILE</h3>
        <h3> Name : {profile.name}</h3>
        <h3>Email : {profile.email}</h3>
        <h3>Role : {profile.role}</h3>
      </div>
    </div>
  );
};

export default Profile;
