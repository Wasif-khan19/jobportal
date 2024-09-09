"use client";

import { PlaceholdersAndVanishInput } from "./Bar";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Devops Engineer",
    "Data Scientist",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-col justify-center w-full ">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
