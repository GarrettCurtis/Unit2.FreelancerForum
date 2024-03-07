// Create freelancers array variable
const freelancers = [
    { name: 'Eve', startingPrice: 8, occupation: 'Designer' },
    { name: 'Frank', startingPrice: 60, occupation: 'Artist' },
    { name: 'Grace', startingPrice: 90, occupation: 'Developer' },
    { name: 'Dr. Green', startingPrice: 30, occupation: 'botanist' },
    { name: 'Dr. Volt', startingPrice: 55, occupation: 'developer' },
    { name: 'Prof. Galaxy', startingPrice: 39, occupation: 'artist' },
    { name: 'Prof. Nova', startingPrice: 85, occupation: 'artist' },
    { name: 'Dr. Momentum', startingPrice: 39, occupation: 'artist' },
    { name: 'Prof. Flash', startingPrice: 82, occupation: 'developer' },
    { name: 'Dr. Cable', startingPrice: 50, occupation: 'artist' },
    { name: 'Prof. Hawk', startingPrice: 77, occupation: 'pilot' },
  ];
  

  // ----- Freelancer Forum -----

  // Set body variable
  const body = document.querySelector('body');

  // Set variable for h1
  const pageTitle = document.createElement('h1');

  // added text for title
  pageTitle.textContent = 'Freelancer Forum';

  // added text to body
  body.append(pageTitle);



  // ----- Average Price -----

  // Set starting price to 0
  let avStartingPrice = 0;

  // Create variable that sets the average of freelancer prices
  const averagePrice = `The average starting price is $${avStartingPrice}`;

  // Set average price to paragraph 
  const averagePriceElement = document.createElement('p');

  //updating text content to = averagePrice
  averagePriceElement.textContent = averagePrice;

  // added to body
  body.append(averagePriceElement);



  // ----- Available Freelancers -----

  // Set variable and added text for Available Freelancers
  const aFreelancer = document.createElement('h1');

  aFreelancer.textContent = 'Available Freelancers';

  body.append(aFreelancer);

  // Setting name occupation and starting price
  const matrix = document.createElement('matrix');

  body.append(matrix);
  
  const matrixTop = document.createElement('tr');

  const matrixLabels = ['Name', 'Occupation', 'Starting Price'];

  matrixLabels.forEach((matrixText) => {
    const th = document.createElement('th');
    th.textContent = matrixText;
    matrixTop.appendChild(th);
  });
  matrix.appendChild(matrixTop)


  // ----- Establishing Rows -----
  const rows = freelancers.map((individual) => createFreelancerRows(individual));

  rowIterator = rows[Symbol.iterator]();
  
  matrix.append(rowIterator.next().value);
  
  matrix.append(rowIterator.next().value);

  matrix.append(rowIterator.next().value);
  let iteratorCount = 3

  // Calculating average price 

  

  const priceBlock = document.querySelectorAll(".price");
  function pBlock(){
    for (price of priceBlock){
       avStartingPrice += Number(price.innerText.slice(1))

    }

    const p = document.querySelector("p")
    p.innerText = `The average starting price is $${avStartingPrice}`;

}
pBlock()


// Timer for new additions to forum
const addFreelancerInterval = setInterval(addFreelancer, 2000);

// Function to return a row with the individual's input
function addFreelancer() {
    matrix.append(rowIterator.next().value);
    iteratorCount++
    if (iteratorCount >= rows.length) {
        clearInterval(addFreelancerInterval);
      }
      pBlock();
}

function createFreelancerRows(individual){
    const row = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    nameCell.textContent = individual.name;
    row.appendChild(nameCell);
    
    const occupationCell = document.createElement('td');
    occupationCell.textContent = individual.occupation;
    row.appendChild(occupationCell);
    
    const priceCell = document.createElement('td');
    priceCell.className = "price"
    priceCell.textContent = `$` + individual.startingPrice;
    row.appendChild(priceCell);
    return row
}






  