var Location = function () {

     
    var init = function () {

        $(document).on("change", "#UlkeId", function (e) {
            e.preventDefault();
            var ulkeId = $(this).val();


            $('#IlId').children().remove().end().append('<option selected value="">Şehir Seçiniz</option>');
            $('#IlceId').children().remove().end().append('<option selected value="">İlçe Seçiniz</option>');

           

            Post('/Tanim/SelectIlListe',
                { ulkeId: ulkeId },
                function (response) {
                    console.log(response)
                    jQuery.each(response, function (i, item) {
                        $('#IlId').append($('<option>', {
                            value: item.Id,
                            text: item.Value
                        }));
                    });
                },
                function (x, y, z) {
                    //Error
                },
                function () {
                    //BeforeSend
                },
                function () {
                    $('#IlId').selectpicker('refresh');
                    $('#IlceId').selectpicker('refresh');
                },
                "json");
        });

        $(document).on("change", "#IlId", function (e) {
            e.preventDefault();
            var ilId = $(this).val();

            $('#IlceId').empty().append('<option value="">İlçe Seçiniz</option>').val('');

            Post('/Tanim/SelectIlceListe',
                { ilId: ilId },
                function (response) {
                    console.log(response)
                    jQuery.each(response, function (i, item) {
                        $('#IlceId').append($('<option>', {
                            value: item.Id,
                            text: item.Value
                        }));
                    });
                },
                function (x, y, z) {
                    //Error
                },
                function () {
                    //BeforeSend
                },
                function () {
                    $('#IlceId').selectpicker('refresh');
                },
                "json");
        });

    };

    return {
        // public functions
        init: function () {
            init();
        }
    };
}();
