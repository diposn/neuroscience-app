  // Open modal
  function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }

  // Close modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }

  // Handle the form submission for adding a flashcard
  document.getElementById('flashcardForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Get form data
    const term = document.getElementById('term').value;
    const definition = document.getElementById('definition').value;
    const email = document.getElementById('email').value;

    try {
      // Send the form data to the server via a POST request
      const response = await fetch('/api/flashcards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ term, definition, email }),
      });

      const result = await response.json();

      if (response.ok) {
        // If the flashcard is added successfully, update the flashcards grid
        const newFlashcard = document.createElement('div');
        newFlashcard.classList.add('flashcard');
        newFlashcard.innerHTML = `
          <h3 class="term">${result.term}</h3>
          <p class="definition">${result.definition}</p>
        `;
        document.getElementById('flashcards-grid').appendChild(newFlashcard);

        // Close the modal
        closeModal('addCardModal');
      } else {
        alert('Error adding flashcard: ' + result.message);
      }
    } catch (error) {
      console.error('Error adding flashcard:', error);
    }
  });










  

  // NAVBAR MOVEMENT


  const tabStudy = document.getElementById('tab-study');
  const tabLab = document.getElementById('tab-lab');
  const AdvancedStudyPage = document.getElementById('advancedStudy');
  const virtualLabPage = document.getElementById('virtualLab');


  // Set the initial state when the page loads
window.addEventListener('DOMContentLoaded', () => {
  if (tabStudy.checked) {
      AdvancedStudyPage.style.display = 'block'; 
      virtualLabPage.style.display = 'none'; 
  } else if (tabLab.checked) {
      AdvancedStudyPage.style.display = 'none'; 
      virtualLabPage.style.display = 'block'; 
  } else {
      // Optional: Hide both if no radio button is selected
      AdvancedStudyPage.style.display = 'none';
      virtualLabPage.style.display = 'none';
  }
});

  // Add an event listener to the radio button
  tabStudy.addEventListener('click', () => {
    AdvancedStudyPage.style.display = 'block'; 
    virtualLabPage.style.display = 'none'; 

  });
  
  tabLab.addEventListener('click', () => {
    AdvancedStudyPage.style.display = 'none'; 
    virtualLabPage.style.display = 'block'; 

});