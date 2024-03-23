import { useEffect, useState } from "react";
import { db } from "../firebase/config.jsx";
import { collection, onSnapshot } from "firebase/firestore";

const useCollection = (c) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const ref = collection(db, c); // Moved ref declaration into the useEffect
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        // Added parentheses around doc
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(results); // Fixed setDocuments syntax
    });

    return () => unsubscribe(); // Clean up function to unsubscribe when component unmounts
  }, [c]);
  return { documents };

  //   return <div></div>; // Placeholder, adjust as needed
};

export default useCollection;
