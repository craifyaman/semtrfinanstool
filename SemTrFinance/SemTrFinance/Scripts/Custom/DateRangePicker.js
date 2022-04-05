var DaterangePicker = function () {

    // Private functions
    var init = function (id) {

        // predefined ranges
        var start = moment().subtract(29, 'days');
        var end = moment();

        $.each($(".dateRangePicker"), function (index, item) {

            if ($(item).attr("type")=="PreDefined") {

                var inputId = $(item).attr("inputId");

                $(item).daterangepicker({
                    buttonClasses: ' btn',
                    applyClass: 'btn-primary',
                    cancelClass: 'btn-secondary',

                    startDate: start,
                    endDate: end,
                    ranges: {
                        'Bugün': [moment(), moment()],
                        'Dün': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        'Son 7 Gün': [moment().subtract(6, 'days'), moment()],
                        'Son 30 Gün': [moment().subtract(29, 'days'), moment()],
                        'Bu Ay': [moment().startOf('month'), moment().endOf('month')],
                        'Geçen Ay': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    }
                }, function (start, end, label) {
                    var val = start.format('DD.MM.YYYY') + '-' + end.format('DD.MM.YYYY');
                    $("#" + inputId).val(val);
                    Dt.TriggerSearch(val, inputId);
                });

            }
        })
    }

    return {
        // public functions
        init : function () {
            init();
        }
    };
}();
