import axios from "axios";

export const getUserData = async () => {
  try {
    const response = await axios.get("https://api.github.com/users/vixemari");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// export const getPosts = async () => {
//   try {
//     const response = await axios.get("https://https://api.github.com/search/issues?q=Dynamic%20typing%20repo:daltonmenezes/test;
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }