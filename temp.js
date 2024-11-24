

const input = document.getElementById( "input" ); 
const Select = document.getElementById("Select" );
const button = document.getElementById("Convert" );
const displayScreen = document.getElementById("displayResult");
  

Select.addEventListener('change', (event) => {

button.addEventListener('click', () => {


   
if (event.target.value === "celcius") {
    const result = (input.value  * (9/5) + 32)
    displayScreen.value = `${result} F`;
    
} else if (event.target.value === "fahrenheit") {
    const result = ((input.value   - 32)   * 5/9 )
    displayScreen.value = `${result} C`;
    
}

 })

 })
 