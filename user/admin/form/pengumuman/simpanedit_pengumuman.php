<?php 
session_start();
include "../../../../assets/koneksi.php" ;

$tgls = date('Y-m-d');
$id= $_POST['id'];
$judul= $_POST['judul'];
$ket= $_POST['ket'];
$ekstensi_diperbolehkan	= array('jpg','JPEG','JPG','PNG','png', 'jpeg','pdf','PDF');
$lokasifile=$_FILES['file']['tmp_name'];

$file=$_FILES['file']['name'];
$x = explode('.', $file);
$ekstensi = strtolower(end($x));
$ukuran=$_FILES['file']['size'];

$namafile=date('his').$file;
$folder="file/".$namafile;


$lokasifilegbr=$_FILES['gambar']['tmp_name'];
$filegbr=$_FILES['gambar']['name'];
$xgbr = explode('.', $filegbr);
$ekstensi = strtolower(end($xgbr));
$ukuran=$_FILES['gambar']['size'];

$namafilegbr=date('his').$filegbr;
$foldergbr="file/".$namafilegbr;

if(in_array($ekstensi, $ekstensi_diperbolehkan) === true){


		$upload=move_uploaded_file($lokasifile, $folder);
		$upload2=move_uploaded_file($lokasifilegbr, $foldergbr);
	$perintah= "UPDATE pengumuman 
	set nama_pengumuman='$judul', keterangan='$ket', tgl_input='$tgls', gambar='$namafilegbr', file='$namafile' where id_pengumuman='$id'";
			
			$sql=mysqli_query($conn, $perintah)or die(mysqli_error());
			$_SESSION['pesan']='<div class="callout callout-info">
        <h4>Pengumuman dengan file berhasil diubah</h4>
       
       
      </div>';
		
		}
else {
	
				$perintah= "UPDATE pengumuman 
	set nama_pengumuman='$judul', keterangan='$ket', tgl_input='$tgls' where id_pengumuman='$id'";
			$sql=mysqli_query($conn, $perintah)or die(mysqli_error());
			
	$_SESSION['pesan']='<div class="callout callout-success">
        <h4>Pengumuman berhasil diubah</h4>

       
      </div>';
}




header("Location:../../?a=pengumuman");



 ?>
 