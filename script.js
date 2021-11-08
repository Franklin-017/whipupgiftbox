const input = document.getElementById('noOfGifts');
const generatedGifts = document.getElementById('generatedGifts');

function generateGifts() {
  var html ='<span>Generated Gifts</span>';
  const noOfGift = parseInt(input.value);
  for(let i=0; i<noOfGift; i ++) {
    html += '<img src="./asset/photo-1549465220-1a8b9238cd48.jfif" alt="gift">'
  }
  input.value = ''
  generatedGifts.innerHTML = html;
}