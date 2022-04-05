var Cari = function () {

    function Kaydet(selectToRefresh, dataTableToRefresh, hideAllBotBox, hideBootBox) {
        var validation = ValidateForm.IsValid("cariForm", ValidationFields.CariFormFields());
        validation.validate().then(function (status) {
            if (status == 'Valid') {

                var form = $("#cariForm").serializeJSON();

                var keys = Object.keys(form);
                var include = keys.slice(1, keys.length);
                form.Include = include;

                
                console.log("cari", form);

                Post('/Cari/Kaydet',
                    { cari: form },
                    function (response) {
                        if (response.Success) {
                            toastr.success(response.Description);
                        } else {
                            toastr.error(response.Description);
                        }
                    },
                    function (x, y, z) {
                        //Error
                    },
                    function () {
                        //BeforeSend
                    },
                    function (response) {
                        //Complete

                        if (selectToRefresh != null) {

                            var data = response.responseJSON.Data;
                            console.log("data", data);
                            var option = new Option(data.Unvan, data.CariId, true, true);
                            $(selectToRefresh).append(option);
                            $(selectToRefresh).select2();   
                            //$(selectToRefresh).append($('<option>', {
                            //    value: data.CariId,
                            //    text: data.Unvan,
                            //    selected: 'selected'
                            //}));

                           
                        }

                        if (dataTableToRefresh != "") {
                            setTimeout(function () { $(dataTableToRefresh).KTDatatable('reload'); }, 3000)
                        }
                        if (hideAllBotBox) {
                            bootbox.hideAll();
                        }
                        if (hideBootBox != "") {
                            $(hideBootBox).remove();
                            $(".modal-backdrop").remove();
                        }

                    },
                    "json");

            } else {
                return false;
            }
        });
    }

    function DurumGuncelle(id) {
        Post('/Cari/DurumGuncelle',
            { id: id },
            function (response) {

                if (response.Success) {
                    toastr.success(response.Description);
                } else {
                    toastr.error(response.Description);
                }
            },
            function (x, y, z) {
                //Error
            },
            function () {
                //BeforeSend
            },
            function () {
                //Complete
                setTimeout(function () { $('#kt_datatable').KTDatatable('reload'); }, 2000)
            },
            "json");
    }

     

    var handleEvent = function () {

        $(document).on("click", "[event='cariKaydet']", function (evet) {
            event.preventDefault();
            Kaydet();
        });

        $(document).on("click", "[event='durum']", function (evet) {
            event.preventDefault();
            var id = $(this).attr("id");

            bootbox.dialog({
                title: 'Personel Durum Güncelle',
                message: Global.cardTemplate('İşleme Devam Etmek İstiyor musunuz?'),
                size: 'large',
                buttons: {
                    cancel: {
                        label: "Vazgeç",
                        className: 'btn-danger',
                        callback: function () { }
                    },
                    ok: {
                        label: "Devam",
                        className: 'btn-info',
                        callback: function () {
                            DurumGuncelle(id);
                        }
                    }
                }
            });
        });

        $(document).on("click", "[event='cariFormPopup']", function (e) {
            e.preventDefault();
            var title = $(this).attr("formTitle");
            var id = $(this).attr("id");
            Post('/Cari/Form',
                { id: id },
                function (response) {
                    bootbox.dialog({
                        title: title,
                        message: Global.cardTemplate(response),
                        size: 'large',
                        buttons: {
                            cancel: {
                                label: "Kapat",
                                className: 'btn-danger',
                                callback: function () { }
                            },
                            ok: {
                                label: "Kaydet",
                                className: 'btn-info',
                                callback: function () {
                                    Kaydet("", "#kt_datatable", true, "");
                                    return false;
                                }
                            }
                        }
                    });
                },
                function (x, y, z) {
                    //Error
                },
                function () {
                    //BeforeSend
                },
                function () {
                    Global.init();
                },
                "html");
        });

        $(document).on("click", "[event='kisiCariFormPopup']", function (e) {
            e.preventDefault();
            var title = $(this).attr("formTitle");
            var id = $(this).attr("id");
            Post('/Cari/Form',
                { id: id },
                function (response) {
                    bootbox.dialog({
                        title: title,
                        message: Global.cardTemplate(response),
                        size: 'large',
                        className: "CariForm",
                        buttons: {
                            cancel: {
                                label: "Kapat",
                                className: 'btn-danger',
                                callback: function () { }
                            },
                            ok: {
                                label: "Kaydet",
                                className: 'btn-info',
                                callback: function () {
                                    Kaydet("#CariId", "", false, ".CariForm");
                                    return false;
                                }
                            }
                        }
                    });
                },
                function (x, y, z) {
                    //Error
                },
                function () {
                    //BeforeSend
                },
                function () {
                    Global.init();
                },
                "html");
        });

      

    }

     

    return {

        EventInit: function () {
            handleEvent();
        },
        
    };
}();

