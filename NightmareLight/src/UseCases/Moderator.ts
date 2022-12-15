import { DenounceUserRepository } from "../Entities/Repository/DenounceUser";
// import { PerfilRepository } from "../Entities/Repository/Perfil";
import { ProfileRepository } from "../Entities/Repository/Profile";
import { UserSanctionRepository } from "../Entities/Repository/UserSanction";
import { User } from "./User";

export class Moderator extends User {
    getDenouncedComments() {
        throw new Error("Method not implemented.");
    }
    async getProfileById(id: string) {
        let user = new ProfileRepository()
        return await user.getProfileById(id)
    }
    async getProfileByUsername(username: string) {
        let user = new ProfileRepository()
        return await user.getProfileByUsername(username)
    }
    async getDenounceById(id: string) {
        let user = new DenounceUserRepository()
        return await user.getDenounceById(id)
    }
    async getDenoncedUsers() {
        let denounceUserRepo = new DenounceUserRepository();
        return await denounceUserRepo.getDenounce()
    }

    async getDenouncesOfUser(id: string){
        let denounceUserRepo = new DenounceUserRepository();
        return await denounceUserRepo.getDenounceFromDenouncedId(id)
    }

    async getDenouncesFromUser(id: string){
        let denounceUserRepo = new DenounceUserRepository();
        return await denounceUserRepo.getDenounceFromDenouncerId(id)
    }

    async MarckAsSolvedDenounce(id: string) {
        let denounceUserRepo = new DenounceUserRepository();
        return await denounceUserRepo.markAsSolvedDenounce(id)
    }

    async applySanctionForUser(denouncedid: string, userid: string, revocation_time: string) {
        let sanctionUserRepo = new UserSanctionRepository();
        return await sanctionUserRepo.createSanction(denouncedid, userid, revocation_time)
    }

    async applyPermanentSanctionForUser(denouncedid: string, userid: string) {
        let sanctionUserRepo = new UserSanctionRepository();
        return await sanctionUserRepo.createPermanentSanction(denouncedid, userid)
    }

    async revogueSanctionForUser(denouncedid: string) {
        let sanctionUserRepo = new UserSanctionRepository();
        return await sanctionUserRepo.revogueSanction(denouncedid)
    }

    applySanctionForComment() {
        throw new Error("Method not implemented.");
    }
}

// const test = async () => {
//     const adm = new Moderator()
//     let a
//     a = await adm.getDenoncedUsers()
//     console.log(a)
//     return a
// }

// test()