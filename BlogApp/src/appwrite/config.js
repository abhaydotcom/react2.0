import Conf from "../conf/conf";
import {ID,Client,Databases,Storage,Query} from 'appwrite';


export class Service{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(Conf.appwriteUrl)
        .setProject(Conf.appwriteProjectId);
        this.databases= new Databases(this.client);
        this.bucket=new Storage(this.client)
    }

    async createPost({title,slug,content,featureImage,status,userId }){
            try {
                return await this.databases.createDocument(
                    Conf.appwriteDatabaseId,   
                    Conf.appwriteCollectionId,    
                    slug,{
                        title, content, featureImage, status, userId
                    }
                );
                
                
            } catch (error) {
                console.log("Appwrite Error :: createPost",error);
            }
    }
    
    async updatePost(slug,{title,content,featureImage,status}){
        try {
            return await this.databases.updateDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,{
                    title,content,featureImage,status,
                }
            )
        } catch (error) {
            console.log("Appwrite Error:: updatePost",error)
        }
    }

    async deletePost(slug){
        try {
                await this.databases.deleteDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("Appwrite Error :: deletePost",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite error:: getPost",error);
            return false;
        }
    }

    async getPosts(queries=[Query.equal("status","active")] ){

        try {
            return await this.databases.listDocuments(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                queries,
            )
            
        } catch (error) {
            console.log("Appwrite error :: getPosts",error);
            return false
        }

    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                Conf.appwriteBucketId,
                ID.unique(),
                file,
            )
            
        } catch (error) {
            console.log("Appwrite error :: uploadFile",error)
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                Conf.appwriteBucketId,fileId,
            )
            return true;

        } catch (error) {
            console.log("Appwrite Error:: deleteFile",error);
            return false;
        }
    }

    getFilePreview(fileId){
  
        return this.bucket.getFilePreview(
            Conf.appwriteBucketId,
            fileId,
        )
 
    }

}


const service =new Service();

export default service