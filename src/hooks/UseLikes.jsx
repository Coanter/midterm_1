import { useContext } from 'react';
import { LikesContext } from '../context/LikesContext.jsx';

export const useLikes = () => useContext(LikesContext);