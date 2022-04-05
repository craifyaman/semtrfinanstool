var RelType = function () {
   
     
    var EventHandler = function () {

        $(document).on("change", "[event='RelTypeId']", function (event) {
            event.preventDefault();

            var opt = $(this).find('option:selected');
            var url = $(opt).attr("url");

            $('#RelId').attr("url", url);

            $('#RelId')
                .find('option')
                .remove();
            //.end()
            //.append('<option value="">Seçiniz</option>')
            //.val('whatever');

            SelectPickerRemote.init();

        });
    }

    return {

        EventHandler: function () {
             EventHandler();
        } 
    };
}();