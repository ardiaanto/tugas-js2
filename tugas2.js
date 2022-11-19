const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deidre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];



function searchName(keyword, limit, callback) {
    const result = name.filter((item) => {
        return item.toLowerCase().includes(keyword.toLowerCase());
    });

    callback(result.slice(0, limit));
}

searchName("an", 3, callback);

function callback(result) {
    console.log(result);
}

