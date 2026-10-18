import { supabase } from "../config/supabaseClient";



export const getBreedingLogs = async (req,res) =>{
    const {data,error} = await supabase
    .from("breeding_logs")
    .select()

    if(error){
        return console.error(error)
        
    }


    return res.status(200).json(data)
}



