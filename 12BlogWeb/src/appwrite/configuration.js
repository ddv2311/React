//this file will contain majority of the appwrite services
import config from "../conf/config";
import {Client,ID,Databases,Storage,Query} from "appwrite";
//here I am considering slug as documentId you might also use ID.unique  
export class Service{

    client = new Client();
    databases;//this is only declared becausse it should be made when the call of constructor occurs and endpoint and project id are set
    bucket;//this is only declared becausse it should be made when the call of constructor occurs and endpoint and project id are set

    constructor(){
        this.client
        .setEndpoint(config.appWriteUrl)
        .setProject(config.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }
//the featuredImage here will be passed in form of fileId which is later used in deleteFile
    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            //console.log(title, content, featuredImage, status, userId);

            return await this.databases.createDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionId,
                slug,//this is new you might have also used here ID.unique but using slug is something new
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error",error);
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error",error);
        }

    }
    async deletePost(slug){

        try{
            await this.databases.deleteDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionId,
                slug
            )
            return true;
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error",error);
            return false;

        }

    }
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionId,
                slug,

            )
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error",error);
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return this.databases.listDocuments(
                config.appWriteDataBaseId,
                config.appWriteCollectionId,
                queries
            )
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error",error);

        }
    }

    //services of upload file

    async uploadFile(file){

        try{
            return await this.bucket.createFile(
                config.appWriteBucketId,
                ID.unique(),
                file
            )
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error",error);
            return false;
        }

    }

    async deleteFile(fileId){
        try{
                await this.bucket.deleteFile(
                    config.appWriteBucketId,
                    fileId
                )
                return true;
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error",error);
            return false;
        }
    }
    async getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appWriteBucketId,
            fileId
        )
    }

}

const service = new Service()
export default service
