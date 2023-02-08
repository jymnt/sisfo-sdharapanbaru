$(function() {

    $('.tombolTambahData').on('click', function() {
        $('#formModalLabel').html('Tambah Data');
        $('.modal-footer button[type=submit]').html('Tambah data Customer');
        // console.log('');
    });

    $('.tampilModalUbahCustomer').on('click', function() {
        $('#formModalLabel').html('Ubah Data');
        $('.modal-footer button[type=submit]').html('Ubah data Customer');
        $('.modal-body form').attr('action', 'http://localhost/ppwLanjut/egaxavierweb/public/customer/ubah');
        // console.log('');

        const id_cust = $(this).data('id_cust');
        
        $.ajax({
            url: 'http://localhost/ppwLanjut/egaxavierweb/public/customer/getubah',
            data: {id_cust : id_cust},
            method: 'post',
            dataType: 'json',
            success: function(data){
                // console.log(data);
                $('#nm_cust').val(data.nm_cust);
                $('#alamat').val(data.alamat);
                $('#no_hp').val(data.no_hp);
                $('#email_cust').val(data.email_cust);
                $('#id_cust').val(data.id_cust);
            }
        })

    });

});

$(function(){
    $('.tombolTambahData').on('click', function() {
        $('#formModalLabel').html('Tambah Data');
        $('.modal-footer button[type=submit]').html('Tambah data Paket');
        // console.log('');
    });

    $('.tampilModalUbahPaket').on('click', function() {
        $('#formModalLabel').html('Ubah Data Paket');
        $('.modal-footer button[type=submit]').html('Ubah data Paket');
        $('.modal-body form').attr('action', 'http://localhost/ppwLanjut/egaxavierweb/public/paket/ubah');
        // console.log('ok');

        const id_paket = $(this).data('id_paket');
        // console.log(id_paket);

        $.ajax({
            url: 'http://localhost/ppwLanjut/egaxavierweb/public/paket/getUbah',
            data: {id_paket:id_paket},
            method: 'post',
            dataType: 'json',
            success: function(data){
                console.log(data);        
                $('#nm_paket').val(data.nm_paket);
                $('#id_package').val(data.id_package);
                $('#harga').val(data.harga);
                $('#detail').val(data.detail);
                $('#id_paket').val(data.id_paket);
            }
        })
    });

});

$(function(){
    $('.tombolTambahData').on('click', function() {
        $('#formModalLabel').html('Tambah Data Paket');
        $('.modal-footer button[type=submit]').html('Tambah data Paket');
        // console.log('ok');
    });

    $('.tampilModalUbahPackage').on('click', function() {
        $('#formModalLabel').html('Ubah Data Package');
        $('.modal-footer button[type=submit]').html('Ubah data Package');
        $('.modal-body form').attr('action', 'http://localhost/ppwLanjut/egaxavierweb/public/package/ubah');
        // console.log('ok');
        

        const id_package = $(this).data('id_package');
        // console.log(id_package);
        
        $.ajax({
          url: 'http://localhost/ppwLanjut/egaxavierweb/public/package/getubah',
          data: {id_package : id_package},
          method: 'post',
          dataType: 'json',
          success: function(data){
              $('#nm_package').val(data.nm_package);
              $('#id_package').val(data.id_package);
            
               // ini bikin input type hidden buat nyimpen gambar_lama
               const gambar_lama = $('<input>');
               gambar_lama.attr('type', 'hidden');
               gambar_lama.attr('name', 'gambar_lama');
               gambar_lama.attr('value', data.gbr_package);
               $('.modal-body form').append(gambar_lama);
          }
    
      });
        })
    });   

