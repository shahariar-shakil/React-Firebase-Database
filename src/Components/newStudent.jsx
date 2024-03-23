import useCollection from "./useCollection";

const newStudent = () => {
  const { documents: students } = useCollection("students");
  return (
    <div>
      {students.map((student) => {
        <li key={student.id}>{student.name}</li>;
      })}
    </div>
  );
};

export default newStudent;
