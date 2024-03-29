import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Homepage() {
  const user = useSelector((state) => state.session.user)
  const userId  = user?.id


  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      // setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (

    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>

      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
  );
}
export default Homepage;
