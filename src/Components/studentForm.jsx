import { useState } from "react";

const studentForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="">Add Student</label>
        <br />
        <input type="text" required />
        <br />
        <button>add student</button>
      </form>
      <br />
      <br />
    </div>
  );
};

export default studentForm;
