import { supabase } from "../../External/Database";

export class DenounceUserRepository {
    getDenounce = async () => {
        // const { data, error } = await supabase
        //     .from('denounce')
        //     .select()
        //     .eq('solved', false)
        const { data, error } = await supabase.rpc('list_denounce')

        if (error) {
            return ({ status: 'read error' })
        }
        return data
    }
    getDenounceFromDenouncedId = async (id: string) => {
        // const { data, error } = await supabase
        //     .from('denounce')
        //     .select()
        //     .eq('solved', false)
        const { data, error } = await supabase.rpc('list_denounce').eq('denounced_id', id)

        if (error) {
            return ({ status: 'read error' })
        }
        return data
    }

    getDenounceFromDenouncerId = async (id: string) => {
        // const { data, error } = await supabase
        //     .from('denounce')
        //     .select()
        //     .eq('solved', false)
        const { data, error } = await supabase.rpc('list_denounce').eq('denouncer_id', id)

        if (error) {
            return ({ status: 'read error' })
        }
        return data
    }

    getDenounceById = async (id: string) => {
        const { data, error } = await supabase
            .from('denounce')
            .select()
            .eq('id', id)

        if (error) {
            return ({ status: 'read error' })
        }
        return data
    }

    markAsSolvedDenounce = async (id: string) => {
        const { error } = await supabase
            .from('denounce')
            .update({ solved: true })
            .eq('id', id)

        if (error) {
            return ({status: 'update error'})
        }
        return ({ status: 'updated' })
    }
    createDenounce = async (userid: string, reason: string, denouncedusername: string) => {
        const { error } = await supabase
            .from('denounce')
            .insert({ creator: userid, reason: reason, denounced: denouncedusername })

        if (error) {
            return ({status: 'insert error'})
        }
        return ({ status: 'created' })
    }
}


//TESTS

// let b = async () => {
//     let a = new DenounceUserRepository()
//     let data = await a.getDenounceFromDenouncedId('9c023bc7-94b7-4f5a-82d0-4274c16f17ec')
//     console.log(data)
//     return data

// }

// console.log(b())