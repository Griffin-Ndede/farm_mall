import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Practice() {
  const { user } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className="flex justify-evenly w-fit mx-auto mt-10">
        <button 
          className={'mx-16 px-6 py-2 rounded-3xl'}
          onClick={() => setIsEditing(false)}
        >
          User profile
        </button>
        <button 
          className={'mx-16 px-6 py-2 rounded-3xl'}
          onClick={() => setIsEditing(true)}
        >
          Edit profile
        </button>
      </div>

      <div className="h-screen ml-4">
        {user ? (
          isEditing ? (
            // Edit profile form goes here
            <div>
              <h2>Edit Profile</h2>
              <form>
                <div>
                  <label>Username:</label>
                  <input 
                    type="text" 
                    defaultValue={user.username} 
                    className="border border-gray-300 p-1 ml-2"
                  />
                </div>
                <div className="mt-2">
                  <label>Email:</label>
                  <input 
                    type="email" 
                    defaultValue={user.email} 
                    className="border border-gray-300 p-1 ml-2"
                  />
                </div>
                <button 
                  type="button" 
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsEditing(false)}
                >
                  Save Changes
                </button>
              </form>
            </div>
          ) : (
            // Profile view
            <div>
              <h1>Name: {user.username}</h1>
              <h1>Email: {user.email}</h1>
            </div>
          )
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </>
  );
}

export default Practice;