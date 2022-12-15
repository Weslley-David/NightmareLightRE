import { encryptor } from "../External/supporters/encryptor";
import { ServiceRepository } from "../Entities/Repository/Service";
import { HelloWorkerRepository } from "../Entities/Repository/HelloWorker";
import { generateTokens } from "../External/supporters/generateTokens";
import { LogRepository } from "../Entities/Repository/Log";
import { UserTermRepository } from "../Entities/Repository/UserTerm";
import { DenounceUserRepository } from "../Entities/Repository/DenounceUser";
import { ProfileRepository } from "../Entities/Repository/Profile";

export class User {
    id?: string;
    username?: string;
    password?: string;
    type?: string;

    async createDenounceUsers(userid: string, reason: string, denouncedusername: string){
        let denounce = new DenounceUserRepository
        return await denounce.createDenounce(userid, reason, denouncedusername)
    }

    async readLogs(){
        let logRepo = new LogRepository();
        return await logRepo.getLogs()
    }
    async readAllLogs(){
        let logRepo = new LogRepository();
        return await logRepo.getAllLogs()
    }
    async readAllProfiles(){
        let logRepo = new ProfileRepository();
        return await logRepo.getAllProfiles()
    }

    async readUserTerm() {
        const userTerm = new UserTermRepository
        return await userTerm.readUserTerms()
    }

    async readService() {
        const service = new ServiceRepository()
        return await service.readServices()
    }
    async signin(username: string, password: string) {
        let userRepository = new HelloWorkerRepository()
        let userData = await userRepository.getUserByUsername(username);
        if (userData.password == encryptor(password)) {
            let [acetoken, reftoken] = generateTokens(userData.id, userData.username, userData.type)
            return ({ "signin": true, "reftoken": reftoken, "acetoken": acetoken, "id": userData.id, "type": userData.type  })
        } else {
            return ({ "signin": false })
        }

    }
}


