import { supabase } from "../../External/Database";

export class UserSanctionRepository {
    createSanction = async (user_id: string, creator: string, revocation_time: string) => {
        const { error } = await supabase
            .from('sanction')
            .insert({ user_id: user_id, creator: creator, revocation_time: revocation_time })
        if (error) {
            return (error)
        }
        return ({ status: 'created' })
    }
    createPermanentSanction = async (user_id: string, creator: string) => {
        const { error } = await supabase
            .from('sanction')
            .insert({ user_id: user_id, creator: creator, permanent: true})
        if (error) {
            return (error)
        }
        return ({ status: 'created' })
    }
    revogueSanction = async (user_id: string) => {
        const { error } = await supabase
            .from('perfil')
            .update({ banided: false })
            .eq('id', user_id)
        if (error) {
            return (error)
        }
        return ({ status: 'revogued' })
    }
}


//TESTS

// let b = async () => {
//     let a = new SanctionRepository()
//     let data = await a.createSanction('9bdb3350-ecc3-427b-8de4-8176a67f6aa1','de246ed5-3e04-4a2b-9a2e-0f04297d5d55','2023-11-29')
//     console.log(data)
//     return data

// }

// console.log(b())