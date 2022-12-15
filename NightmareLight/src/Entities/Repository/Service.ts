import { supabase } from "../../External/Database";

export class ServiceRepository {
    createService = async (name: string, description: string, value: number, userid: string) => {
        const { error } = await supabase
            .from('types_professions')
            .insert({ name: name, description: description, price: value, creator: userid })
        //console.log(error)
        if (error) {
            //console.log(error)
            return ({status: 'insert error'})
        }
        return ({ status: 'created' })
        //return ({status: 'created not connected'})
    }
    deleteService = async (id: string) => {
        const { error } = await supabase
            .from('types_professions')
            .delete()
            .eq('id', id)
        if (error) {
            return ({status: 'delete error'})
        }
        return ({status: 'deleted'})
        // return ({status: 'delete not connected'})
    }
    updateService = async (id: string, name: string, description: string, value: number) => {
        const { error } = await supabase
            .from('types_professions')
            .update({ name: name , description: description, price: value})
            .eq('id', id)
        if (error) {
            //console.log(error)
            return ({status: 'update error'})
        }
        return ({status: 'updated'})
        // return ({status: 'delete not connected'})
    }
    readServices = async () => {
        const { data, error } = await supabase
            .from('types_professions')
            .select()

        if (error) {
            return ({status: 'read error'})
        }
        return data
        // return ({status: 'read not connected'})
    }
}

//TESTS

// let b = async () => {
//     let a = new ServiceRepository()
//     let data = await a.readServices()
//     console.log(data)
//     return data

// }

// console.log(b())