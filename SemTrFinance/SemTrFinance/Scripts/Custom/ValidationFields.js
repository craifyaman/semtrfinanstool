var ValidationFields = function () {

    function cariFormFields() {
        var fields = {
            Unvan: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Eposta: {
                validators: {
                    emailAddress: { message: 'Gecerli Bir Eposta Adresi Girin', },
                }
            },
            WebSitesi: {
                validators: {
                    uri: { message: 'Gecerli Bir url giriniz', },
                }
            }
        };
        return fields;
    }

    function gorusmeFormFields() {
        var fields = {
            KisiId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            GorusmeTipId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Konu: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' },
                }
            },
            Aciklama: {
                validators: {
                    callback: {
                        message: 'Durumun kapalı olması sonuç açıklaması girmelisiniz',
                        callback: function (input) {

                            var GorusmeAciklamaKodId = $('#GorusmeAciklamaKodId').val();
                            console.log("input", input);
                            console.log("durum", GorusmeAciklamaKodId);

                            if (GorusmeAciklamaKodId == "1" && input.value == "") {
                                return true;
                            }
                            else if (GorusmeAciklamaKodId != "1" && input.value == "") {
                                return false;
                            }

                            return true;
                        },
                    },
                }
            }
        };
        return fields;
    }

    function notFormFields() {
        var fields = {
            KisiId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            GorusmeTipId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Konu: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Aciklama: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            }
        };
        return fields;
    }

    function kisiFormFields() {
        var fields = {
            AdSoyad: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            CariId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            BransId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Eposta: {
                validators: {
                    emailAddress: { message: 'Gecerli Bir Eposta Adresi Girin', },
                }
            },
            Eposta2: {
                validators: {
                    emailAddress: { message: 'Gecerli Bir Eposta Adresi Girin', },
                }
            },
            Telefon: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
        };
        return fields;
    }

    function hatirlaticiFormFields() {
        var fields = {
            PersonelId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            HatirlatmaTarihi: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Aciklama: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' },
                }
            },
            KapanisAciklama: {
                validators: {
                    callback: {
                        message: 'Durumun kapalı olması sonuç açıklaması girmelisiniz',
                        callback: function (input) {

                            var durum = $('#Durum').val();
                            console.log("input", input);
                            console.log("durum", durum);
                            if (durum == "false" && input.value == "") {
                                return false;
                            }

                            return true;
                        },
                    },
                }

            }
        };
        return fields;
    }

    function kongreFormFields() {
        var fields = {
            Adi: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Baslangic: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Bitis: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Aciklama: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            IlceId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Yer: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            }
        };
        return fields;
    }

    function kongreFiyatFormFields() {
        var fields = {
            KongreId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Baslangic: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Bitis: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Aciklama: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Ücret: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' },
                    integer: { message: 'Rakam Giriniz' },
                }
            }
        };
        return fields;
    }

    function kongreKursFormFields() {
        var fields = {
            KongreId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            KursTipId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            KursKonuId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            EgitmenIdList: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            }
        };
        return fields;
    }

    function egitimFormFields() {
        var fields = {
            Adi: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Baslangic: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Bitis: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Aciklama: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            IlceId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Yer: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            }
        };
        return fields;
    }

    function egitimFiyatFormFields() {
        var fields = {
            EgitimId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Baslangic: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Bitis: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Aciklama: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Ücret: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' },
                    integer: { message: 'Rakam Giriniz' },
                }
            }
        };
        return fields;
    }

    function egitimKursFormFields() {
        var fields = {
            EgitimId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Adi: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            KursTipId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            KursKonuId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            EgitmenIdList: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            }
        };
        return fields;
    }

    function sikayetFormFields() {
        var fields = {
            Aciklama: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            KisiId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            RelId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            RelTypeId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            KayitTaihi: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            }
        };
        return fields;
    }

    function kursTakvimFormFields() {
        var fields = {
            KursId: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Adi: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Baslangic: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Bitis: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' }
                }
            },
            Kontenjan: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' },
                    integer: { message: 'Rakam Giriniz' }
                }
            },
            EkstraUcret: {
                validators: {
                    notEmpty: { message: 'Bos Birakilamaz' },
                    integer: { message: 'Rakam Giriniz' }
                }
            }
        };
        return fields;
    }

    return {
        // public functions
        SikayetFormFields: function () {
            return sikayetFormFields();
        },
        GorusmeFormFields: function () {
            return gorusmeFormFields();
        },
        NotFormFields: function () {
            return notFormFields();
        },
        KisiFormFields: function () {
            return kisiFormFields();
        },
        CariFormFields: function () {
            return cariFormFields();
        },
        HatirlaticiFormFields: function () {
            return hatirlaticiFormFields();
        },
        KongreFormFields: function () {
            return kongreFormFields();
        },
        KongreFiyatFormFields: function () {
            return kongreFiyatFormFields();
        },
        KongreKursFormFields: function () {
            return kongreKursFormFields();
        },
        KursTakvimFormFields: function () {
            return kursTakvimFormFields();
        },
        EgitimFormFields: function () {
            return egitimFormFields();
        },
        EgitimFiyatFormFields: function () {
            return egitimFiyatFormFields();
        },
        EgitimKursFormFields: function () {
            return egitimKursFormFields();
        },
        KursTakvimFormFields: function () {
            return kursTakvimFormFields();
        }
    };
}();

