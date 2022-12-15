export interface ServiceRepositoryInterface{
    createService(name: string, description: string, value: number, userid: string): any;
    readService(): any;
    deleteService(id: string): any;
}