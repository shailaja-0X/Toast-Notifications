// const { json } = require("express");

// fetch(url)
// .then(function(response)
// {
//     return response.json();
// })
// .then(function (data)
// {
//     console.log(data);
// })

// async function getUsers()
// {
//     const response = await  fetch(url);
//     const data = await response.json(); 
// }

// 1. start fetch
// 2. wait..
// 3. promise resolves
// 4. response now contains response Object
// 5. start parsing json
// 6. wait..
// 7. promise resolves
// 8. data now contains the javascript Object

// async function test()
// {
//     console.log("A");

//     await Promise.resolve();

//     console.log("B");
// }

// test();

// console.log("C");

// console.log("1");

// async function demo()
// {
//     console.log("2");
//     await Promise.resolve();
//     console.log("3");
// }

// demo();

// console.log("4");
 
// Promise.resolve().then(function()
// {
//     console.log("5");
// });

// console.log("6");

//toaster
// function createToaster(config)
// {
//     return function(notification)
//     {
//         //will do something
//         const div = document.createElement("div");
//         div.className = `fixed ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-white"} px-6 py-3 rounded shadow-lg pointer-events-none ${config.positionX === "right" ? "right-10" : "left-10"} ${config.positionY === "top" ? "top-10" : "bottom-10"} `;
//         div.textContent = notification;
//         document.body.appendChild(div);
//         setTimeout(() => {
//             document.body.removeChild(div);
//         }, config.duration * 1000);


//     };
// }

// let toaster = createToaster(
//     {
//         positionX: "left",
//         positionY: "top",
//         theme: "dark",
//         duration: 3,
//     }
// );

// toaster("something is on its way..");

function createToaster(config)
{
    return function(str)
    {
        let div = document.createElement("div");
        div.textContent = str;
        div.className = 
        `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 
        py-3 rounded shadow-lg pointer-events-none`;
    document.querySelector(".parent").appendChild(div);

        if(config.positionX !== "left" || positionY !== "top")
        {

            document.querySelector(".parent").className += 
            `${config.positionX === "right" ? " right-5" : " left"} ${config.positionY === "bottom" ? " bottom-5" :
             " top-5"}`;
        }

    setTimeout(() => 
    {
        document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);
    };
}

//sending obj
let toaster = createToaster(
    {
        positionX: "right",
        positionY: "bottom",
        theme: "dark",
        duration: 4,
    }
);

toaster("DOWNLOAD DONE!");
setTimeout(() =>
{
    toaster("It's complete");
}, 3000);