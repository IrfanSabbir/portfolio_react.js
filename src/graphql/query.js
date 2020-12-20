import {gql} from '@apollo/client'
import { Profile_Info , Categories, Education , Experience , Project , social} from './fragments'

export const user_info = gql`
   query{
     profile{
         ...profile_info
     }
   }
   ${Profile_Info}
`

export const categories = gql `
  query getCategory( $type : Int!){
    getCategory(type: $type){
        ...categories
    }
  }
  ${Categories}
`

export const experiences = gql `
   query{
    getExperience{
        ...experience
    }
   }
   ${Experience}
`

export const educations = gql `
   query{
    getEducations{
        ...education
    }
   }
   ${Education}
`

export const projects = gql `

   query getProject ($type : Int!){
    getProject (type: $type){
        ...project
    }
   }
   ${Project}
`

export const quotes = gql `

   query{
    getQuote{
        quote
    }
   }
`

export const socail_urls = gql `
   query{
    getSocial{
        ...social
    }
   }
   ${social}
`