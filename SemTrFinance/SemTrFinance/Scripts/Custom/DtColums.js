var DtColums = function () {

    function cariColumns() {
        var clm = [
            {
                field: 'Id',
                title: 'ID',
                width: 50
            },
            {
                field: 'Kod',
                title: 'Kod',

            },

            {
                field: 'Unvan',
                title: 'Unvan'
            },
            {
                field: 'VergiDairesi',
                title: 'VergiDairesi',
                width: 200
            },
            {
                field: 'VergiNo',
                title: 'VergiNo',
                width: 200
            },
            {
                field: 'Ilce.Adi',
                title: 'İlçe',
                template: function (row) {
                    return row.Ilce
                }
            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var cls = row.Durum == "Aktif" ? "danger" : "success";
                    var durum = row.Durum == "Aktif" ? "Pasif" : "Aktif";
                    return '\
	                       <a class="btn btn-icon btn-info" event="cariFormPopup" formTitle="'+ row.Unvan + ' Düzenle" href="#" id="' + row.CariId + '" title="Hızlı Düzenle" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-edit" ></i>\
                           </a>\
                             <a class="btn btn-icon btn-primary" href="/cari/detay/'+ row.CariId + '" title="Cari Detay Sayfası" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-search" ></i>\
                           </a>\
                            <a class="btn btn-icon btn-'+ cls + '" event="durum" href="#" id="' + row.CariId + '" title="' + durum + ' Yap" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-user" ></i>\
                           </a>\
	                    ';
                },
            }]

        console.log("clm", clm);
        return clm;
    }

    function stokColumns() {
        var clm = [
            {
                field: 'Id',
                title: 'ID',
                width: 50
            },
            {
                field: 'Kod',
                title: 'Kod',

            },
            {
                field: 'Adi',
                title: 'Adi',

            },

            {
                field: 'BirimAdi',
                title: 'Birim Adi'
            },
            {
                field: 'MuhasebeGrupKodu',
                title: 'Muhasebe Grup Kodu',
                width: 200
            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var cls = row.Durum == "Aktif" ? "danger" : "success";
                    var durum = row.Durum == "Aktif" ? "Pasif" : "Aktif";
                    return '\
	                       <a class="btn btn-icon btn-info" event="cariFormPopup" formTitle="'+ row.Unvan + ' Düzenle" href="#" id="' + row.CariId + '" title="Hızlı Düzenle" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-edit" ></i>\
                           </a>\
                             <a class="btn btn-icon btn-primary" href="/cari/detay/'+ row.CariId + '" title="Cari Detay Sayfası" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-search" ></i>\
                           </a>\
                            <a class="btn btn-icon btn-'+ cls + '" event="durum" href="#" id="' + row.CariId + '" title="' + durum + ' Yap" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-user" ></i>\
                           </a>\
	                    ';
                },
            }]

        console.log("clm", clm);
        return clm;
    }

    function faturaColumns() {
        var clm = [
            {
                field: 'Id',
                title: 'ID',
                width: 50,
                autoHide:false,
            },
            {
                field: 'Cari',
                title: 'Cari',
                sortable: false,
                autoHide: false,

            }, {
                field: 'EvrakTipi',
                title: 'EvrakTipi',
                autoHide: false,
            },
            {
                field: 'HareketTipi',
                title: 'HareketTipi',
                autoHide: false,
            },

            {
                field: 'HareketCinsi',
                title: 'HareketCinsi',
                autoHide: false,
            },
            {
                field: 'NormalIade',
                title: 'NormalIade',
                autoHide: false,
                
            },
            {
                field: 'FaturaBelgeTuru',
                title: 'FaturaBelgeTuru',
                autoHide: false,
                
            },
            {
                field: 'BelgeNo',
                title: 'BelgeNo',
                autoHide: false,
                
            },
            {
                field: 'Tarih',
                title: 'Tarih',
                autoHide: false,
                
            },{
                field: 'ProjeKodu',
                title: 'ProjeKodu',
                autoHide: false,
                
            },
            {
                field: 'DovizCinsi',
                title: 'DovizCinsi',
                autoHide: false,
                
            },
            {
                field: 'Tutar',
                title: 'Tutar',
                autoHide: false,

            } ,
            {
                field: 'Vade',
                title: 'Vade',
                autoHide: false,

            },
            {
                field: 'DolarKur',
                title: 'DolarKur'

            },
            {
                field: 'EuroKur',
                title: 'EuroKur',
                autoHide: false,

            },
            {
                field: 'PoundKur',
                title: 'PoundKur',
                autoHide: false,

            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var cls = row.Durum == "Aktif" ? "danger" : "success";
                    var durum = row.Durum == "Aktif" ? "Pasif" : "Aktif";
                    return '\
	                       <a class="btn btn-icon btn-info" event="cariFormPopup" formTitle="'+ row.Unvan + ' Düzenle" href="#" id="' + row.CariId + '" title="Hızlı Düzenle" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-edit" ></i>\
                           </a>\
                             <a class="btn btn-icon btn-primary" href="/cari/detay/'+ row.CariId + '" title="Cari Detay Sayfası" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-search" ></i>\
                           </a>\
                            <a class="btn btn-icon btn-'+ cls + '" event="durum" href="#" id="' + row.CariId + '" title="' + durum + ' Yap" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-user" ></i>\
                           </a>\
	                    ';
                },
            }]

         
        return clm;
    }

    function esktreColumns() {
        var clm = [
            {
                field: 'Id',
                title: 'ID',
                width: 50,
                autoHide: false,
            },
            {
                field: 'Cari',
                title: 'Cari',
                sortable: false,
                autoHide: false,

            }, {
                field: 'EvrakTipi',
                title: 'EvrakTipi',
                autoHide: false,
            },
            {
                field: 'HareketTipi',
                title: 'HareketTipi',
                autoHide: false,
            },

            {
                field: 'HareketCinsi',
                title: 'HareketCinsi',
                autoHide: false,
            },
            {
                field: 'EvrakSeriNo',
                title: 'EvrakSeriNo',
                autoHide: false,

            },
            {
                field: 'EvrakSiraNo',
                title: 'EvrakSiraNo',
                autoHide: false,

            },
            {
                field: 'BelgeNo',
                title: 'BelgeNo',
                autoHide: false,

            },
            {
                field: 'Tutar',
                title: 'Tutar',
                autoHide: false,

            },
            {
                field: 'Tarih',
                title: 'Tarih',
                autoHide: false,

            },
            {
                field: 'OrijinalDovizKuru',
                title: 'OrijinalDovizKuru',
                autoHide: false,

            },
            {
                field: 'OrijinalDovizSembolu',
                title: 'OrijinalDovizSembolu',
                autoHide: false,

            },
            
            {
                field: 'Vade',
                title: 'Vade',
                autoHide: false,

            },
            {
                field: 'DolarKur',
                title: 'DolarKur',
                 autoHide: false,

            },
            {
                field: 'EuroKur',
                title: 'EuroKur',
                autoHide: false,

            },
            {
                field: 'PoundKur',
                title: 'PoundKur',
                autoHide: false,

            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var cls = row.Durum == "Aktif" ? "danger" : "success";
                    var durum = row.Durum == "Aktif" ? "Pasif" : "Aktif";
                    return '\
	                       <a class="btn btn-icon btn-info" event="cariFormPopup" formTitle="'+ row.Unvan + ' Düzenle" href="#" id="' + row.CariId + '" title="Hızlı Düzenle" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-edit" ></i>\
                           </a>\
                             <a class="btn btn-icon btn-primary" href="/cari/detay/'+ row.CariId + '" title="Cari Detay Sayfası" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-search" ></i>\
                           </a>\
                            <a class="btn btn-icon btn-'+ cls + '" event="durum" href="#" id="' + row.CariId + '" title="' + durum + ' Yap" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-user" ></i>\
                           </a>\
	                    ';
                },
            }]


        return clm;
    }

    function kisiColumns() {
        var columns = [
            {
                field: 'KisiId',
                title: 'ID',
                width: 50
            },
            {
                field: 'Brans.Adi',
                title: 'Branş',
                autoHide: false,
                width: 100,
                template: function (row) {
                    return row.Brans
                }
            },
            {
                field: 'AdSoyad',
                title: 'Ad Soyad',
                autoHide: false,
                width: 125
            },
            {
                field: 'Eposta',
                title: 'Eposta',
                autoHide: false,
                width: 125
            },
            {
                field: 'Telefon',
                title: 'Telefon',
                autoHide: false,
                width: 125
            },
            {
                field: 'IlId',
                title: 'Şehir',
                width: 125,
                autoHide: false,
                template: function (row) {
                    return row.Sehir
                }
            },
            {
                field: 'SonGorusmeKonu',
                title: 'Son Görüşme Konu',
                width: 125,
                sortable: false,
                autoHide: false,
                template: function (row) {
                    return row.SonGorusmeKonu
                }
            },
            {
                field: 'SonGorusmeAciklamaKod',
                title: 'Son Görüşme Kod',
                width: 125,
                sortable: false,
                autoHide: false,
                template: function (row) {
                    return row.SonGorusmeAciklamaKod
                }
            },
            {
                field: 'Gorusme.KayitTarihi',
                title: 'Görüşme',
                width: 125,
                sortable: false,
                autoHide: false,
                template: function (row) {
                    return row.SonGorusmeTarihi
                }
            },
            {
                field: 'Personel',
                title: 'Son Görüşmeyi Yapan',
                width: 125,
                autoHide: false,
                sortable: false,
                template: function (row) {
                    return row.SonGorusmeYapan
                }
            },
            {
                field: 'IlgiAlani',
                title: 'İlgi Alanları',
                sortable: false
            },
            {
                field: 'Aktif',
                title: 'Aktif',
                sortable: false,
                template: function (row) {
                    var cls = row.Aktif == "Aktif" ? "success" : "danger";
                    return '<span class="label font-weight-bold label-lg label-light-' + cls + ' label-inline">' + row.Aktif + '</span>'
                }
            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var cls = row.Aktif == "Aktif" ? "success" : "danger";
                    var durum = row.Aktif == "Aktif" ? "Pasif" : "Aktif";

                    var str = '<a class="btn btn-icon btn-info mr-1"'
                    str += "params = {'id':'" + row.KisiId + "','cariId':'" + row.CariId + "'}";
                    str += ' event = "kisiFormPopup" formTitle = "' + row.AdSoyad + ' Düzenle" href = "#" id = "' + row.KisiId + '" title = "Hızlı Düzenle" data - toggle="tooltip" data - placement="top" > <i class="flaticon-edit" ></i> </a>'
                    str += ' <a target="_blank" class="btn btn-icon btn-primary mr-1" href="/kisi/detay/' + row.KisiId + '" title="Kisi Detay Sayfası" data-toggle="tooltip" data-placement="top"> <i class="flaticon-search" ></i></a>'
                    str += '<a class="btn btn-icon mr-1 btn-' + cls + '" event="kisiDurum" href="#" id="' + row.KisiId + '" title="' + durum + ' Yap" data-toggle="tooltip" data-placement="top"><i class="flaticon-user" ></i></a> ';

                    return str;
                },
            }
        ];
        return columns;
    }

    function gorusmeColumns() {
        var columns = [
            {
                field: 'GorusmeId',
                title: 'ID',
                width: 50
            },
            {
                field: 'Kisi.AdSoyad',
                title: 'Kisi',
                template: function (row) {
                    return row.Kisi
                }
            },
            {
                field: 'Cari.Unvan',
                title: 'Cari',
                template: function (row) {
                    return row.Cari
                }
            },
            {
                field: 'GorusmeTipId',
                title: 'Görüşme Tipi',
                template: function (row) {
                    return row.GorusmeTip
                }
            },
            {
                field: 'IliskiTip',
                title: 'İlişki Tip'
            },
            {
                field: 'Iliski',
                title: 'İlişki'
            },
            {
                field: 'Konu',
                title: 'Konu'
            },
            {
                field: 'Personel.Adi',
                title: 'Personel',
                template: function (row) {
                    return row.Personel
                }
            },
            {
                field: 'GorusmeTarihi',
                title: 'Tarih',
                type: 'date',
                format: 'YYYY/MM/DD'
            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {

                    var str = '<a class="btn btn-icon btn-info mr-1"';
                    str += " params = {'id':'" + row.GorusmeId + "','cariId':'" + row.CariId + "'}";
                    str += ' selectToRefresh = ""';
                    str += ' dataTableToRefresh = "#kt_datatable"';
                    str += ' hideAllBotBox = "true"';
                    str += ' hideBootBox = ""';
                    str += ' event="gorusmeFormPopup" formTitle="' + row.Konu + ' Düzenle" href="#" id="' + row.GorusmeId + '" title="Hızlı Düzenle" data-toggle="tooltip" data-placement="top"><i class="flaticon-edit" ></i> </a>'


                    return str;
                },
            }];
        return columns;
    }

    function notColumns() {
        var columns = [
            {
                field: 'NotId',
                title: 'ID',
                width: 50
            },
            {
                field: 'Aciklama',
                title: 'Açıklama'
            },
            {
                field: 'Cari.Unvan',
                title: 'Cari',
                template: function (row) {
                    return row.Cari
                }
            },
            {
                field: 'Personel.Adi',
                title: 'Personel',
                template: function (row) {
                    return row.Personel
                }
            },
            {
                field: 'KayitTarihi',
                title: 'Tarih',
                type: 'date',
                format: 'YYYY/MM/DD'
            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {

                    var str = '<a class="btn btn-icon btn-info mr-1"';
                    str += " params = {'id':'" + row.NotId + "','cariId':'" + row.CariId + "'}";
                    str += ' event="notFormPopup" formTitle="' + row.Aciklama + ' Düzenle" href="#" id="' + row.NotId + '" title="Hızlı Düzenle" data-toggle="tooltip" data-placement="top"><i class="flaticon-edit" ></i> </a>'
                    //str += ' <a class="btn btn-icon btn-primary mr-1" href = "/kisi/detay/' + row.KisiId + '" title = "Kişi Detay" data - toggle="tooltip" data - placement="top" > <i class="flaticon-search" ></i></a>'
                    //str += '<a class="btn btn-icon mr-1 btn-' + cls + '" event="kisiDurum" href="#" id="' + row.KisiId + '" title="' + durum + ' Yap" data-toggle="tooltip" data-placement="top"><i class="flaticon-user" ></i></a> ';

                    return str;
                },
            }];
        return columns;
    }

    function hatirlaticiColumns() {
        var clm = [
            {
                field: 'HatirlaticiId',
                title: 'ID',
                width: 50
            },
            {
                field: 'Personel',
                title: 'Personel'
            },
            {
                field: 'IliskiTip',
                title: 'İlişki Tip'
            },
            {
                field: 'Iliski',
                title: 'İlişki'
            },
            {
                field: 'HatirlatmaTarihi',
                title: 'Hatirlatma Tarihi'
            },
            {
                field: 'Durum',
                title: 'Durum',
                template: function (row) {
                    var cls = row.Durum == "Açık" ? "success" : "danger";
                    return '<span class="label font-weight-bold label-lg label-light-' + cls + ' label-inline">' + row.Durum + '</span>'
                }
            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var cls = row.Durum == "Açık" ? "danger" : "success";


                    var str = '<a class="btn btn-icon btn-info mr-1"';
                    str += 'formTitle = "Hatırlatıcı Düzenle"';
                    str += 'formId = "hatirlaticiForm"';
                    str += 'formUrl = "/Hatirlatici/Form"';
                    str += 'submitUrl = "/Hatirlatici/Kaydet"';
                    str += ' selectToRefresh = ""';
                    str += ' dataTableToRefresh = "#kt_datatable"';
                    str += ' hideAllBotBox = "true"';
                    str += ' hideBootBox = ""';
                    str += ' event="hatirlaticiFormPopup" href = "#" id = "' + row.HatirlaticiId + '" title = "Hızlı Düzenle" data - toggle="tooltip" data - placement="top" > <i class="flaticon-edit" ></i> </a>'
                    //str += ' <a class="btn btn-icon btn-primary mr-1" href = "/kisi/detay/' + row.KisiId + '" title = "Kişi Detay" data - toggle="tooltip" data - placement="top" > <i class="flaticon-search" ></i></a>'

                    if (row.Durum == "Açık") {
                        str += '<a class="btn btn-icon mr-1 btn-' + cls + '" event="hatirlaticiKapat" href="#" id="' + row.HatirlaticiId + '" title="Kapat" data-toggle="tooltip" data-placement="top"><i class="flaticon-close" ></i></a> ';
                    }

                    return str;
                },
            }]

        console.log("clm", clm);
        return clm;
    }

    function kongreColumns() {
        var clm = [
            {
                field: 'Id',
                title: 'ID',
                width: 50
            },
            {
                field: 'Adi',
                title: 'Adı'
            },

            {
                field: 'Ilce.Adi',
                title: 'İlçe',
                template: function (row) {
                    return row.Ilce
                }

            },
            {
                field: 'Il.Adi',
                title: 'İl',
                template: function (row) {
                    return row.Il
                }
            },
            {
                field: 'Baslangic',
                title: 'Başlangıç Tarihi',
                type: 'date',
                format: 'DD/MM/YYYY',
            },
            {
                field: 'Bitis',
                title: 'Bitiş Tarihi',
                type: 'date',
                format: 'DD/MM/YYYY',
            },
            {
                field: 'Aktif',
                title: 'Durum',
                template: function (row) {
                    var cls = row.Durum == "Aktif" ? "success" : "danger";
                    return '<span class="label font-weight-bold label-lg label-light-' + cls + ' label-inline">' + row.Durum + '</span>'
                }
            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var cls = row.Durum == "Aktif" ? "danger" : "success";
                    var durum = row.Durum == "Aktif" ? "Pasif" : "Aktif";
                    return '\
	                       <a class="btn btn-icon btn-info" event="kongreFormPopup" formTitle="'+ row.Adi + ' Düzenle" href="#" id="' + row.Id + '" title="Hızlı Düzenle" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-edit" ></i>\
                           </a>\
                             <a class="btn btn-icon btn-primary" href="/kongre/detay/'+ row.Id + '" title="Kongre Detay Sayfası" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-search" ></i>\
                           </a>\
                            <a class="btn btn-icon btn-'+ cls + '" event="durum" href="#" id="' + row.Id + '" title="' + durum + ' Yap" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-user" ></i>\
                           </a>\
	                    ';
                },
            }]


        return clm;
    }

    function kongreFiyatColumns() {

        var clm = [
            {
                field: 'Id',
                title: 'ID',
                width: 50
            },
            {
                field: 'Ucret',
                title: 'Ücret'
            },
            {
                field: 'Baslangic',
                title: 'Başlangıç Tarihi',
                type: 'date',
                format: 'DD/MM/YYYY',
            },
            {
                field: 'Bitis',
                title: 'Bitiş Tarihi',
                type: 'date',
                format: 'DD/MM/YYYY',
            },
            {
                field: 'Aciklama',
                title: 'Açıklama'
            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var cls = row.Durum == "Aktif" ? "danger" : "success";
                    var durum = row.Durum == "Aktif" ? "Pasif" : "Aktif";
                    var str = "";
                    str += '<a class="btn btn-icon btn-info mr-2" event="kongreFiyatFormPopup"';
                    //params ="{"id":"0","kongreId":"3"}"
                    str += "params = {'id':'" + row.Id + "','kongreId':'" + row.KongreId + "'}";
                    str += ' formTitle = "Fiyat Düzenle" href = "#" id = "' + row.Id + '" kongreId = "' + row.KongreId + '" title = "Hızlı Düzenle" data-toggle="tooltip" data-placement="top" > <i class="flaticon-edit" ></i></a >'

                    str += '<a class="btn btn-icon btn-danger" event="kongreFiyatSil" href="#" id="' + row.Id + '" title="Kongre Fiyat Sil" data-toggle="tooltip" data-placement="top"><i class="flaticon-user" ></i></a>';
                    return str;
                },
            }]


        return clm;
    }

    function kongreKursColumns() {

        var clm = [
            {
                field: 'Id',
                title: 'ID',
                width: 50
            },
            {
                field: 'Adi',
                title: 'Adı'
            },
            {
                field: 'KursTip.Adi',
                title: 'Kurs Tip',
                template: function (row) {
                    return row.KursTip
                }
            },
            {
                field: 'KursKonu.Adi',
                title: 'Kurs Konu',
                template: function (row) {
                    return row.KursKonu
                }
            },
            {
                field: 'Egitmen',
                title: 'Eğitmenler',
                sortable: false

            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var cls = row.Durum == "Aktif" ? "danger" : "success";
                    var durum = row.Durum == "Aktif" ? "Pasif" : "Aktif";
                    var str = "";
                    str += '<a class="btn btn-icon btn-info mr-2" event="kongreKursFormPopup"';
                    //params ="{"id":"0","kongreId":"3"}"
                    str += "params = {'id':'" + row.Id + "','kongreId':'" + row.KongreId + "'}";
                    str += ' formTitle = "Fiyat Düzenle" href = "#" id = "' + row.Id + '" kongreId = "' + row.KongreId + '" title = "Hızlı Düzenle" data-toggle="tooltip" data-placement="top" > <i class="flaticon-edit" ></i></a >'
                    str += '<a class="btn btn-icon btn-danger" event="kongreKursSil" href="#" id="' + row.Id + '" title="Kongre Fiyat Sil" data-toggle="tooltip" data-placement="top"><i class="flaticon-user" ></i></a>';
                    return str;
                },
            }]


        return clm;
    }

    function egitimColumns() {
        var clm = [
            {
                field: 'Id',
                title: 'ID',
                width: 50
            },
            {
                field: 'Adi',
                title: 'Adı'
            },

            {
                field: 'Ilce.Adi',
                title: 'İlçe',
                template: function (row) {
                    return row.Ilce
                }

            },
            {
                field: 'Il.Adi',
                title: 'İl',
                template: function (row) {
                    return row.Il
                }
            },
            {
                field: 'Baslangic',
                title: 'Başlangıç Tarihi',
                type: 'date',
                format: 'DD/MM/YYYY',
            },
            {
                field: 'Bitis',
                title: 'Bitiş Tarihi',
                type: 'date',
                format: 'DD/MM/YYYY',
            },
            {
                field: 'Aktif',
                title: 'Durum',
                template: function (row) {
                    var cls = row.Durum == "Aktif" ? "success" : "danger";
                    return '<span class="label font-weight-bold label-lg label-light-' + cls + ' label-inline">' + row.Durum + '</span>'
                }
            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var cls = row.Durum == "Aktif" ? "danger" : "success";
                    var durum = row.Durum == "Aktif" ? "Pasif" : "Aktif";
                    return '\
	                       <a class="btn btn-icon btn-info" event="egitimFormPopup" formTitle="'+ row.Adi + ' Düzenle" href="#" id="' + row.Id + '" title="Hızlı Düzenle" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-edit" ></i>\
                           </a>\
                             <a class="btn btn-icon btn-primary" href="/egitim/detay/'+ row.Id + '" title="Kongre Detay Sayfası" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-search" ></i>\
                           </a>\
                            <a class="btn btn-icon btn-'+ cls + '" event="egitimDurum" href="#" id="' + row.Id + '" title="' + durum + ' Yap" data-toggle="tooltip" data-placement="top">\
                                <i class="flaticon-user" ></i>\
                           </a>\
	                    ';
                },
            }]


        return clm;
    }

    function egitimFiyatColumns() {

        var clm = [
            {
                field: 'Id',
                title: 'ID',
                width: 50
            },
            {
                field: 'Ucret',
                title: 'Ücret'
            },
            {
                field: 'Baslangic',
                title: 'Başlangıç Tarihi',
                type: 'date',
                format: 'DD/MM/YYYY',
            },
            {
                field: 'Bitis',
                title: 'Bitiş Tarihi',
                type: 'date',
                format: 'DD/MM/YYYY',
            },
            {
                field: 'Aciklama',
                title: 'Açıklama'
            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var cls = row.Durum == "Aktif" ? "danger" : "success";
                    var durum = row.Durum == "Aktif" ? "Pasif" : "Aktif";
                    var str = "";
                    str += '<a class="btn btn-icon btn-info mr-2" event="kongreFiyatFormPopup"';
                    //params ="{"id":"0","kongreId":"3"}"
                    str += "params = {'id':'" + row.Id + "','kongreId':'" + row.KongreId + "'}";
                    str += ' formTitle = "Fiyat Düzenle" href = "#" id = "' + row.Id + '" kongreId = "' + row.KongreId + '" title = "Hızlı Düzenle" data-toggle="tooltip" data-placement="top" > <i class="flaticon-edit" ></i></a >'

                    str += '<a class="btn btn-icon btn-danger" event="kongreFiyatSil" href="#" id="' + row.Id + '" title="Kongre Fiyat Sil" data-toggle="tooltip" data-placement="top"><i class="flaticon-user" ></i></a>';
                    return str;
                },
            }]


        return clm;
    }

    function egitimKursColumns() {

        var clm = [
            {
                field: 'Id',
                title: 'ID',
                width: 50
            },
            {
                field: 'Adi',
                title: 'Adı'
            },
            {
                field: 'KursTip.Adi',
                title: 'Kurs Tip',
                template: function (row) {
                    return row.KursTip
                }
            },
            {
                field: 'KursKonu.Adi',
                title: 'Kurs Konu',
                template: function (row) {
                    return row.KursKonu
                }
            },
            {
                field: 'Egitmen',
                title: 'Eğitmenler',
                sortable: false

            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var cls = row.Durum == "Aktif" ? "danger" : "success";
                    var durum = row.Durum == "Aktif" ? "Pasif" : "Aktif";
                    var str = "";
                    str += '<a class="btn btn-icon btn-info mr-2" event="kongreKursFormPopup"';
                    //params ="{"id":"0","kongreId":"3"}"
                    str += "params = {'id':'" + row.Id + "','kongreId':'" + row.KongreId + "'}";
                    str += ' formTitle = "Fiyat Düzenle" href = "#" id = "' + row.Id + '" kongreId = "' + row.KongreId + '" title = "Hızlı Düzenle" data-toggle="tooltip" data-placement="top" > <i class="flaticon-edit" ></i></a >'
                    str += '<a class="btn btn-icon btn-danger" event="kongreKursSil" href="#" id="' + row.Id + '" title="Kongre Fiyat Sil" data-toggle="tooltip" data-placement="top"><i class="flaticon-user" ></i></a>';
                    return str;
                },
            }]


        return clm;
    }

    function kursTakvimColumns(rowSelection) {

        var idCol =
        {
            field: 'Id',
            title: "#",
            width: 20
        };

        if (rowSelection != undefined && rowSelection == "true") {
            idCol.selector = { class: '' }
        }

        var clm = [
            idCol,
            {
                field: 'Adi',
                title: 'Adı',

            },
            {
                field: 'Egitmen',
                title: 'Egitmen'
            },
            {
                field: 'Baslangic',
                title: 'Başlangıç Tarihi',
                type: 'date',
                format: 'DD/MM/YYYY hh:mm'
            },
            {
                field: 'Bitis',
                title: 'Bitiş Tarihi',
                type: 'date',
                format: 'DD/MM/YYYY hh:mm'
            },
            {
                field: 'Kontenjan',
                title: 'Kontenjan'
            },
            {
                field: 'EkstraUcret',
                title: 'Ek Ücret'
            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var str = "";
                    str += '<a class="btn btn-icon btn-info mr-2" event="kursTakvimFormPopup"';
                    //params ="{"id":"0","kongreId":"3"}"
                    str += "params = {'id':'" + row.Id + "','kongreId':'" + row.KongreId + "'}";
                    str += ' formTitle = "Kurs Takvim Düzenle" href = "#" id = "' + row.Id + '" kongreId = "' + row.KongreId + '" title = "Kurs Takvim Düzenle" data-toggle="tooltip" data-placement="top" > <i class="flaticon-edit" ></i></a >'
                    //str += '<a class="btn btn-icon btn-danger" event="kongreKursSil" href="#" id="' + row.Id + '" title="Kongre Fiyat Sil" data-toggle="tooltip" data-placement="top"><i class="flaticon-user" ></i></a>';
                    return str;
                },
            }]


        return clm;
    }

    function egitimTakvimColumns(rowSelection) {

        var idCol =
        {
            field: 'Id',
            title: "#",
            width: 20
        };

        if (rowSelection != undefined && rowSelection == "true") {
            idCol.selector = { class: '' }
        }

        var clm = [
            idCol,
            {
                field: 'Adi',
                title: 'Adı',

            },
            {
                field: 'Egitmen',
                title: 'Egitmen'
            },
            {
                field: 'Baslangic',
                title: 'Başlangıç Tarihi',
                type: 'date',
                format: 'DD/MM/YYYY hh:mm'
            },
            {
                field: 'Bitis',
                title: 'Bitiş Tarihi',
                type: 'date',
                format: 'DD/MM/YYYY hh:mm'
            },
            {
                field: 'Kontenjan',
                title: 'Kontenjan'
            },
            {
                field: 'EkstraUcret',
                title: 'Ek Ücret'
            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var str = "";
                    str += '<a class="btn btn-icon btn-info mr-2" event="egitimKursTakvimFormPopup"';
                    //params ="{"id":"0","kongreId":"3"}"
                    str += "params = {'id':'" + row.Id + "','egitimId':'" + row.EgitimId + "'}";
                    str += ' formTitle = "Kurs Takvim Düzenle" href = "#" id = "' + row.Id + '" egitimId = "' + row.EgitimId + '" title = "Kurs Takvim Düzenle" data-toggle="tooltip" data-placement="top" > <i class="flaticon-edit" ></i></a >'
                    //str += '<a class="btn btn-icon btn-danger" event="kongreKursSil" href="#" id="' + row.Id + '" title="Kongre Fiyat Sil" data-toggle="tooltip" data-placement="top"><i class="flaticon-user" ></i></a>';
                    return str;
                },
            }]


        return clm;
    }

    function sikayetColumns() {

        var clm = [
            {
                field: 'SikayetId',
                title: 'ID',
                width: 50
            },
            {
                field: 'Personel',
                title: 'Personel'
            },
            {
                field: 'Kisi',
                title: 'Kisi'
            },
            {
                field: 'IliskiTip',
                title: 'İlişki Tip'
            },
            {
                field: 'Iliski',
                title: 'İlişki'
            },
            {
                field: 'KayitTarihi',
                title: 'Kayıt Tarihi',
                type: 'date',
                format: 'DD/MM/YYYY hh:mm'
            },
            {
                field: 'İşlem',
                title: 'İşlem',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var str = "";
                    str += '<a class="btn btn-icon btn-info mr-2" event="sikayetFormPopup"';
                    //params ="{"id":"0","kongreId":"3"}"
                    str += " params = {'id':'" + row.SikayetId + "'}";
                    str += " selectToRefresh = ''";
                    str += " dataTableToRefresh = '#kt_datatable'";
                    str += " hideAllBotBox = 'true'";
                    str += " hideBootBox = ''";
                    str += " formtitle = 'Hatırlatıcı Ekle'";
                    str += ' href = "#" id = "' + row.SikayetId + '" title = "Şikayet Düzenle" data-toggle="tooltip" data-placement="top" > <i class="flaticon-edit" ></i></a >'
                    //str += '<a class="btn btn-icon btn-danger" event="kongreKursSil" href="#" id="' + row.Id + '" title="Kongre Fiyat Sil" data-toggle="tooltip" data-placement="top"><i class="flaticon-user" ></i></a>';
                    return str;
                },
            }]


        return clm;
    }

    function etkinlikTakipColumns() {

        var clm = [
            
            {
                field: 'TableName',
                title: 'Alan',
                template: function (row) {
                    return row.Alan
                }
            },
            {
                field: 'EventType',
                title: 'Etlinlik Tip',
                template: function (row) {
                    return row.EtkinlikTip
                }
            },
            {
                field: 'PersonelId',
                title: 'Personel',
                template: function (row) {
                    return row.Personel
                }
            },
            {
                field: 'Tarih',
                title: 'Tarih',
                type: 'date',
                format: 'DD/MM/YYYY hh:mm'
            },
            {
                field: 'EskiDeger',
                title: 'Orijinal Değer',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var str = "";
                    if (row.EtkinlikTipId == "2" || row.EtkinlikTipId == "3") {
                        str += '<span event="etklinlikTakipFormPopup" class="label font-weight-bold label-lg-success label-inline" ';
                        str += " params ='" + row.EskiDeger + "'";
                        str += " tableName ='" + row.Alan + "'";
                        str += " formtitle = 'Etkinlik Detay'>";
                        str += ' Orijinal Değer</span>';
                    }  

                    return str;
                }
            },
            {
                field: 'YeniDeger',
                title: 'Yeni Değer',
                sortable: false,
                width: 130,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {

                    var str = "";
                    if (row.EtkinlikTipId == "1" || row.EtkinlikTipId == "2") {
                        str += '<span event="etklinlikTakipFormPopup" class="label font-weight-bold label-lg-success label-inline" ';
                        str += " params ='" + row.YeniDeger + "'";
                        str += " tableName ='" + row.Alan + "'";
                        str += " formtitle = 'Etkinlik Detay'>";
                        str += ' Yeni Değer</span>';
                    }

                    return str;
                }
            }
          
        ]


        return clm;
    }

    return {
        // public functions
        KursTakvimColumns: function () {
            return kursTakvimColumns();
        },
        EgitimTakvimColumns: function (rowSelection) {
            return egitimTakvimColumns(rowSelection);
        },
        KongreKursColumns: function () {
            return kongreKursColumns();
        },
        KongreFiyatColumns: function () {
            return kongreFiyatColumns();
        },
        KongreColumns: function () {
            return kongreColumns();
        },
        EgitimColumns: function () {
            return egitimColumns();
        },
        EgitimKursColumns: function () {
            return egitimKursColumns();
        },
        EgitimFiyatColumns: function () {
            return egitimFiyatColumns();
        },
        CariColumns: function () {
            return cariColumns();
        },
        StokColumns: function () {
            return stokColumns();
        },
        FaturaColumns: function () {
            return faturaColumns();
        },
        EkstreColumns: function () {
            return esktreColumns();
        },
        EtkinlikTakipColumns: function () {
            return etkinlikTakipColumns();
        },
        KisiColoumns: function () {
            return kisiColumns();
        },
        GorusmeColumns: function () {
            return gorusmeColumns();
        },
        NotColumns: function () {
            return notColumns();
        },
        HatirlaticiColumns: function () {
            return hatirlaticiColumns();
        },
        SikayetColumns: function () {
            return sikayetColumns();
        },
        GetColoums: function (name, rowSelection) {
            if (name == "cari") {
                return cariColumns();

            } else if (name == "kisi") {
                return kisiColumns();
            }
            else if (name == "stok") {
                return stokColumns();
            }
            else if (name == "gorusme") {
                return gorusmeColumns();
            }
            else if (name == "not") {
                return notColumns();
            }
            else if (name == "hatirlatici") {
                return hatirlaticiColumns();
            } else if (name == "kongre") {
                return kongreColumns();
            }
            else if (name == "kongreFiyat") {
                return kongreFiyatColumns();
            }
            else if (name == "kongreKurs") {
                return kongreKursColumns();
            }
            else if (name == "egitim") {
                return egitimColumns();
            }
            else if (name == "egitimFiyat") {
                return egitimFiyatColumns();
            }
            else if (name == "egitimKurs") {
                return egitimKursColumns();
            }
            else if (name == "egitimTakvim") {

                return egitimTakvimColumns(rowSelection);
            } else if (name == "kursTakvim") {

                return kursTakvimColumns(rowSelection);
            }
            else if (name == "sikayet") {
                return sikayetColumns();
            }
        }
    };
}();

