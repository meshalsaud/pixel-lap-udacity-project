

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  
// Select color input
// Select size input
let width=$('#inputWidth').val();
let height=$('#inputHeight').val();
 $('#pixelCanvas').empty();


  for(let x=0;x<height;x++){
    $('#pixelCanvas').append('<tr></tr>')
  }
  for(let y=0;y<width;y++){
    $('tr').append('<td></td>')
  }
  
  let cell=$('td');
  cell.click(function(){
    let color=$('#colorPicker').val();
    $(this).attr('bgcolor',color);
  });

}
let submit=$('input[type="submit"]');
submit.click(function(event){
  event.preventDefault();
  
  makeGrid();
  
});