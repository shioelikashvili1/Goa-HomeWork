shualeduri = prompt("შეიყვანეთ თქვენი შუალედურის ქულა")
daskvniti = prompt("შეიყვანეთ თქვენი დასკვნითი ქულა")
proeqti = prompt("შეიყვანეთ თქვენი პროექტის ქულა ქულა")

jami = (shualeduri + daskvniti + proeqti)

sash = jami / 3


if (sash > 70) {
    alert('თქვენ ჩააბარეთ კურსი და თქვენი საშუალო ქულა არის' + " " + sash)
}

else {
    alert('თქვენ ვერ ჩააბარეთ კურსი და თქვენი საშუალო ქულა არის' + " " + sash)
}
