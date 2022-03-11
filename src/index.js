
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, setDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCrdaAfxVMq4MspXe6cdLWvnZoAiLM-JtU",
    authDomain: "firestore8-25ea7.firebaseapp.com",
    projectId: "firestore8-25ea7",
    storageBucket: "firestore8-25ea7.appspot.com",
    messagingSenderId: "86436915855",
    appId: "1:86436915855:web:9f007cc77db42a8a6a9efa"
}
//npm install firebase
// npm i webpack webpack-cli -D
//npm run build

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'buttons')

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

const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
    })
        .then(() => {
            addBookForm.reset()
        })
})

// deleting docs
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'books', deleteBookForm.id.value)

    deleteDoc(docRef)
        .then(() => {
            deleteBookForm.reset()
        })
})


// const a = ["10", "12", "14", "16", "18"]
// const b = ["pn", "vt", "sr", "cht", "pt", "sb", "vs"]
//
// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//         addDoc(colRef, {
//             value: "",
//             active: true,
//         }, a[i] + b[j])
// }}