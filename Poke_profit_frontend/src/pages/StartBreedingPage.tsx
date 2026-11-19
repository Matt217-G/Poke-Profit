import React, { useState } from "react";

const StartBreedingPage = () => {
  const [species, setSpecies] = useState("");
  const [slot_number, setSlot_number] = useState("");

  const [parent_one, setParent_one] = useState("");
  const [parent_two, setParent_two] = useState("");
  const [p1_Cost, setP1_Cost] = useState("");
  const [p2_Cost, setP2_Cost] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3001/logs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        user_id: "7abab647-c7e6-4f06-84e4-2a3a682dbf36",
        species,
        parent_1: parent_one,
        parent_2: parent_two,
        p1_cost: Number(p1_Cost),
        p2_cost: Number(p2_Cost),
        slot_number: Number(slot_number),
      }),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
        <label htmlFor="species">species</label>
        <input
          className="rounded max-w-sm"
          type="text"
          id="species"
          placeholder="Enter"
          value={species}
          onChange={(e) => {
            setSpecies(e.target.value);
          }}
        />

        <label htmlFor="slot_number">slot_number</label>
        <input
          className="rounded max-w-sm"
          min={1}
          max={9}
          type="number"
          id="slot_number"
          value={slot_number}
          onChange={(e) => {
            setSlot_number(e.target.value);
          }}
        />
        <label htmlFor="parent_one">parent one</label>
        <input
          className="rounded max-w-sm"
          type="text"
          id="parent_one"
          placeholder="Enter"
          value={parent_one}
          onChange={(e) => {
            setParent_one(e.target.value);
          }}
        />
        <label htmlFor="parent_two">parent two</label>
        <input
          className="rounded max-w-sm"
          type="text"
          id="parent_two"
          placeholder="Enter"
          value={parent_two}
          onChange={(e) => {
            setParent_two(e.target.value);
          }}
        />
        <label htmlFor="p1_cost">P1_cost</label>
        <input
          className="rounded max-w-sm"
          type="number"
          id="p1_cost"
          placeholder="Enter"
          value={p1_Cost}
          onChange={(e) => {
            setP1_Cost(e.target.value);
          }}
        />
        <label htmlFor="p2_cost">P2_cost</label>
        <input
          className="rounded max-w-sm"
          type="number"
          id="p2_cost"
          placeholder="Enter"
          value={p2_Cost}
          onChange={(e) => {
            setP2_Cost(e.target.value);
          }}
        />
        <button className="rounded-full max-w-sm bg-indigo-700">Submit</button>
      </form>
    </div>
  );
};
export default StartBreedingPage;
