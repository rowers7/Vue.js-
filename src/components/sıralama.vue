<template>
<div>
  <div class="siralamabutonlar"><a href="#">Ürün ismine göre (A-Z)</a><a href="#" class="active">En düşük fiyat</a><a href="#">En yüksek fiyat</a><a href="#">Çok satanlar</a><a href="#">En yeniler</a> <img title="Liste Şeklinde Göster" src="images/liste1.JPG" alt="" class="icon1"><img  src="images/liste2.JPG" alt="" class="icon2"><img title="Katalog Şeklinde Göster" src="images/liste3.JPG" alt="" class="icon3">
  </div>
</div>
</template>

<script>
export default {


}
</script>
.icon1 {

<style scoped>







.icon1 {
  margin-left: 365px;
  cursor: pointer;

}
.icon3 {
  margin-left: 0px;
  cursor: pointer;

}
.icon1:hover {
  text-blink: "dfdf";

}
.siralamabutonlar .text {
  position:relative;
  bottom:30px;
  left:0px;
  visibility:hidden;
}

.icon1:hover .text {
  visibility:visible;
}

.siralamabutonlar{
  width: 1120px;
  vertical-align: middle;
  padding: 15px 10px;
  justify-content: space-between;
  background:#F2F4F7;
  margin-left: 400px;
}

.siralamabutonlar a{
  padding: 5px 20px;
  font-size: 12px;
  display: inline-block;
  vertical-align: middle;
  background:#fff;
  color:#818193;
  margin-right: 10px;
}

.siralamabutonlar a:hover {
  background-color: #0B9FF3;
  color:white;
  text-decoration-line: none;
}
.siralamabutonlar a:focus {
  background-color: #0B9FF3;
  color:white;
  text-decoration-line: none;
}
</style>
