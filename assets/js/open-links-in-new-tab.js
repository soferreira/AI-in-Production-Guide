document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("a[href]");
    links.forEach(function(link) {
      if (link.href.startsWith("http") && !link.href.startsWith(window.location.origin)) {
        link.target = "_blank";
        link.rel = "noopener noreferrer"; // For security and performance reasons
      }
    });
  });
  