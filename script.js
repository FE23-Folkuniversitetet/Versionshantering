


//Promise: Någonting händer OM villkor uppfylls, någonting händer OM villkor inte uppfylls
//Promise: ett värde som inte är känt när det skapas, men som lovar att ge ett värde i framtiden

const username = "rachel-zocom";

//fetch returnerar ett promise, vilket gör att vi kan använda then för att hantera resultatet asynkront och catch för att hantera fel.
fetch(`https://api.github.com/users/${username}/repos`)
  .then((response) => {
    // Kontrollera att svaret är ok (status 200-299)
    if (!response.ok) { //response är ett objekt som returneras av fetch
		//om inte okej skapas ett nytt objekt (Error)
		//throw skickas detta direkt till catch
		//visar vilken statuskod
      throw new Error("Problem med att hämta data. Status: " + response.status);
    }
    // Tolkar svaret som JSON
    return response.json();
  })
  .then((repos) => {
    // Hantera den mottagna datan (i det här fallet GitHub-repo)
    console.log(repos);
  })
  .catch((error) => {
    // Hantera eventuella fel som uppstår under anropet eller datatolkningen
    console.error("Fel uppstod:", error);
  });