import { Moderator } from "./Moderator";
import { ServiceRepository } from "../Entities/Repository/Service";
import { UserTermRepository } from "../Entities/Repository/UserTerm";
import { ProfileRepository } from "../Entities/Repository/Profile";
import { HelloWorkerRepository } from "../Entities/Repository/HelloWorker";
import { encryptor } from "../External/supporters/encryptor";

export class Administrator extends Moderator {
    async getStatistics() {
        const profile = new ProfileRepository()
        return await profile.getProfileStatistics()
    }

    async createUserTerm(name: string, content: string, creator: string) {
        const user_term = new UserTermRepository()
        return await user_term.createUserTerm(name, content, creator)
    }
    async deleteUserTerm(id: string) {
        const user_term = new UserTermRepository()
        return await user_term.deleteUserTerm(id)
       
    }
    async updateUserTerm(id: string, name: string, content: string) {
        const user_term = new UserTermRepository()
        return await user_term.updateUserTerm(id, name, content)
    }

    async createService(name: string, userid: string, description: string, value: number) {
        const service = new ServiceRepository()
        return await service.createService(name, description, value, userid)
    }

    async updateService(id: string, name: string, description: string, value: number) {
        const service = new ServiceRepository()
        return await service.updateService(id, name, description, value)
    }
    async deleteService(id: string) {
        const service = new ServiceRepository()
        return await service.deleteService(id)
    }
    async createHelloWorker(username: string, password: string, type: string){
        const helloworker = new HelloWorkerRepository()
        return await helloworker.createUser(username, encryptor(password), type)
    }
    async updatePasswordHelloWorker(username: string, password: string, newPassword: string){
        const helloworker = new HelloWorkerRepository()
        return await helloworker.updatePassword(username, password, encryptor(newPassword))
    }

    async getAllHelloWorkers(){
        const helloworker = new HelloWorkerRepository()
        return await helloworker.getAllUsers()
    }
    async deleteHelloWorker(id: string){
        const helloworker = new HelloWorkerRepository()
        return await helloworker.deleteUser(id)
    }
    
}

// const test = async () => {
//     const adm = new Administrator()
//     let a
//     a = await adm.getStatistics()
//     console.log(a)
//     return a
// }

// test()