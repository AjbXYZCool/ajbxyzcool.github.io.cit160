function poundsToKilograms() {

    // Input
    let pounds = parseFloat(document.getElementById('pounds').value);

    // Processing
    let kilo = pounds * 0.454;

    // Output
    document.getElementById('output').innerHTML = "The total number of kilograms is " + kilo.toFixed(1);
}