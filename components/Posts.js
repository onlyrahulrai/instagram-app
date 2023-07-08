import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import  Post  from "./Post";
import { db } from "../firebase";

const posts = [
  {
    id: "1",
    username: "Rahul Rai",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "2",
    username: "Mansi Rai",
    userImg: "./profile.jpg",
    img: "./profile.jpg",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const session = useSession()


  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div>
      {posts?.map((post, i) => (
        <Post key={post.id} id={post.id} username={post.data().username} userImg={post.data().profileImg} img={post.data().image} caption={post.data().caption} />
      ))}
    </div>
  );
};

export default Posts;
