import { createContext, useContext, useState, useEffect } from "react"
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage"
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
const provider = new GoogleAuthProvider();
const FirebaseContext = createContext(null);



const firebaseConfig = {
    apiKey: "AIzaSyBkw6f9LgAHDrx-EyK93l_YnXCcIjY-6gI",
    authDomain: "bookify-909c5.firebaseapp.com",
    projectId: "bookify-909c5",
    storageBucket: "bookify-909c5.appspot.com",
    messagingSenderId: "191671200782",
    appId: "1:191671200782:web:a72d956a96629adc7de05f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)
const storage = getStorage(app)

export const useFirebase = () => useContext(FirebaseContext)


export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
    }, [])

    const signInWithgogle = () => {
        signInWithPopup(auth, provider)
    }
    const signUpWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithEmailAndPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    const listAllBooks=()=>{
        return getDocs(collection(firestore,"books"))
    }
    const getImageURL=(path)=>{
        return getDownloadURL(ref(storage,path))
    }
    const isLogedIn = user ? true : false
    const handleCreateNewListing = async (name, isbnNo, price, coverpic) => {
        console.log(user)
        const imageref = ref(storage, `uploads/images/${Date.now()}-${coverpic.name}`)
        const uploadresult = await uploadBytes(imageref, coverpic)
        return await addDoc(collection(firestore, "books"), {
            name,
            isbnNo,
            price,
            imageURL: uploadresult.ref.fullPath,
            userId: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL

        })


    }
    const signout = () => {
        signOut(auth)
    }
    return (
        <FirebaseContext.Provider value={{ signUpWithEmail, signInWithEmailAndPass, signInWithgogle, isLogedIn, handleCreateNewListing, signout,listAllBooks,getImageURL }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}