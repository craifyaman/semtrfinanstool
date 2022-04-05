var FormRepeater = function () {
    var init = function () {
        $.each($(".repeater"), function (index, item) {
            $(item).repeater(
                {
                    initEmpty: false,

                    defaultValues: {
                        'text-input': 'foo'
                    },

                    show: function () {
                        $(this).slideDown();
                    },

                    hide: function (deleteElement) {
                        console.log("deleteElement", deleteElement);

                        if (confirm('Kayıt Silinecek, Onaylıyor musunuz?')) {
                            $(this).slideUp(deleteElement);
                        }
                    }
                }
            )
        })
         
    }
    var initById = function (id) {

        $('#' + id).repeater({
                initEmpty: false,

                defaultValues: {
                    'text-input': 'foo'
                },

                show: function () {
                    $(this).slideDown();
                },

                hide: function (deleteElement) {
                    console.log("deleteElement", deleteElement);

                    if (confirm('Kayıt Silinecek, Onaylıyor musunuz?')) {
                        $(this).slideUp(deleteElement);
                    }
                }
            });



    };

    var initByIdDeleteTrigger = function (id,triggerDeleteButonId,triggerEvent) {

        $('#' + id).repeater({
            initEmpty: false,

            defaultValues: {
                'text-input': 'foo'
            },

            show: function () {
                $(this).slideDown();
            },

            hide: function (deleteElement) {
                console.log("deleteElement", deleteElement);

                if (confirm('Kayıt Silinecek, Onaylıyor musunuz?')) {
                    $(this).slideUp(deleteElement);
                }

                
            }
        });


    };
    return {
        // public functions
        init: function () {
            init();
        },
        initById: function (id) {
            initById(id);
        },
        initByIdDeleteTrigger: function (id, triggerDeleteButonId, triggerEvent) {

            initByIdDeleteTrigger(id, triggerDeleteButonId, triggerEvent);
        }
    };
}();
