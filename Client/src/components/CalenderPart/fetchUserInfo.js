// export const fetchUserInfo = () => {

//     fetch("http://localhost:3000/user", {
//         method: "GET",
//         credentials: "include",
//     }).then((response) =>
//         response.json().then((userInfo) => {
//             // console.log(userInfo.id)
//             return userInfo
//         })
//     )
// }



export const fetchUserInfo = async () => {
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "GET",
        credentials: "include",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch user info");
      }
  
      const userInfo = await response.json();
      return userInfo;
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw new Error("Failed to fetch user info");
    }
  };
  
