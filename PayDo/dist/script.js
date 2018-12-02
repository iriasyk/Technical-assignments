// $(function(){
//     $('#add_comment', '#like').on('click', function(e)
//     {   e.preventDefault();
//     });
// });﻿

$(document).ready(function () {
    $(document).on("click", "#add_comment1", function () {
        let form1 = $("form[name='form1']");
        form1.css("display", "flex");
    });
    $(document).on("click", "#add_comment2", function () {
        let form2 = $("form[name='form2']");
        form2.css("display", "flex");
    });
    $(document).on("click", "#add_comment3", function () {
        let form3 = $("form[name='form3']");
        form3.css("display", "flex");
    });
    // $(document).on("click", "#add_comment2", function () {
    //     let form = $("form[name='form2']");
    //     form.css("display", "flex");
    //     let footerBlock = $(".footer-block");
    //     $(footerBlock.replaceWith(form));
    // });

    $(document).on("click", "input[name='send3']", function () {
        let comment = $("textarea[name='comment3']").val();
        $("<p>\n" +
            "<div class=\"feedback\">\n" +
            "    <div class=\"feedback__block-comments\">\n" +
            "        <div>\n" +
            "             <div class=\"rectangle rectangle-expansion\">\n" +
            "                 <div class=\"rectangle__green\"></div>\n" +
            "             </div>\n" +
            "        </div>\n" +
            "        <div class=\"feedback__block-comments--right-block\">\n" +
            "            <span>Nad*****hda</span>\n" +
            "            <div class=\"right-link\">\n" +
            "                <a href=\"#\" onclick=\"return false\">Edit</a>\n" +
            "                <svg width=\"3\" height=\"3\" viewBox=\"0 0 3 3\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "                    <path d=\"M1.5 3.00003C2.32843 3.00003 3 2.32846 3 1.50003C3 0.671603 2.32843 3.05176e-05 1.5 3.05176e-05C0.671573 3.05176e-05 0 0.671603 0 1.50003C0 2.32846 0.671573 3.00003 1.5 3.00003Z\" fill=\"white\"/>\n" +
            "                </svg>\n" +
            "                <a href=\"#\" onclick=\"return false\">Delete</a>\n" +
            "            </div>\n" +
            "\n" +
            "            <p><span>My comment </span>" + comment + "</p><div class=\"buttons\">\n" +
            "            <a href=\"#\" onclick=\"return false\">Like</a>\n" +
            "            <svg width=\"3\" height=\"3\" viewBox=\"0 0 3 3\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "                <path d=\"M1.5 3.00003C2.32843 3.00003 3 2.32846 3 1.50003C3 0.671603 2.32843 3.05176e-05 1.5 3.05176e-05C0.671573 3.05176e-05 0 0.671603 0 1.50003C0 2.32846 0.671573 3.00003 1.5 3.00003Z\" fill=\"white\"/>\n" +
            "            </svg>\n" +
            "            <span class=\"span-day\">just</span>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>\n" +
            "</p>").appendTo("#comments");
        // let spanCount = $("#comments p").length;
        // // console.log(spanCount);
        // $("#count").appendTo($(spanCount));
    });
});