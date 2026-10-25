import { supabase } from "../config/supabaseClient";

export const getBreedingLogs = async (req, res) => {
  const { data, error } = await supabase.from("breeding_logs").select();

  if (error) {
    return console.error(error);
  }

  return res.status(200).json(data);
};

export const postBreedingLogs = async (req, res) => {
  const breedingLogInformation = req.body;
  const { data, error } = await supabase

    .from("breeding_logs")
    .insert({
      user_id: breedingLogInformation.user_id,
      species: breedingLogInformation.species,
      parent_1: breedingLogInformation.parent_1,
      parent_2: breedingLogInformation.parent_2,
      p1_cost: breedingLogInformation.p1_cost,
      p2_cost: breedingLogInformation.p2_cost,
      slot_number: breedingLogInformation.slot_number,
    })
    .select();

  if (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "There was an error adding breeding information" });
  }

  if (!data) {
    return res.status(400).json({ data: "There was a server error" });
  }

  return res.status(201).json(data);
};
