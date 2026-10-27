function StartBreedingPage() {
  return (
    <div>
      <h1>Start Breeding</h1>
      <label htmlFor="species">Species</label>
      <input id="species" type="text" className="border rounded p-2" />
      <label htmlFor="parent_1">Parents One</label>
      <input id="parent_1" type="text" className="border rounded p-2" />
      <label htmlFor="parent_2">Parents Two</label>
      <input id="parent_2" type="text" className="border rounded p-2" />
      <label htmlFor="p1_cost">Parent one cost</label>
      <input id="p1_cost" type="number" className="border rounded p-2" />
      <label htmlFor="p2_cost">Parent two cost</label>
      <input id="p2_cost" type="number" className="border rounded p-2" />
    </div>
  );
}

export default StartBreedingPage;
