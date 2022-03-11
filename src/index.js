
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCrdaAfxVMq4MspXe6cdLWvnZoAiLM-JtU",
    authDomain: "firestore8-25ea7.firebaseapp.com",
    projectId: "firestore8-25ea7",
    storageBucket: "firestore8-25ea7.appspot.com",
    messagingSenderId: "86436915855",
    appId: "1:86436915855:web:9f007cc77db42a8a6a9efa"
}

//npm run build

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'books')

getDocs(colRef)
    .then((snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id })
        })
        console.log(books)
    })
    .catch(err => {
        console.log(err.message)
    })

