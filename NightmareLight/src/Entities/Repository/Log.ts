import { supabase } from "../../External/Database";

export class LogRepository{
    getLogs = async () => {
        const { data, error } = await supabase
        .from('action_log')
        .select()
        .range(0,10)
        .order('time', { ascending: false })

        if (error) {
            return ({status: 'read error'})
        }
        return data
    }
    getAllLogs = async () => {
        const { data, error } = await supabase
        .from('action_log')
        .select()
        .order('time', { ascending: false })

        if (error) {
            return ({status: 'read error'})
        }
        return data
    }
}


// let b = async () => {
//     let usr = new LogRepository()
//     let a = await usr.getLogs()
//     console.log(a)
// }

// b()