$(function() { let s = $("#basic_Layouts"), a = $(".nk-wrap"); const e = window.location.pathname; "/SignIn" == e || "/SignUp" == e || "/verifyemailaddress" == e ? s.attr("href", "assets/css/dashlite.css?ver=3.1.1") && a.addClass("nk-wrap-nosidebar") && $("app-header, app-sidebar, app-sidemenu").hide() : s.attr("href", "assets/css/dashliteb12b.css?ver=3.1.1") && a.removeClass("nk-wrap-nosidebar") && $("app-header, app-sidebar, app-sidemenu").show() });
