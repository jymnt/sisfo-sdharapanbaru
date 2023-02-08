$(function() {
    $('#btn-save-contact').on('click', function (e) {
        e.preventDefault();
        // console.log('OK');
        if ($('#name').val() == "" ||
                $('#address').val() == "" ||
                $('#num_phone').val() == "" ||
                $('#email').val() == "" ||
                $('#messages').val() == "") {
                Swal.fire(
                            'Gagal!',
                            'Pastikan kamu mengisi semua inputan!',
                            'error'
                            );
                return false;
        } 	 

            $.ajax({
                url         : 'http://localhost/ppwLanjut/egaxavierweb/public/contactus/tambah',
                data        : 
                            {
                                nm_cust     : $('#name').val(),
                                alamat      : $('#address').val(),
                                no_hp       : $('#num_phone').val(),
                                email_cust  : $('#email').val(),
                                message     : $('#messages').val(),
                            },
                method      : 'post',
                dataType    : 'json',
                success: function(response) {
                    // console.log(response);
                     if (response.status == 'success') {
                        Swal.fire(
                            'Berhasil!',
                            'Data berhasil dikirim',
                            'success'
                        );
                      } else {
                        Swal.fire(
                            'Gagal!',
                            'Data gagal dikirim',
                            'error'
                         );
                        }
                    $('#name').val(''),
                    $('#address').val(''),
                    $('#num_phone').val(''),
                    $('#email').val(''),
                    $('#messages').val('')    
                 },

                error: function(error) {
                },
                    
             });
     }); 
});