
// header input cursor
window.onload = function() {
  document.getElementById('search-input').focus();
};

// header form input placeholder
function showPlaceholder() {
  const input = document.getElementById('search-input');
  input.classList.add('focused');
  input.placeholder = "검색어를 입력해 주세요.";
}
function hidePlaceholder() {
  const input = document.getElementById('search-input');
  input.classList.remove('focused');
  input.placeholder = ""; 
}