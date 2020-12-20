import { gql} from '@apollo/client'

export const Profile_Info = gql `
 fragment profile_info on Profile{
    name 
    email
    contact_no
    overview 
    dob
    title 
    image 
    video_intro 
 }
`

export const Categories = gql`
   fragment categories on Category {
    name
    logo
    type
   }
`

export const Education = gql`
   fragment education on education {
    institute
    logo
    fields
    title
    gpa
    from
    to
   }
`

export const Experience = gql`
   fragment experience on experience {
    company
    logo
    title
    from
    to
   
   }
`

export const Project = gql`
   fragment project on project {
    name
    thumb
    descriptions
    images
    categories
    demo
    type
    login_email
    login_password
    hot
   }
`

export const social = gql`
   fragment social on social {
    name
    thumb
    url
   }
`
