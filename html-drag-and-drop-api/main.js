
document.addEventListener('DOMContentLoaded', (event) => {

    var srcDrag = null;
    
    function startDrag(e) {
      this.style.opacity = '0.4';  //style when draging
      
      srcDrag = this;
  
      e.dataTransfer.effectAllowed = 'move';       //data transfer property holds the data to be sent & should be in the dragstart event
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
  
    function overDrag(e) {
        e.preventDefault(); //override default
    }
  


    function enterDrag(e) {
      this.classList.add('over');
    }
  
    function leaveDrag(e) {
      this.classList.remove('over');
    }



    function dropped(e) {   
        e.stopPropagation(); //stops from redirecting.
      
      
      if (srcDrag != this) {
        srcDrag.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData("text/html");
      }  
    }



    function endDrag(e) {
      this.style.opacity = '1';
      
      drags.forEach(function (dragg) {
        dragg.classList.remove('over');
      });
    }  
    let drags = document.querySelectorAll('.container .box');
    drags.forEach(function(dragg) {
      dragg.addEventListener('dragstart', startDrag);
      dragg.addEventListener('dragenter', enterDrag);
      dragg.addEventListener('dragover', overDrag);
      dragg.addEventListener('dragleave', leaveDrag);
      dragg.addEventListener('drop', dropped);
      dragg.addEventListener('dragend', endDrag);
    });

  });