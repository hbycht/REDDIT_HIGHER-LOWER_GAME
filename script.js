function getData() {

    var code = [667931, 638243, 656958, 676757]
    console.log("test")


        for (let i = 0; i < code.length ; i++) {
            var settings = {
                "url": "https://api.twitter.com/1.1/trends/place.json?id=" + code[i],
                "method": "GET",
                "timeout": 0,
                "headers": {
                    "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAABwnYQEAAAAAVTpVsEwcMuL%2FHFBIhxwkfQ4q1rE%3DgLABWVzMJfti07cFWL8IrDs4arxMubjOP0ckgp2JIczys31o5w",
                    "Cookie": "guest_id=v1%3A164269893030158895; guest_id_ads=v1%3A164269893030158895; guest_id_marketing=v1%3A164269893030158895; personalization_id=\"v1_J/OcZu874E6c2Dx7p7ZEtw==\""
                },
            };

            $.ajax(settings).done(function (response) {
                console.log(response);
            });
        }
}

getData() npm