import {initializeApp} from 'firebase/app';
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
User,
NextOrObserver,
onAuthStateChanged} 
    from 'firebase/auth';
    import { Category } from '../store/categories/category.type';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    QueryDocumentSnapshot,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCZ2vqCG25jq5ZC0Aynv41tN1blQ9s_CSI",
    authDomain: "crown-clothing-db-311fc.firebaseapp.com",
    projectId: "crown-clothing-db-311fc",
    storageBucket: "crown-clothing-db-311fc.appspot.com",
    messagingSenderId: "464807186284",
    appId: "1:464807186284:web:098fd0311a1e5f3d46ad49"
  };
  
   const firebaseApp = initializeApp(firebaseConfig);
  const googleProvider=new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:"select_account",
  });

  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleProvider);
  export const db=getFirestore();
export type ObjectsToAdd={
  title:string;
}
  export const addCollectionAndDocuments=async<T extends ObjectsToAdd>(
    collectionKey:string,
    objectsToAdd:T[]):Promise<void>=>
      {
    const collectionRef=collection(db,collectionKey);
    const batch=writeBatch(db);
    objectsToAdd.forEach((object) => {
      const docRef=doc(collectionRef,object.title.toLowerCase());
      batch.set(docRef,object);
    });
    await batch.commit();
    console.log('done');
  };
  export const getCategoriesAndDocuments=async():Promise<Category[]>=>{
    const collectionRef=collection(db,'categories');
    const q=query(collectionRef);
    const querySnapShot=await getDocs(q);
    return querySnapShot.docs.map(docSnapshot=>docSnapshot.data()as Category);
  }
  export type AdditionalInformation={
    displayName?:string;
  }
  export type UserData={
    createdAt:Date;
    displayName:string;
    email:string;
  }
  export const createUserDocumentFromAuth=async(
    userAuth:User,
    additionalInformation={}as AdditionalInformation):Promise<void|QueryDocumentSnapshot<UserData>>=>{
    if(!userAuth) return;
       const userDocRef=doc(db,'users',userAuth.uid);
      const userSnapshot=await getDoc(userDocRef);
      if(!userSnapshot.exists()){
        const {displayName,email}=userAuth;
        const createdAt=new Date();

        try{
          await setDoc(userDocRef,{
            displayName,
            email,createdAt,
            ...additionalInformation,
          });
          }
          catch(error){
            console.log('error creating the user',error);
          }
      }
      return userSnapshot as QueryDocumentSnapshot<UserData>;

  };

  export const createAuthUserWithEmailAndPassword = async(email:string,password:string)=>{
    if(!email || !password) return;
return createUserWithEmailAndPassword(auth,email,password);
  }
  export const signInAuthUserWithEmailAndPassword = async (email:string, password:string) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  }
export const signOutUser=async ()=> await signOut(auth);
export const onAuthStateChangedListener=(callback:NextOrObserver<User>)=>
  onAuthStateChanged(auth,
    callback);

export const getCurrentUser=():Promise<User|null>=>{
  return new Promise((resolve,reject)=>{
  const unsubscribe=onAuthStateChanged(
    auth,
    (userAuth)=>{
    unsubscribe();
    resolve(userAuth);
  },
  reject);
});
};



