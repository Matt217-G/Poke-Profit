function StartBreedingPage() {
  return (
    <div>
      <h1>Start Breeding</h1>
      <form className="flex flex-col gap-2 max-w-sm">
        <label htmlFor="species">Species</label>
        <input id="species" type="text" className="border rounded p-2" />
        <label htmlFor="parent_1">Parents one</label>
        <input id="parent_1" type="text" className="border rounded p-2" />
        <label htmlFor="parent_2">Parents two</label>
        <input id="parent_2" type="text" className="border rounded p-2" />
        <label htmlFor="p1_cost">Parent one cost</label>
        <input id="p1_cost" type="number" className="border rounded p-2" />
        <label htmlFor="p2_cost">Parent two cost</label>
        <input id="p2_cost" type="number" className="border rounded p-2" />
        <label htmlFor="slot_number">Slot Number</label>
        <input
          id="slot_number"
          type="number"
          min="1"
          max="9"
          className="border rounded p-2"
        />
        <button type="submit">Start Breeding</button>
      </form>
    </div>
  );
}

export default StartBreedingPage;
