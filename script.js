// Handle form submission
document.getElementById("pickupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const item = document.getElementById("item").value;
  
  document.getElementById("formMsg").textContent = `Thank you, ${name}! Your request to recycle "${item}" has been received.`;
  
  this.reset(); // Clear form
});
