//-------Use of Controllers -----------------------------------//
//1.Create One controller folder under webapp and then use press function here in the controller
//2.Define controller library on the top.
//-------------------------------------------------------------//
// sap.ui.define([
//           "sap/ui/core/mvc/Controller"
// ], function(
// 	Controller
// ) {
// 	"use strict"; // Tell browser to run code in strict mode keep java script very strict 

// 	return Controller.extend("search.po.controller.App", {
//         onShow: function()
//         {
//             alert("Milly");
//         }
// 	});
// });
//---------------------------------------------------------------//
//---------------------------------------------------------------//


//---------------------------------------------------------------//
//---------Use of Modules & Models 
//1.Create onInit function for initialization 
//2.Inside of that create one json model and then bind with view
// 
//---------------------------------------------------------------//
sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(
	Controller,
	MessageToast,
	JSONModel,
	ResourceModel
) {
	"use strict"; // Tell browser to run code in strict mode keep java script very strict 

	return Controller.extend("search.po.controller.App", {

    // Initilization
        // onInit: function() {      
        //         // set the data model on the view
        //         var oData = {
        //                       recipient:{
        //                                 name:"ui5"
        //                                 }
        //                     };
        //                     var oModel = new JSONModel(oData);
        //                     this.getView().setModel(oModel);

        //     // set i18n model
        //     var oResourceModel = new ResourceModel({
        //                 bundleName:"search.po.i18n.i18n",
        //                 supportedLocales:[""],
        //                 fallbackLocale:""
        //                   });
        //     this.getView().setModel(oResourceModel,"i18n")
        //                 },
        onShow: function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var smsg = oBundle.getText("hellomsg", [sRecipient]);
            MessageToast.show(smsg);
        },

        onClear: function () {
            var oData = {
                recipient: {
                    name: "ui5"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            oModel.setProperty("/recipient/name", "");


        }
        

	});
});

//------------------------------------------------------------------------------//
//------------------------------------------------------------------------------//