async function hook(link) {
    try {
        const response= await fetch("https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten",{
        method:"POST",
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            url:link
        })
    })
   
    const data=await response.json()

    return data
    }catch (error) {
  console.error("Error:", error);
  alert("Something went wrong. Please try again.");
}

}
export default hook;