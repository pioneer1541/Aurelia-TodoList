

export class Nav {
  changeLink (event) {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    event.className += " active";
  }

  isActive(link){
    const url = window.location.href;
    if ("http://localhost:8080/" + link === url){
      return true
    } else {
      return false
    }
  }

  
}
