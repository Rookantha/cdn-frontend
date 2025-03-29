import { gql } from "@apollo/client";

// Fetch all content
export const GET_ALL_CONTENT = gql`
  query GetAllContent {
    getAllContent {
      id
      title
      description
    }
  }
`;

// Fetch a single content by ID
export const GET_CONTENT_BY_ID = gql`
  query GetContentById($id: String!) {
    getContentById(id: $id) {
      id
      title
      description
    }
  }
`;

// Create new content
export const CREATE_CONTENT = gql`
  mutation CreateContent($input: CreateContentDto!) {
    createContent(input: $input) {
      id
      title
      description
    }
  }
`;

// Update content
export const UPDATE_CONTENT = gql`
  mutation UpdateContent($id: String!, $input: UpdateContentDto!) {
    updateContent(id: $id, input: $input) {
      id
      title
      description
    }
  }
`;

// Delete content
export const DELETE_CONTENT = gql`
  mutation DeleteContent($id: String!) {
    deleteContent(id: $id)
  }
`;
