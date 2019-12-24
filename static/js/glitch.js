document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('input[type="range"]').forEach(e => {
    e.addEventListener('change', function() {
      var value = this.value
      var span  = this.parentNode.children[2]
      
      span.innerHTML = value
    })
  })
})