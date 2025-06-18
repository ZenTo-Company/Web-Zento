function toggleSearchMobile() {
  const searchBtn = document.getElementById('searchBtn');
  const searchForm = document.getElementById('searchFormMobile');
 
  searchBtn.classList.add('hide');
  searchForm.classList.add('show');
  document.getElementById('searchInputMobile').focus();
}
 
function searchFunction(event) {
  event.preventDefault(); // Ngăn reload trang
 
  const inputPC = document.getElementById('searchInputPC');
  const inputMobile = document.getElementById('searchInputMobile');
 
  const keyword = inputPC?.value || inputMobile?.value || '';
 
  if (keyword.trim() === '') {
    alert("Vui lòng nhập từ khóa tìm kiếm.");
    return;
  }
 
  // Thực hiện xử lý tìm kiếm tại đây
  alert("Đã tìm: " + keyword);
 
  // Reset form sau khi tìm
  if (inputPC) inputPC.value = '';
  if (inputMobile) {
    inputMobile.value = '';
    document.getElementById('searchFormMobile').classList.remove('show');
    document.getElementById('searchBtn').classList.remove('hide');
  }
}