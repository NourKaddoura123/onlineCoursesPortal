import { request } from 'graphql-request';

const { gql } = require("graphql-request")

const MASTER_URL = `https://api-us-east-1-shared-usea1-02.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_API_KEY}/master`;

//make request
const getAllCourseList=async()=>{
    const query=gql`
    query Courses {
      courseLists {
        name
        description
        free
        totalChapters
        banner {
          id
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            chapterNumber
            youtubeUrl
          }
        }
      }
    }
    
      `
      const result=await request(MASTER_URL,query);
      return result;
}

export default{
    getAllCourseList
}