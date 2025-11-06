const web = document.getElementById("web")
const head = document.querySelector(".head")
const container = document.querySelector(".container")
const img = document.getElementById("img")
const loader = document.querySelector(".loader")


const promiseOne = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            loader.style.display = "none"
            resolve()
        }, 1500)
    })
}

const promiseTwo = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            head.style.opacity = "1"
            head.style.transform = "translateY(0) "
            resolve()
        }, 500);
    })
}

const promiseThree = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            container.style.opacity = "1"
            container.style.transform = "translateX(0)"
            resolve()
        }, 500);
    })
}

const promiseFour = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            img.style.opacity = "1"
            img.style.transform = "translateX(0)"
            resolve()
        }, 600);
    })
}

const allPromises = async() => {
    try {
        const task1 = await promiseOne()
        const task2 = await promiseTwo()
        const task3 = await promiseThree()
        const task4 = await promiseFour()
    } catch(err) {
        console.log(err)
    }
}

allPromises()

    

