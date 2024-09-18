const timer = (num) => new Promise((resolve, reject) => {
    if(num > 0){
        setTimeout(()=>{

            console.log(num);

            resolve(num)

        },1000)
    }
    else{
        setTimeout(()=>{
            reject("happy independance day")

        },1000)
    }
})

timer(10)
.then((n) => timer(--n))
.then((n) => timer(--n))
.then((n) => timer(--n))
.then((n) => timer(--n))
.then((n) => timer(--n))
.then((n) => timer(--n))
.then((n) => timer(--n))
.then((n) => timer(--n))
.then((n) => timer(--n))
.then((n) => timer(--n))
.catch((msg)=>{console.log(msg)})
