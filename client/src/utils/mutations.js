import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BITESITE = gql`
  mutation saveBiteSite($namePlate: String!, $footerNamePlate: String, $avatar: String, $favicon: String, $embed: String, $facebook: String, $instagram: String, $tikTok: String, $snapchat: String, $youTube: String, $twitter: String, $whatsApp: String, $linkedIn: String, $pinterest: String, $soundCloud: String, $spotify: String, $appleMusic: String) {
    saveBiteSite(namePlate: $namePlate, footerNamePlate: $footerNamePlate, avatar: $avatar, favicon: $favicon, embed: $embed, facebook: $facebook, instagram: $instagram, tikTok: $tikTok, snapchat: $snapchat, youTube: $youTube, twitter: $twitter, whatsApp: $whatsApp, linkedIn: $linkedIn, pinterest: $pinterest, soundCloud: $soundCloud, spotify: $spotify, appleMusic: $appleMusic) {
      _id
      username
      biteSites {
        _id
        namePlate
        footerNamePlate
        avatar
        favicon
        embed
        facebook
        instagram
        tikTok
        snapchat
        youTube
        twitter
        whatsApp
        linkedIn
        pinterest
        soundCloud
        appleMusic
        spotify
      }
    }
  }
`;

export const REMOVE_BITESITE = gql`
  mutation removeBiteSite($id: ID!) {
    removeBiteSite(_id: $id) {
      _id
      username
      biteSites {
        _id
        namePlate
        footerNamePlate
        avatar
        favicon
        embed
        facebook
        instagram
        tikTok
        snapchat
        youTube
        twitter
        whatsApp
        linkedIn
        pinterest
        soundCloud
        appleMusic
        spotify
      }
    }
  }
`;
