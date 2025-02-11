const add = (name, age = 12) => {
    if (name === "Drew"){
        console.log("Got you")
    } else {
        console.log("No")
    }

    add.age = age;

    return name;
    return age;
}

const _drew = add("Drew", 14)