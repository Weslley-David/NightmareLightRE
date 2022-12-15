import { supabase } from "../../External/Database";

export class ProfileRepository {
    private getSumProfileActivate = async () => {
        const { error, count } = await supabase
            .from('perfil')
            .select('*', { count: 'exact' })
            .eq('activate', true)
        if (error) {
            //console.log(error)
            //return error
            return ({ status: 'read error' })
        }
        return count
    }
    private getSumProfileTotal = async () => {
        const { error, count } = await supabase
            .from('perfil')
            .select('*', { count: 'exact' })
        if (error) {
            //return error
            return ({ status: 'read error' })
        }
        return count
    }

    getProfileStatistics = async () => {
        try {
            let active = await this.getSumProfileActivate(), total = await this.getSumProfileTotal()
            let offline = Number(total) - Number(active)
            return { online: active, offline: offline, total: total }
        } catch (error) {
            console.log(error)
            return error
        }

    }
    getProfileByUsername = async (username: string) => {
        const { data, error } = await supabase
            .from('perfil')
            .select()
            .eq('username', username)

        if (error) {
            //console.log(error)
            return ({ status: 'read error' })
        }
        return data
    }

    getAllProfiles = async () => {

        const { data, error } = await supabase.rpc('get_profile')


        if (error) {
            console.log(error)
            return ({ status: 'read error' })
        }
        return data
    }


    getProfileById = async (id: string) => {
        const { data, error } = await supabase
            .from('perfil')
            .select()
            .eq('id', id)

        if (error) {
            //console.log(error)
            return ({ status: 'read error' })
        }
        return data
    }
}
//oiiiiiii

//TESTS

// let b = async () => {
//     let a = new ProfileRepository()
//     let data = await a.getProfileStatistics()
//     console.log(data)
//     return data

// }

// console.log(b())