import { createContext } from 'react';
import Firebase from 'firebase';

const AuthUserContext = createContext<Firebase.User | undefined>(undefined);
export default AuthUserContext;
