// Web API Wrapper Function 
(function (webapi, $) {
    function safeAjax(ajaxOptions) {
        var deferredAjax = $.Deferred();

        shell.getTokenDeferred().done(function (token) {
            // add headers for AJAX
            if (!ajaxOptions.headers) {
                $.extend(ajaxOptions, {
                    headers: {
                        "__RequestVerificationToken": token
                    }
                });
            } else {
                ajaxOptions.headers["__RequestVerificationToken"] = token;
            }
            $.ajax(ajaxOptions)
                .done(function (data, textStatus, jqXHR) {
                    validateLoginSession(data, textStatus, jqXHR, deferredAjax.resolve);
                }).fail(deferredAjax.reject); //AJAX
        }).fail(function () {
            deferredAjax.rejectWith(this, arguments); // On token failure pass the token ajax and args
        });

        return deferredAjax.promise();
    }
    webapi.safeAjax = safeAjax;
})(window.webapi = window.webapi || {}, window.jQuery_3_7_1, jQuery);

// GCWeb Common Functions
(function (global, $) {
    'use strict';

    // Create a namespace if it doesn't already exist.
    const GCWJS = global.GCWJS = global.GCWJS || {};

    // Create the Common modules if they don't already exist.
    GCWJS.Common = GCWJS.Common || {};

    // Set default properties.
    GCWJS.Common.currentLang = $('html').data('lang');
    GCWJS.Common.i18n = {
        ABOUT_WEB_APP: { en: "Government of Canada Corporate", fr: "Organisation du gouvernement du Canada" },
        CDTS_APP_FOOTER_LINKS: { en: "Related links", fr: "Liens connexes" },
        TPHP: { en: "Top of Page", fr: "Haut de la page" },
        DATE_MODIFIED: {en:"Date modified:", fr: "Date de modification :"},
        LANG_SELECTION: {en:"Language selection", fr: "Sélection de la langue"},
        SKIP_TO_MAIN: {en:"Skip to main content", fr: "Passer au contenu principal"},
        SKIP_TO_ABOUT: {en:"Skip to \"About government\"", fr: "Passer à « À propos de cette application Web »"},
        SWITCH_TO_BASIC: {en:"Switch to basic HTML version", fr: "Passer à la version HTML simplifiée"},
        APP_NAME: {en:"Name of Web application", fr:"Nom de l'application Web"},
        ACC_MENU: {en:"Account menu", fr:"Menu des paramètres du compte"},
        MAIN_MENU: {en:"Main navigation menu", fr:"Menu de navigation principal"},  
        BREADCRUMB: {en:"You are here:", fr:"Vous êtes ici :"},
        SRCH: {en:"Search", fr:"Recherche"}
    }

    $(() => {
        const lang = $('html').data('lang') === "en" ? "en" : "fr";
        const i18n = GCWJS.Common.i18n;

        $('#aboutWebApp').text(i18n.ABOUT_WEB_APP[lang]);
        $('#cdts-appFooterLinks').text(i18n.CDTS_APP_FOOTER_LINKS[lang]);
        $('#tphp').html(i18n.TPHP[lang]+'<span class="glyphicon glyphicon-chevron-up"></span>');
        $('#wb-dtmd dt').text(i18n.DATE_MODIFIED[lang]);
        $('#wb-lng h2').text(i18n.LANG_SELECTION[lang]);
        $('#wb-tphp').find('a.wb-sl[href="#wb-cont"]').text(i18n.SKIP_TO_MAIN[lang]);
        $('#wb-tphp').find('a.wb-sl[href="#wb-info"]').text(i18n.SKIP_TO_ABOUT[lang]);
        $('#wb-tphp').find('a.wb-sl[href="?wbdisable=true"]').text(i18n.SWITCH_TO_BASIC[lang]);
        $('div.app-bar section h2.wb-inv').text(i18n.APP_NAME[lang]);
        $('#cdts-hiddenAccountMenu').text(i18n.ACC_MENU[lang]);
        $('#appNavMenu').text(i18n.MAIN_MENU[lang]);
        $('#breadcrumbPosition').text(i18n.BREADCRUMB[lang]);
        $('#cdts-hiddenSearch').text(i18n.SRCH[lang]);

    });

})(window, window.jQuery_3_7_1);
