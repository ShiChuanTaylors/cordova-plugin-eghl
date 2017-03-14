Nexstream eGHL Cordova Plugin
=============================

Cordova Library for integrating with the eGHL payment gateway's mobile SDK.


Installation
------------

`cordova plugin add cordova-plugin-eghl`



Usage
-----

```javascript
eGHL.makePayment(
    {
        /*
        * Mandatory payment parameters list:

        * transactionType, paymentMethod, serviceId, paymentId, orderNumber, paymentDesc,
        * merchantReturnUrl, amount, currencyCode, custIp, custName, custEmail, custPhone

        * Check the eGHL documentation for parameter names.

        * [All Field are defined as String], Except paymentTimeout.
        */

        // List of accepted params and some value detail (refer docs for more detail):
        CurrencyCode : "MYR" | ...
        PaymentMethod : "ANY" | "AUTH"
        TransactionType : "SALE"
        ServiceId : "sit" //Merchant Code or Service ID given by eGHL
        PaymentId : "P0000001" // Unique string for each payment
        OrderNumber : "P0000001" // Order number to refer current payment, can duplicate.
        PaymentDesc : "eGHL Payment testing"
        MerchantReturnUrl :  "https://*" // redirect when payment complete.
        Amount : "123.10" // e.g. 1000.00 for IDR
                       // Invalid format: 1,000.00 or 1000
        CustIp : "",
        CustName : "Beta Tester"
        CustEmail : "Tester@mail.com"
        CustPhone : "60123456789"
        B4TaxAmt : "",
        TaxAmt : "",
        MerchantName : "ABC Sdn Bhd"
        CustMac : "",
        MerchantApprovalUrl : "https://*"
        MerchantUnapprovalUrl : "https://*"
        MerchantCallbackUrl : "https://*" // server callback url
        LanguageCode : "MY" | "EN" | "CN" ...
        PageTimeout : "780" // timeout in seconds
        CardHolder : "",
        CardNo : "",
        CardExp : "",
        CardCvv2 : "",
        IssuingBank : "",
        BillAddr : "",
        BillPostal : "",
        BillCity : "",
        BillRegion : "",
        BillCountry : "",
        ShipAddr : "",
        ShipPostal : "",
        ShipCity : "",
        ShipRegion : "",
        ShipCountry : "",
        SessionId : "",
        TokenType : "",
        Token : "",
        Param6 : "",
        Param7 : "",
        EppMonth : "",
        PromoCode : "",
        ReqToken : "",
        PairingToken : "",
        ReqVerifier : "",
        PairingVerifier : "",
        CheckoutResourceURL : "",
        CardID : "",
        PreCheckoutID : "",
        PaymentTimeout : -1

    },
    function (resp) {
        // Success callback
        // resp is the resultCode from the Android SDK on Android; undefined on
        // iOS.
    },
    function (err) {
        // Failure callback
        // err is either a string or `-999` on iOS;
        //     1 = Transaction failed
        //     2 = Transaction Pending
        //     -999 = Transaction cancelled
        //     <other-integer> = The resultCode from eGHL's Android SDK
        //     "an error message" = error message
    }
)
```
