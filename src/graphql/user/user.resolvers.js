import { GET_CURRENT_USER } from "./user.queries"

const userResolvers = {
  Mutation: {
    setCurrentUser: (_root, { user }, { cache }) => {
      cache.writeQuery({
        query: GET_CURRENT_USER,
        data: { currentUser: user }
      });

      return user;
    }
  }
}

export default userResolvers;