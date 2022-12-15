import { supabase } from "../../External/Database";

export class HelloWorkerRepository {
    createUser = async (username: string, password: string, type: string) => {

        const { error } = await supabase
            .from('helloworker')
            .insert({ username: username, password: password, type: type })

        if (error) {
            console.log(error)
            return ({ status: 'insert error' })
        }
        return ({ status: 'created' })

    }
    deleteUser = async (id: string) => {
        const { error } = await supabase
            .from('helloworker')
            .delete()
            .eq('id', id)


        if (error) {
            //console.log(error)
            return ({ status: 'delete error' })
        }
        return ({ status: 'deleted' })

    }
    getUserByUsername = async (username: string) => {
        const { data, error } = await supabase
            .from('helloworker')
            .select()
            .eq('username', username)
            .eq('valid', true)
            .single()
        if (error) {
            return ({ status: 'read error' })
        }
        return data
    }

    getAllUsers = async () => {
        const { data, error } = await supabase
            .from('helloworker')
            .select('id, username, type')
        if (error) {
            return ({ status: 'read error' })
        }
        return data
    }
    updatePassword = async (username: string, password: string, newPassword: string) => {

        const { error } = await supabase
            .from('helloworker')
            .update({ password: newPassword })
            .eq('username', username)
            .eq('password', password)
        if (error) {
            return ({ status: 'read error' })
        }
        return ({ status: 'updated' })
    }
}


// let b = async () => {
//     let usr = new HelloWorkerRepository()
//     let a = await usr.deleteUser('7c998776-acc8-4e79-821e-4e176d3ff445')
//     console.log(a)
// }

// b()