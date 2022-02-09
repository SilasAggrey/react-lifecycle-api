import React, { useEffect, useState } from "react";
import axios from "axios";



// class UserClass extends React.Component {
//     constructor() {
//       super();
//       this.state = { number: 0, posts: [] };
//     }
  
//     getData = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/users"
//         );
  
//         this.setState({ posts: response.data });
//       } catch (e) {
//         console.log(e);
//       }
//     };
  
//     componentDidMount() {
//       console.log("Home mounted");
  
//       this.getData();
//       fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
//          console.log(data.json());
//        });
//     }
  
//      componentDidUpdate() {
//        console.log("State updated");
//      }
  
//      componentWillUnmount() {
//        console.log("Home unmounted");
//      }
// }

// export default UserClass;











            const UserClass = () => {
                   
                 const [posts, setPosts] = useState([]);

   async function getData() {
     try {
       const response = await axios.get(
         "https://jsonplaceholder.typicode.com/users"
       );

       setPosts(response.data);
     } catch (error) {
       console.log(error);
     }
   }

   useEffect(() => {
     console.log("Home mounted");
     getData();

     return () => {
       console.log("Home unmounted");
     };
   }, []);

   useEffect(() => {
     console.log("State updated");
   }, );

   return (
     <div>

     {posts.map((post) => {
         return <h1>{post.name} <br/> {post.username} <br/> {post.email}</h1>;
         
       })}
    </div>
   );
 };

 export default UserClass;