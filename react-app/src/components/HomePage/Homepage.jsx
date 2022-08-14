import React, { useEffect } from "react";

import { useSelector } from "react-redux";
function User() {
  const user = useSelector((state) => state.session.user);
  const userId = user?.id;
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

  return <></>;
}
export default User;
