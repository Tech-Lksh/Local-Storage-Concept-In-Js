// Local Stoage -> Local storage kya hoti hai apke browser ke andar data store karna jo kii browser band hone par bhi delete nahi hota

 



/*
    1. Local Storage

    Padhna hai -> Store kaise kare 
                  Data fetch kaise kare
                  Remove kaise kare
                  Update kaise kare
*/

/*
    Store kaise kare

    localStorage.setItem("name", "harsh");
*/


/*
    Data fetch kaise kare

    let val = localStorage.getItem("name");
*/

/*
    Remove kaise kare

    let val = localStorage.removeItem("name");
*/

/*
    Update kaise kare

    localStorage.setItem("name", "Lokesh");
*/


/*
    Clear kaise kare

    localStorage.clear("name", "Lokesh");
*/


/*
    How to save array and object in LocalStorage


//  */
//  localStorage.setItem("Number", JSON.stringify([1,2,3,4,5]))
//  localStorage.setItem("Friends", JSON.stringify(["Lokesh", "payal", "Chhotu", "Chumesh"]))


let frnd = JSON.parse(localStorage.getItem("Friends"))
console.log(frnd);

