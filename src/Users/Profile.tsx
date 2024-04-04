import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };
  const save = async () => {
    await client.updateUser(profile);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div className="container mt-3 w-50">
      <h1>Profile</h1>
      <Link to="/Kanbas/Account/Admin/Users" className="btn btn-warning w-100">
        Users
      </Link>
      {profile && (
        <div>
          <label htmlFor="profile-username-form">Username</label>
          <input
            className="form-control"
            type="text"
            id="profile-username-form"
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <label htmlFor="profile-password-form">Password</label>
          <input
            className="form-control"
            type="password"
            id="profile-password-form"
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <label htmlFor="profile-firstName-form">First Name</label>
          <input
            className="form-control"
            type="text"
            id="profile-firstName-form"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <label htmlFor="profile-lastName-form">Last Name</label>
          <input
            className="form-control"
            type="text"
            id="profile-lastName-form"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <label htmlFor="profile-dob-form">Date of Birth</label>
          <input
            className="form-control"
            id="profile-dob-form"
            value={profile.dob}
            type="date"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <label htmlFor="profile-email-form">Email</label>
          <input
            className="form-control"
            type="email"
            id="profile-email-form"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <label htmlFor="profile-role-form">Role</label>
          <select
            className="form-control"
            id="profile-role-form"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
      <div className="d-flex mt-4">
        <button className="btn btn-primary w-50 me-2" type="button" onClick={save}>
          Save
        </button>
        <button className="btn btn-danger w-50" type="button" onClick={signout}>
          Signout
        </button>
      </div>
    </div>
  );
}
