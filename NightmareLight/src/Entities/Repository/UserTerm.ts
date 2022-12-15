import { supabase } from "../../External/Database";

export class UserTermRepository {
    createUserTerm = async (name: string, content: string, creator: string) => {
        const { error } = await supabase
            .from('user_term')
            .insert({ name: name, content: content, creator: creator })
        if (error) {
            console.log(error)
            return ({ status: 'insert error' })
        }
        return ({ status: 'created' })
    }
    deleteUserTerm = async (id: string) => {
        const { error } = await supabase
            .from('user_term')
            .delete()
            .eq('id', id)
        if (error) {
            return ({ status: 'delete error' })
        }
        return ({ status: 'deleted' })


    }
    updateUserTerm = async (id: string, name: string, content: string) => {
        const { error } = await supabase
        .from('user_term')
        .update({ name: name, content: content })
        .eq('id', id)
        if(error){
            console.log(error)
            return ({status: 'update error'})
        }
        return ({status: 'updated'})
    }
    readUserTerms = async () => {
        const { data, error } = await supabase
            .from('user_term')
            .select()

        if (error) {
            return ({status: 'read error'})
        }
        return data
        // return ({status: 'read not connected'})
    }
}


// let b = async () => {
//     let usr = new UserTermRepository()
//     let a = await usr.readUserTerms()
//     //let a = await usr.updateUserTerm('38d3bc23-aebe-49aa-91a8-0935a2e24878', 'Divulgation of Services', 'The disclosure of services must comply with legal parameters. The dissemination of illegal services is explicitly prohibited under penalty of expulsion from the platform...')
//     console.log(a)
// }

// b()