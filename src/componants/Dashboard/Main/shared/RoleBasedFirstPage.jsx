import React from "react";
import alUser from "../../../Fatching-data/alUser";
import Contex from "../../../Authentication/Contex";
import Review from "../../Moderator/Review";
import ManageUser from "../../Admin/Shared/ManageUser";
import Myprofile from "../../User/Myprofile";

const RoleBasedFirstPage = () => {
  const [user2, ,] = alUser();
  const { user } = Contex();

  const user3 = user2?.filter((d) => d.email == user.email);
  // console.log(user3[0].status)
  if (user3[0]?.status == "Moderator") {
    // console.log("bg")
    return <Review />;
  }
  if (user3[0]?.status == "Admin") {
    // console.log("bg")
    return <ManageUser />;
  }

if (user3[0]?.status == "User") {
   return <Myprofile />;
} 
};

export default RoleBasedFirstPage;
