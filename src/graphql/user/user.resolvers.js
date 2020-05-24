import { GET_CURRENT_USER } from "./user.queries"

import { 
  auth, 
  googleProvider, 
  createUserProfileDocument, 
  getCurrentUser 
} from '../../firebase/firebase.utils';
import { updateCurrentUser } from "./user.utils";


const userResolvers = {
  Mutation: {
    setCurrentUser: (_root, { user }, { cache }) => {
      cache.writeQuery({
        query: GET_CURRENT_USER,
        data: { currentUser: user }
      });

      return user;
    },
    signInWithGoogle: async (_root, _args, { cache }) => {
      try {
        const { user } = await auth.signInWithPopup(googleProvider);
        
        return await updateCurrentUser(cache, user);
      } catch (error) {
        console.log("Error signing in: ", error);
        return null;
      }
    },
    checkUserSession: async (_root, _args, { cache }) => {
      try {
        const userAuth = await getCurrentUser();
        if(!userAuth) return null;

        return await updateCurrentUser(userAuth);
      } catch (error) {
        console.log("Error signing in: ", error);
        return null;
      }
    }
  }
}

export default userResolvers;