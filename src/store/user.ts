import { UserCredential } from 'firebase/auth';
import { atom } from 'nanostores'


export const users = atom<{ displayName: string, photoUrl: string, uid: string }>();
