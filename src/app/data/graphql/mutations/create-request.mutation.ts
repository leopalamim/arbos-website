export const CreateRequestMutation = `
  mutation ($input: createRequestInput) {
    createRequest (input: $input) {
      request{
        id
        name
        email
        phone
        address
        person
      }
    }
  }
`;
