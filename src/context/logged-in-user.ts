import { createContext } from 'react';
import User from '../types/user';

const LoggedInUserContext = createContext<User | undefined>(undefined);
export default LoggedInUserContext;
