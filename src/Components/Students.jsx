// import file system
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config.jsx";

// collection functions
const Students = () => {
  const [name, setName] = useState([]);
  useEffect(() => {
    // ref is reference
    const ref = collection(db, "students");

    // getting one time data from fiebase
    getDocs(ref).then((snapshot) => {
      //   console.log(snapshot);
      let results = [];
      snapshot.docs.forEach((doc) => {
        // console.log(doc.data(), doc.id);
        results.push({ id: doc.id, ...doc.data() });
      });
      console.log(results);
      setName(results);
    });
  }, []);

  // return
  return (
    <div>
      <h2>students</h2>
      {name.map((data) => {
        <li key={data.id}>{data.name}</li>;
      })}
    </div>
  );
};

export default Students;
