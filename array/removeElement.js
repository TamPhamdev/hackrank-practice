var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};
removeElement([3, 2, 2, 3], 3);
/* Cho 2 tham số : array và value
Remove tất cả value = với element trong array.
Điều kiện : modified trực tiếp array và trả về số lượng còn lại trong array.
**Note: khi sử dụng hàm splice sẽ xoá 1 phần hoặc thêm 1 phần tử vào vị trí index, sẽ THAY ĐỔI độ dài của mảng. Nên i-- length khi đã xoá 1 phần tử.

*/
