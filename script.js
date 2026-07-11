
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
