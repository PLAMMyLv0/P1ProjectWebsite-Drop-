function showPopup(title, price, imageUrl) {
    console.log('Popup function called');
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-price').innerText = price;
    document.getElementById('popup-image').src = imageUrl;
    document.getElementById('popup').style.display = 'flex';
  }
  

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}
