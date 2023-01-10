console.log('person1 shows tickect')
console.log('person2 shows tickect')

const preMovie =async ()=>{
    const promiseWifeBringingTicks= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })

    const getPopcorn = new Promise((resolve,reject)=>{resolve('popcorn')})

    const getButter = new Promise((resolve,reject)=>{resolve('butter')})

    const getColdDrink = new Promise((resolve,reject)=>{resolve("cold drink")})
    
    let tickect = await promiseWifeBringingTicks;

    console.log(`wife: here is the ${tickect}`)
    console.log('husband: we should go in')
    console.log("wife: i am hungry")

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`)
    console.log('husband: now we should go in')
    console.log('wife: no i need some butter')

    let butter = await getButter;

    console.log(`husband:i got some ${butter} on popcorn`)
    console.log('husband: anything else darling')
    console.log('wife: yes can you please bring a cold drink for me?')

    let ColdDrink = await getColdDrink;

    console.log(`husband:i got ${ColdDrink} for you`)
    console.log('husband: anything else darling')
    console.log('wife: no lets go its getting late')
    console.log('husband: ok lest go!')

    return tickect;
}

preMovie().then((t)=>{console.log(`person3 shows ${t}`)})


console.log('Person4 shows tickect')
console.log('Person5 shows tickect')